<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MinimumEstateResource extends JsonResource
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
            'estateId' => $this->estate_id,
            'name' => $this->name[$locale],
            'featured' => $this->featured,
            'estateTypeId' => $this->estate_type_id,
            'price' => $this->price,
            'areaSize' => $this->area_size,
            'yearBuilt' => $this->year_built,
            'yearRenovated' => $this->year_renovated,
            'parking' => $this->parking_available ? $this->parking_spaces : null,
            'rooms' => $this->rooms,
            'sold' => isset($this->sold_at),
            'hashtags' => $this->hashtags->pluck('id')
        ];
    }
}
