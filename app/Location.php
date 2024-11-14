<?php

namespace App;

use App\Http\Resources\AreaResource;
use App\Http\Resources\CityResource;
use App\Http\Resources\CountyFilterResource;
use App\Http\Resources\CountyResource;
use App\Http\Resources\EstateTypeResource;
use Illuminate\Http\Request;
use App\Models\Area;
use App\Models\City;
use App\Models\County;
use App\Models\EstateType;

class Location
{

    public function __construct()
    {
    }

    public function generateLocationFilters()
    {

        $counties = County::with(['cities', 'cities.areas', 'cities.areas.estates'])->get();
        return CountyResource::collection($counties);
    }
}