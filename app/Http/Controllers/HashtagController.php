<?php

namespace App\Http\Controllers;

use App\Models\Hashtag;
use App\Models\HashtagGroup;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HashtagController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($id)
    {
        return Inertia::render('Hashtag/Create', ['group' => $id]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, $id)
    {
        $group = HashtagGroup::findOrFail($id);
        $group->hashtags()->create([
            'name' => json_encode($request->input('name'))
        ]);
        return redirect()->route('hashtag-group.index')->with('message', 'Spremljeno');
    }

    /**
     * Display the specified resource.
     */
    public function show(Hashtag $hashtag)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $hashtag = Hashtag::findOrFail($id);
        $hashtag->name;
        return Inertia::render('Hashtag/Edit', ['hashtag' => $hashtag]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $hashtag = Hashtag::findOrFail($id);
        $name = json_encode($request->input('name'));
        $hashtag->update(['name' => $name]);
        return redirect()->back()->with('message', 'Spremljeno');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $group = Hashtag::findOrFail($id);
        $group->delete();
        return redirect()->back()->with('message', value: 'Izbrisano');
    }

    public function restore($id)
    {
        Hashtag::withTrashed()->findOrFail($id)->restore();
        return redirect()->back()->with('message', value: 'Obnovljeno');
    }
}
