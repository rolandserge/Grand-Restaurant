<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\GarnitureController;
use App\Http\Controllers\PlatController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\SupplementController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function() {

    Route::get('/user', function (Request $request) {
        return "Ca marche";
    });

    Route::post("/logout", [AuthController::class, "Logout"]);

    Route::post("/addReservation", [ReservationController::class, "addReservation"]);

});

// Auth Route
Route::post("/login", [AuthController::class, "login"]);
Route::post("/register", [AuthController::class, "register"]);

// Garniture route
Route::get("/garnitures", [GarnitureController::class, 'index']);
Route::post('/addGarniture', [GarnitureController::class, "addGarniture"]);

// Supplement route
Route::get("/supplements", [SupplementController::class, 'index']);
Route::post("/addSupplement", [SupplementController::class, "addSupplement"]);


// Categorie route
Route::get('/categories', [CategorieController::class, 'index']);
Route::post('/addCategorie', [CategorieController::class, 'addCategorie']);

// Plat route
Route::get("/plats", [PlatController::class, 'index']);
Route::post("/addPlat", [PlatController::class, 'addPlat']);