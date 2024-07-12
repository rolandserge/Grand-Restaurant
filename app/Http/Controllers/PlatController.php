<?php

namespace App\Http\Controllers;

use App\Models\Plat;
use Illuminate\Http\Request;
use App\Http\Resources\PlatResource;
use Illuminate\Support\Facades\Validator;

class PlatController extends Controller
{
    public function index() {

        $plats = Plat::with('categorie','supplements', 'garnitures')->get();


        return PlatResource::collection($plats);
    }

    public function addPlat(Request $req) {

        $validation = Validator::make($req->all(), [
            'nom' => 'required',
            "prix" => 'required|integer',
            "categorie" => "required",
            "supplements" => "required",
            "garnitures" => "required",
            'description' => 'required',
            "image" => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        if($validation->fails()) {
            return response()->json([
                'errors' => $validation->messages(),
            ], 422);
        } else {

            if($req->hasFile('image')) {

                $file = $req->file("image");
                $extension = $file->getClientOriginalExtension();
                $filename = time().'.'.$extension;
                $file->move(public_path('uploads/plats/'), $filename);
                $image = 'uploads/plats/'.$filename;
            }

            $plat = Plat::create([
                'nom' => $req->nom,
                "prix" => $req->prix,
                "status" => false,
                "categorie_id"  => $req->categorie,
                'description' => $req->description,
                "image" => $image
            ]);

            // Étape 1: Convertir la liste en tableau PHP
            $supplementsArray = explode(",", $req->supplements);
            $garnituresArray = explode(",", $req->garnitures);

            // Étape 2: Convertir le tableau PHP en chaîne JSON
            $supplements = array_map('intval', $supplementsArray);
            $garnitures = array_map('intval', $garnituresArray);

            $plat->supplements()->attach($supplements);
            $plat->garnitures()->attach($garnitures);

            return response()->json([
                'message' => 'Supplement créee avec success !',
                "plat" => $plat
            ], 200);

        }
    }
}
