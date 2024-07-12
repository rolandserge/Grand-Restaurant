<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategorieResource;
use App\Models\Categorie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategorieController extends Controller
{
    public function index() {

        $categories = Categorie::all();

        return CategorieResource::collection($categories);
    }

    public function addCategorie(Request $req) {

        $validation = Validator::make($req->all(), [
            'nom' => 'required',
            'description' => 'required',
        ]);

        if($validation->fails()) {
            return response()->json([
                'errors' => $validation->messages(),
            ], 422);
        } else {

            $categorie = Categorie::create([
                'nom' => $req->nom,
                'description' => $req->description,
            ]);

            return response()->json([
                'message' => 'Categorie créee avec success !',
                "categorie" => $categorie
            ], 200);

        }
    }
}
