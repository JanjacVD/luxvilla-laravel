<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HashtagGroupResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $name = $this->name;
        $locale = app()->getLocale();

        // Fallback in case $name is not an array or doesn't have "en" key
        return [
            'id' => $this->id,
            'name' => $name[$locale], // or provide a default value if necessary,
            'hashtags' => $this->whenLoaded('hashtags', HashtagResource::collection($this->hashtags))
        ];
    }
}
