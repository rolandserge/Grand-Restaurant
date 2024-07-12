<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PlatResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "nom" => $this->nom,
            "prix" => $this->prix,
            "image" => $this->image,
            "description" => $this->description,
            "status" => $this->status,
            "categorie" => new CategorieResource($this->categorie),
            "supplements" => SupplementResource::collection($this->whenLoaded("supplements")),
            "garnitures" => GarnitureResource::collection($this->whenLoaded("garnitures")),
            "date" => $this->created_at,
        ];
    }
}
