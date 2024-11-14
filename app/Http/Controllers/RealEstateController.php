<?php

namespace App\Http\Controllers;

use App\Models\County;
use App\Models\EstateType;
use App\Models\HashtagGroup;
use App\Models\RealEstate;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RealEstateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $estates = RealEstate::withTrashed()->with(['estateType', 'area'])->get();
        return Inertia::render('Estate/Index', ['estates' => $estates]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $types = EstateType::all();
        $counties = County::with('cities', 'cities.areas')->get();
        $groups = HashtagGroup::with('hashtags')->get();
        return Inertia::render('Estate/Create', ['counties' => $counties, 'types' => $types, 'hashtagGroups' => $groups]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $count = RealEstate::count() + 1001;
        $hashtags = $request->input('hashtags');
        $images = $request->input('images');
        $estate = RealEstate::create([
            'estate_id' => "LUX" . $count,
            'name' => json_encode($request->input('name')),
            'featured' => $request->input('featured'),
            'estate_type_id' => $request->input('estate_type_id'),
            'price' => $request->input('price'),
            'area_id' => $request->input('featured'),
            'area_size' => $request->input('area'),
            'address' => $request->input('address'),
            'year_built' => $request->input('year_built'),
            'year_renovated' => $request->input('year_renovated'),
            'parking_available' => $request->input('parking_available'),
            'parking_spaces' => $request->input('parking_spaces'),
            'rooms' => $request->input('rooms'),
            'description' => json_encode($request->input('description')),
            'owner_name' => $request->input('owner_name'),
            'owner_contact' => $request->input('owner_contact'),
            'coordinates' => json_encode($request->input('coordinates')),
            'radius' => $request->input('radius'),
        ]);
        $imageFiles = $request->file('images');
        if ($imageFiles) {
            foreach ($imageFiles as $index => $image) {
                // Add the image file to the media collection
                $media = $estate->addMedia($image['file'])->toMediaCollection('images');

                // Set alt text metadata if provided
                if (isset($images[$index]['name'])) {
                    $media->setCustomProperty('alt_text', json_encode($images[$index]['name']));
                    $media->save();
                }
            }
        }
        if ($request->hasFile('video')) {
            $estate->addMedia($request->file('video'))
                ->toMediaCollection('videos');
        }
        $estate->hashtags()->sync($hashtags);

        return redirect()->back()->with('message', 'Kreirano');

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $estate = RealEstate::withTrashed()->with([
            'estateType',
            'area',
            'hashtags'
        ])->findOrFail($id);



        $images = $estate->getMedia('images');
        $images = $images->map(function ($image) {
            if (isset($image->custom_properties) && isset($image->custom_properties['alt_text'])) {
                $image->alt_text = json_decode($image['custom_properties']['alt_text']);
                return $image;
            }
            return $image;
        });

        // Retrieve videos from the 'videos' media collection
        $videos = $estate->getMedia('videos');

        return Inertia::render('Estate/Show', ['estate' => $estate, 'images' => $images, 'videos' => $videos]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $estate = RealEstate::with('hashtags', 'area', 'area.city', 'area.city.county')->findOrFail($id);
        $types = EstateType::all();
        $counties = County::with('cities', 'cities.areas')->get();
        $groups = HashtagGroup::with('hashtags')->get();
        $images = $estate->getMedia('images');
        $images = $images->map(function ($image) {
            if (isset($image->custom_properties) && isset($image->custom_properties['alt_text'])) {
                $image->alt_text = json_decode($image['custom_properties']['alt_text']);
                return $image;
            }
            return $image;
        });

        // Retrieve videos from the 'videos' media collection
        $videos = $estate->getMedia('videos');
        return Inertia::render('Estate/Edit', ['counties' => $counties, 'types' => $types, 'hashtagGroups' => $groups, 'videos' => $videos, 'estate' => $estate, 'images' => $images]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $estate = RealEstate::findOrFail($id);

        $hashtags = $request->input('hashtags');
        $images = $request->input('images');
        $estate->update([
            'name' => json_encode($request->input('name')),
            'featured' => $request->input('featured'),
            'estate_type_id' => $request->input('estate_type_id'),
            'price' => $request->input('price'),
            'area_id' => $request->input('featured'),
            'area_size' => $request->input('area'),
            'address' => $request->input('address'),
            'year_built' => $request->input('year_built'),
            'year_renovated' => $request->input('year_renovated'),
            'parking_available' => $request->input('parking_available'),
            'parking_spaces' => $request->input('parking_spaces'),
            'rooms' => $request->input('rooms'),
            'description' => json_encode($request->input('description')),
            'owner_name' => $request->input('owner_name'),
            'owner_contact' => $request->input('owner_contact'),
            'coordinates' => json_encode($request->input('coordinates')),
            'radius' => $request->input('radius'),
        ]);
        $imageFiles = $request->file('images');
        if ($imageFiles) {
            foreach ($imageFiles as $index => $image) {
                // Add the image file to the media collection
                $media = $estate->addMedia($image['file'])->toMediaCollection('images');

                // Set alt text metadata if provided
                if (isset($images[$index]['name'])) {
                    $media->setCustomProperty('alt_text', json_encode($images[$index]['name']));
                    $media->save();
                }
            }
        }
        if ($request->hasFile('video') || $request->input('removeVideo')) {
            $estate->getMedia('images')->first()->delete();
        }
        if ($request->hasFile('video')) {
            $estate->addMedia($request->file('video'))
                ->toMediaCollection('videos');
        }
        $toDelete = $request->input('imagesToDelete');
        if (isset($toDelete)) {
            foreach ($toDelete as $mediaId) {
                $media = $estate->getMedia('images')->find($mediaId);
                if ($media) {
                    $media->delete();
                }
            }
        }

        $estate->hashtags()->sync($hashtags);

        return redirect()->back()->with('message', 'Spremljeno');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $group = RealEstate::findOrFail($id);
        $group->delete();
        return redirect()->back()->with('message', value: 'Izbrisano');
    }

    public function restore($id)
    {
        RealEstate::withTrashed()->findOrFail($id)->restore();
        return redirect()->back()->with('message', value: 'Obnovljeno');
    }
}
