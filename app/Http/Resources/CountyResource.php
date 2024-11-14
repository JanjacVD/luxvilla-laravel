<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CountyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        $locale = app()->getLocale();
        return [
            'id' => $this->id,
            'name' => $this->name[$locale],
            'slug' => $this->slug,
            'cities' => $this->whenLoaded('cities', CityResourceNoCounty::collection($this->cities))
        ];
    }
}
