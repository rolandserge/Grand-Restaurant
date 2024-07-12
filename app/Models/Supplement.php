<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplement extends Model
{
    use HasFactory;

    protected $fillable = ["nom", "image", "description"];

    public function plats()
    {
        return $this->belongsToMany(Plat::class, 'plat_supplements');
    }

    public function commandeItems()
    {
        return $this->belongsToMany(CommandeItem::class, 'commande_item_supplements');
    }
}
