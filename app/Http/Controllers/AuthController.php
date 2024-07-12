<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function Login(Request $req) {

        $validator = Validator::make($req->all(), [
            'email' => 'required|email',
            'password' => 'required|min:8'
        ]);

        if($validator->fails()) {

            return response()->json([
                'error' => $validator->messages(),
            ], 422);

        } else {

            if(Auth::attempt(['email' => $req->email, 'password' => $req->password])) {

                $req->session()->regenerate();

                return response()->json([
                    'user' => Auth::user(),
                    'message' => 'connexion reussi avec succes',
                ], 200);

            } else  {

                return response()->json([
                    'message' => 'Vos identifiants sont incorrect',
                ], 400);
            }
        }
    }

    public function Register(Request $req) {

        $validation = Validator::make($req->all(), [
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'password' => 'required|min:8',
        ]);

        if($validation->fails()) {

            return response()->json([
                'errors' => $validation->messages(),
            ], 422);
        } else {

            $user = User::create([
                'name' => $req->name,
                'email' => $req->email,
                'password' => Hash::make($req->password)
            ]);

            Auth::login($user);

            $req->session()->regenerate();

            return response()->json([
                'message' => 'Personnel créee avec success',
                "user" => Auth::user()
            ], 200);

        }

    }

    public function Logout(Request $request)
    {
        auth('web')->logout();
        
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'deconnexion avec success !'], 200);
    }
}
