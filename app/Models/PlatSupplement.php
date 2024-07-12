<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlatSupplement extends Model
{
    use HasFactory;

    protected $fillable = ["plat_id", "supplement_id"];
}
