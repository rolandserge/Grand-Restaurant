<?php

namespace App\Http\Controllers;

use App\Http\Resources\GarnitureResource;
use App\Models\Garniture;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GarnitureController extends Controller
{
    public function index() {

        $garnitures = Garniture::all();

        return GarnitureResource::collection($garnitures);
    }

    public function addGarniture(Request $req) {

        $validation = Validator::make($req->all(), [
            'nom' => 'required',
            'description' => 'required',
        ]);

        if($validation->fails()) {

            return response()->json([
                'errors' => $validation->messages(),
            ], 422);
        } else {

            $garniture = Garniture::create([
                'nom' => $req->nom,
                'description' => $req->description,
            ]);

            return response()->json([
                'message' => 'Garniture créee avec success !',
                "garniture" => $garniture
            ], 200);

        }
    }
}
