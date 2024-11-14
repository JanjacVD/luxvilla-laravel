<?php

namespace Database\Seeders;

use App\Models\County;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $countyJson = File::get(database_path('json/county.json'));
        $counties = json_decode($countyJson, true);

        $cityJson = File::get(database_path('json/city.json'));
        $cities = json_decode($cityJson, true);

        $areaJson = File::get(database_path('json/area.json'));
        $areas = json_decode($areaJson, true);
        foreach ($counties as $county) {
            $cId = $county['_id'];
            $name = $county['name'];
            unset($name['_type']);
            $slug = $county['route'];
            $createdCounty = County::create([
                'name' => json_encode($name),
                'slug' => $slug
            ]);
            $filteredCities = array_filter($cities, function ($city) use ($cId) {
                return $city['county']['_ref'] == $cId;
            });
            foreach ($filteredCities as $filCity) {

                $citySlug = $filCity['route'];
                $cityName = $filCity['name'];
                $cityId = $filCity['_id'];
                $filteredAreas = array_filter($areas, function ($area) use ($cityId) {
                    return $area['city']['_ref'] == $cityId;
                });
                $createdCity = $createdCounty->cities()->create([
                    'name' => $cityName,
                    'slug' => $citySlug
                ]);
                foreach ($filteredAreas as $filArea) {
                    $areaName = $filArea['name'];
                    $areaSlug = $filArea['route'];
                    $createdCity->areas()->create([
                        'name' => $areaName,
                        'slug' => $areaSlug
                    ]);
                }
            }
        }
    }
}
