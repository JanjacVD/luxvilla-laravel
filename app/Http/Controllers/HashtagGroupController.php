<?php

namespace App\Http\Controllers;

use App\Models\HashtagGroup;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HashtagGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $groups = HashtagGroup::withTrashed()->with('hashtags')->get();
        return Inertia::render("HashtagGroup/Index", ['groups' => $groups]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("HashtagGroup/Create", );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $name = $request->input('name');
        HashtagGroup::create(['name' => json_encode($name)]);
        return redirect()->back()->with('message', 'Kreirano');
    }

    /**
     * Display the specified resource.
     */
    public function show(HashtagGroup $hashtagGroup)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $group = HashtagGroup::findOrFail($id);
        return Inertia::render('HashtagGroup/Edit', ['group' => $group]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $group = HashtagGroup::findOrFail($id);
        $name = $request->input('name');
        $group->update(['name' => $name]);
        return redirect()->back()->with('message', value: 'Spremljeno');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $group = HashtagGroup::findOrFail($id);
        $group->delete();
        return redirect()->back()->with('message', value: 'Izbrisano');
    }

    public function restore($id)
    {
        HashtagGroup::withTrashed()->findOrFail($id)->restore();
        return redirect()->back()->with('message', value: 'Obnovljeno');
    }
}
