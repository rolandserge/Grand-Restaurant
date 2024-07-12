<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plat extends Model
{
    use HasFactory;

    protected $fillable = ["nom", "prix", "description", "image", "status", "categorie_id"];

    public function categorie() {
        return $this->belongsTo(Categorie::class);
    }

    public function commandeItems() {
        return $this->hasMany(CommandeItem::class);
    }

    public function garnitures()
    {
        return $this->belongsToMany(Garniture::class, 'garniture_plats');
    }

    public function supplements()
    {
        return $this->belongsToMany(Supplement::class, 'plat_supplements');
    }
}
