<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommandeItemGarniture extends Model
{
    use HasFactory;

    protected $fillable = ["garniture_id", "commande_item_id"];
}
