<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ImageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $locale = app()->getLocale();
        $altText = $this->custom_properties['alt_text'];
        if (isset($altText)) {
            $altText = json_decode($altText)->$locale;
        }
        $conversions = $this->generated_conversions;

        // Initialize an array to hold the URLs
        $conversionUrls = [];

        foreach ($conversions as $conversion => $exists) {
            if ($exists) {
                // Get the URL for each conversion
                $conversionUrls[$conversion] = $this->getUrl($conversion);
            }
        }
        return [
            'altText' => $altText,
            'sources' => $conversionUrls
        ];
    }
}
