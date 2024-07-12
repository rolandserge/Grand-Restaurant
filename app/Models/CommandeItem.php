<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommandeItem extends Model
{
    use HasFactory;

    protected $fillable = ["quantite", "prix", "commande_id", "plat_id"];

    public function commande() {
        return $this->belongsTo(Commande::class);
    }

    public function plat() {
        return $this->belongsTo(Plat::class);
    }

    public function garnitures()
    {
        return $this->belongsToMany(Garniture::class, 'commmande_item_garnitures');
    }
    public function supplements()
    {
        return $this->belongsToMany(Supplement::class, 'commande_item_supplements');
    }
}
