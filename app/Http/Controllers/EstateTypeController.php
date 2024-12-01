<?php

namespace App\Http\Controllers;

use App\Models\EstateType;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class EstateTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $types = EstateType::withTrashed()->get();
        return Inertia::render('EstateType/Index', ['types' => $types]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('EstateType/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $name = $request->input('name');
        $slug = $name['en'];
        $slug = Str::slug($slug, '-');
        EstateType::create(['name' => json_encode($name), 'slug' => $slug]);
        return redirect()->back()->with('message', 'Kreirano');
    }

    /**
     * Display the specified resource.
     */
    public function show(EstateType $estateType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $type = EstateType::findOrFail($id);
        return Inertia::render('EstateType/Edit', ['type' => $type]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $type = EstateType::findOrFail($id);
        $name = $request->input('name');
        $slug = $name['en'];
        $slug = Str::slug($slug, '-');
        $type->update(['name' => json_encode($name), 'slug' => $slug]);
        return redirect()->back()->with('message', value: 'Spremljeno');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $type = EstateType::withTrashed()->findOrFail($id);
        if (!$type->trashed()) {
            $type->delete();
        } else {
            $type->forceDelete();
        }
        return redirect()->back()->with('message', value: 'Izbrisano');
    }

    public function restore($id)
    {
        EstateType::withTrashed()->findOrFail($id)->restore();
        return redirect()->back()->with('message', value: 'Obnovljeno');
    }
}
