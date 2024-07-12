<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ReservationController extends Controller
{
    public function index() {

    }

    public function addReservation(Request $req) {

        $validation = Validator::make($req->all(), [
            'nom' => 'required',
            "nombre" => 'required',
            "date" => 'required',
            "heure" => 'required',
            'description' => 'required',
        ]);

        if($validation->fails()) {

            return response()->json([
                'errors' => $validation->messages(),
            ], 422);
        } else {

            $reservation = Reservation::create([
                'nom' => $req->nom,
                "nombre" => $req->nombre,
                "date" => $req->date,
                "heure" => $req->heure,
                'description' => $req->description,
            ]);

            return response()->json([
                'message' => 'Votre reservation créee avec success !',
                "garniture" => $reservation
            ], 200);

        }
    }
}
