<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Image\Enums\AlignPosition;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Image\Enums\Fit;

class RealEstate extends Model implements HasMedia
{
    use SoftDeletes, InteractsWithMedia;
    protected $fillable = [
        'estate_id',
        'name',
        'featured',
        'estate_type_id',
        'price',
        'area_id',
        'area_size',
        'year_built',
        'year_renovated',
        'coordinates',
        'parking_available',
        'address',
        'parking_spaces',
        'rooms',
        'description',
        'owner_name',
        'owner_contact',
        'sold_at',
        'coordinates',
        'radius',
    ];
    public static function getNewest()
    {
        return self::where('featured', false)
            ->where('sold_at', null)
            ->orderBy('created_at', 'desc')
            ->limit(10)->with([
                    'media' => function ($query) {
                        $query->whereIn('collection_name', ['images', 'videos']);
                    }
                ])
            ->get();
    }

    public static function getFeaturedExcludingNewest()
    {
        return self::where('featured', true)
            ->where('sold_at', null)
            ->orderBy('created_at', 'desc')
            ->take(10)  // Get the next 10 models
            ->with([
                'media' => function ($query) {
                    $query->whereIn('collection_name', ['images', 'videos']);
                }
            ])
            ->get();
    }

    public function getNameAttribute($value)
    {
        // Decode the JSON string stored in the database
        return json_decode($value, true); // 'true' returns an associative array
    }


    public function getDescriptionAttribute($value)
    {
        // Decode the JSON string stored in the database
        return json_decode($value, true); // 'true' returns an associative array
    }
    public function getCoordinatesAttribute($value)
    {
        // Decode the JSON string stored in the database
        return json_decode($value, true); // 'true' returns an associative array
    }

    public function estateType()
    {
        return $this->belongsTo(EstateType::class);
    }
    public function area()
    {
        return $this->belongsTo(Area::class);
    }

    // app/Models/RealEstate.php

    public function hashtags()
    {
        return $this->belongsToMany(Hashtag::class, 'hashtag_real_estate');
    }

    public function registerMediaConversions(Media $media = null): void
    {
        // Path to the watermark image
        $watermarkPath = public_path('logo.png');

        // Desktop conversion with center watermark
        $this->addMediaConversion('desktop')
            ->width(1920)       // Width for desktop version
            ->height(1080)      // Height for desktop version
            ->sharpen(10)       // Optional sharpening
            ->watermark($watermarkPath, AlignPosition::Center, alpha: 50)
            // Optional opacity adjustment
            ->nonQueued(); // Process synchronously for instant availability

        // Mobile conversion with center watermark
        $this->addMediaConversion('mobile')
            ->width(768)        // Width for mobile version
            ->height(1024)      // Height for mobile version
            ->quality(75)       // Reduce quality for faster loading
            ->watermark($watermarkPath, AlignPosition::Center, alpha: 50)
            ->nonQueued();      // Process synchronously for instant availability

        // OG conversion with center watermark
        $this->addMediaConversion('og')
            ->width(1200)       // Width for Open Graph
            ->height(630)       // Height for Open Graph
            ->fit(Fit::Crop, 1200, 630) // Crop to exact OG dimensions
            ->watermark($watermarkPath, AlignPosition::Center, alpha: 50)
            ->nonQueued();      // Process synchronously for instant availability

        if ($media && $media->getTypeFromMime() === 'video') {
            $this->addMediaConversion('thumb')
                ->width(640)
                ->height(360)
                ->performOnCollections('videos')
                ->nonQueued();
        }
    }
}
