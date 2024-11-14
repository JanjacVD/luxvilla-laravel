<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use App\Http\Resources\HashtagGroupResource;
use App\Http\Resources\HashtagResource;
use App\Http\Resources\RealEstateResource;
use App\Location;
use App\Models\HashtagGroup;
use App\Models\RealEstate;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomepageController extends Controller
{

    public function index(Request $request)
    {
        $newest = RealEstateResource::collection(RealEstate::getNewest());

        $featured = RealEstateResource::collection(RealEstate::getFeaturedExcludingNewest());
        $locationFilter = new Location();
        return Inertia::render('Guest/Homepage', ['featured' => $featured, 'newest' => $newest, 'location' => $locationFilter->generateLocationFilters()]);
    }

    public function filteredEstates(Request $request, $locale, $typeSlug, $countySlug = null, $citySlug = null, $areaSlug = null)
    {
        $params = [
            'typeSlug' => $typeSlug,
            'countySlug' => $countySlug,
            'citySlug' => $citySlug,
            'areaSlug' => $areaSlug,
        ];
        // Start with the base query for estates
        $estates = RealEstate::with(['area', 'area.city', 'area.city.county', 'estateType']);

        // Filter by estate type if it's not 'all'
        if ($typeSlug !== 'all') {
            $estates = $estates->whereHas('estateType', function ($query) use ($typeSlug) {
                $query->where('slug', $typeSlug);
            });
        }

        // Conditionally build the nested relation query based on the slugs
        if ($countySlug) {
            $estates = $estates->whereHas('area.city.county', function ($query) use ($countySlug) {
                $query->where('slug', $countySlug);
            });
        }

        if ($citySlug) {
            $estates = $estates->whereHas('area.city', function ($query) use ($citySlug) {
                $query->where('slug', $citySlug);
            });
        }

        if ($areaSlug) {
            $estates = $estates->whereHas('area', function ($query) use ($areaSlug) {
                $query->where('slug', $areaSlug);
            });
        }

        if (request()->has('sortBy') && request()->has('sortOrder')) {
            $sortField = request('sortBy') === "date" ? 'created_at' : "price";
            $estates = $estates->orderBy($sortField, request('sortOrder'));
        }

        if (request()->has('minArea')) {
            $estates = $estates->where('area_size', '>=', request('minArea'));
        }
        if (request()->has('maxArea')) {
            $estates = $estates->where('area_size', '<=', request('maxArea'));
        }
        if (request()->has('minPrice')) {
            $estates = $estates->where('price', '>=', request('minPrice'));
        }
        if (request()->has('maxPrice')) {
            $estates = $estates->where('price', '<=', request('maxPrice'));
        }
        $estates->where('sold_at', null);

        $locationFilter = new Location();
        $hashtags = HashtagGroupResource::collection(HashtagGroup::with('hashtags')->get());

        return Inertia::render('Guest/EstateList', [
            'estates' => RealEstateResource::collection($estates->get()),
            'location' => $locationFilter->generateLocationFilters(),
            'params' => $params,
            'hashtags' => $hashtags
        ]);
    }

    public function getEstate($locale, $estateId)
    {
        $estate = RealEstate::where('estate_id', $estateId)->first();
        return Inertia::render('Guest/EstateView', ['estate' => new RealEstateResource($estate)]);
    }
}
