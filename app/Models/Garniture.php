<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Garniture extends Model
{
    use HasFactory;

    protected $fillable = ["nom", "description"];

    public function plats()
    {
        return $this->belongsToMany(Plat::class, 'garniture_plats');
    }

    public function commandeItems()
    {
        return $this->belongsToMany(CommandeItem::class, 'commande_item_garnitures');
    }
}
