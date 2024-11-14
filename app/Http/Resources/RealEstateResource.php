<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RealEstateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        $locale = app()->getLocale();

        $this->load([
            'estateType',
            'area',
            'area.city',
            'area.city.county',
            'media',
            'hashtags.group',
        ]);

        $images = $this->media->where('collection_name', 'images');
        $videos = $this->media->where('collection_name', 'videos');
        $groupedHashtags = $this->hashtags->groupBy(function ($hashtag) use ($locale) {
            return $hashtag->group->name[$locale];  // Group by group name
        });

        // Transform each group into a resource collection
        $groupedHashtags = $groupedHashtags->map(function ($groupHashtags) {
            return HashtagResource::collection($groupHashtags);
        });

        return [
            'estateId' => $this->estate_id,
            'name' => $this->name[$locale],
            'featured' => $this->featured,
            'estateType' => new EstateTypeResource($this->estateType),
            'price' => $this->price,
            'area' => new AreaResource($this->area),
            'areaSize' => $this->area_size,
            'yearBuilt' => $this->year_built,
            'yearRenovated' => $this->year_renovated,
            'coordinates' => $this->coordinates,
            'parking' => $this->parking_available ? $this->parking_spaces : null,
            'rooms' => $this->rooms,
            'description' => $this->description[$locale],
            'sold' => isset($this->sold_at),
            'radius' => $this->radius,
            'hashtags' => $groupedHashtags,
            'video' => empty($videos) ? null : new VideoResource($videos->first()),
            'images' => ImageResource::collection($images)
        ];
    }
}
