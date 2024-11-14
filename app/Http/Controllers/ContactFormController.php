<?php

namespace App\Http\Controllers;

use App\Models\ContactForm;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactFormController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contactForms = ContactForm::orderBy('read')
            ->orderBy('estate_id')
            ->get();
        return Inertia::render('Contacts/Index', ['contacts' => $contactForms]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate(
            [
                'name' => 'required|max:255',
                'email' => 'required',
                'phone' => 'required',
                'msg' => 'required',
                'estate_id' => 'string'
            ]
        );

        ContactForm::create($validated);
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(ContactForm $contactForm)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ContactForm $contactForm)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $contact = ContactForm::findOrFail($id);
        $contact->update($request->input());
        return redirect()->back()->with('message', "Ažurirano");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ContactForm $contactForm)
    {
        //
    }
}
