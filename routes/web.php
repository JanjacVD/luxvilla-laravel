<?php

use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\EstateTypeController;
use App\Http\Controllers\Guest\HomepageController;
use App\Http\Controllers\HashtagController;
use App\Http\Controllers\HashtagGroupController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RealEstateController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    $locale = substr(request()->getPreferredLanguage(['en', 'hr']), 0, 2); // Detect browser language
    app()->setLocale($locale); // Set the locale for the app

    return redirect($locale === 'hr' ? '/hr' : '/en'); // Redirect to 'hr' or 'en'
});

Route::group(['prefix' => '{locale}', 'where' => ['locale' => 'en|hr']], function () {
    Route::get('/', [HomepageController::class, 'index']);
    Route::get('estates/{typeSlug}/{countySlug?}/{citySlug?}/{areaSlug?}', [HomepageController::class, 'filteredEstates'])->name('estates.list');
    Route::get('estate/{estateId}', [HomepageController::class, 'getEstate'])->name('estates.show');
});

Route::post('contact-submit', [ContactFormController::class, 'store'])->name('contact.store');



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('estate-type', EstateTypeController::class);
    Route::post('estate-type/{estate_type}/restore', [EstateTypeController::class, 'restore'])->name('estate-type.restore');

    Route::resource('hashtag-group', HashtagGroupController::class);
    Route::post('hashtag-group/{hashtag_group}/restore', [HashtagGroupController::class, 'restore'])->name('hashtag-group.restore');

    Route::get('hashtag/{group}/create', [HashtagController::class, 'create'])->name('hashtag.create');
    Route::post('hashtag/{group}/create', [HashtagController::class, 'store'])->name('hashtag.store');
    Route::delete('hashtag/{hashtag}', [HashtagController::class, 'destroy'])->name('hashtag.destroy');
    Route::get('hashtag/{hashtag}/edit', [HashtagController::class, 'edit'])->name('hashtag.edit');
    Route::put('hashtag/{hashtag}/edit', [HashtagController::class, 'update'])->name('hashtag.update');
    Route::post('hashtag/{hashtag}/restore', [HashtagController::class, 'restore'])->name('hashtag.restore');

    Route::resource('real-estate', RealEstateController::class)->except('update');
    Route::post('real-estate/{real_estate}/update', [RealEstateController::class, 'update'])->name('real-estate.update');
    Route::post('real-estate/{real_estate}/restore', [RealEstateController::class, 'restore'])->name('real-estate.restore');

    Route::resource('contacts', ContactFormController::class)->except('store');

});

require __DIR__ . '/auth.php';
