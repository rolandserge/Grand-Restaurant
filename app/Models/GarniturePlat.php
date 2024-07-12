<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GarniturePlat extends Model
{
    use HasFactory;

    protected $fillable = ["garniture_id", "plat_id"];
}
