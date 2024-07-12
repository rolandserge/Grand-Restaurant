<?php

namespace App\Http\Controllers;

use App\Http\Resources\SupplementResource;
use App\Models\Supplement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SupplementController extends Controller
{
    public function index() {

        $supplements = Supplement::all();

        return SupplementResource::collection($supplements);
    }

    public function addSupplement(Request $req) {

        $validation = Validator::make($req->all(), [
            'nom' => 'required',
            'description' => 'required',
            "image" => 'required',
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
                $file->move(public_path('uploads/supplements/'), $filename);
                $image = 'uploads/supplements/'.$filename;
            }

            $supplement = Supplement::create([
                'nom' => $req->nom,
                'description' => $req->description,
                "image" => $image
            ]);

            return response()->json([
                'message' => 'Supplement créee avec success !',
                "garniture" => $supplement
            ], 200);

        }
    }
}
