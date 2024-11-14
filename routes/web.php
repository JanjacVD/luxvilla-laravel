<?php

use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\EstateTypeController;
use App\Http\Controllers\Guest\HomepageController;
use App\Http\Controllers\HashtagController;
use App\Http\Controllers\HashtagGroupController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RealEstateController;
use App\Models\County;
use App\Models\EstateType;
use App\Models\RealEstate;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;


Route::get('/', function () {
    $locale = substr(request()->getPreferredLanguage(['en', 'hr']), 0, 2); // Detect browser language
    app()->setLocale($locale); // Set the locale for the app

    return redirect($locale === 'hr' ? '/hr' : '/en'); // Redirect to 'hr' or 'en'
});

Route::group(['prefix' => '{locale}', 'where' => ['locale' => 'en|hr']], function () {
    Route::get('/', [HomepageController::class, 'index'])->name('homepage');
    Route::get('estates/{typeSlug}/{countySlug?}/{citySlug?}/{areaSlug?}', [HomepageController::class, 'filteredEstates'])->name('estates.list');
    Route::get('estate/{estateId}', [HomepageController::class, 'getEstate'])->name('estates.show');
});

Route::get('/sitemap', function () {
    $sitemap = Sitemap::create();
    $langs = ['en', 'hr'];
    $types = EstateType::all('slug');
    $counties = County::with(['cities', 'cities.areas'])->get();
    $estates = RealEstate::all();
    foreach ($langs as $lang) {
        $sitemap->add(Url::create(route('homepage', ['locale' => $lang])));
        $types->each(function ($type) use ($sitemap, $lang, $counties) {
            $sitemap->add(Url::create(route('estates.list', ['locale' => $lang, 'typeSlug' => $type->slug])));
            $counties->each(function ($county) use ($type, $lang, $sitemap) {
                $sitemap->add(Url::create(route('estates.list', ['locale' => $lang, 'typeSlug' => $type->slug, 'countySlug' => $county->slug])));
                $county->cities->each(function ($city) use ($county, $type, $lang, $sitemap) {
                    $sitemap->add(Url::create(route('estates.list', ['locale' => $lang, 'typeSlug' => $type->slug, 'countySlug' => $county->slug, 'citySlug' => $city->slug])));
                    $city->areas->each(function ($area) use ($county, $type, $lang, $sitemap, $city) {
                        $sitemap->add(Url::create(route('estates.list', ['locale' => $lang, 'typeSlug' => $type->slug, 'countySlug' => $county->slug, 'citySlug' => $city->slug, 'areaSlug' => $area->slug])));
                    });
                });
            });
        });
        $estates->each(function ($estate) use ($lang, $sitemap) {
            $sitemap->add(Url::create(route('estates.show', ['locale' => $lang, 'estateId' => $estate->estate_id])));
        });
    }
    $type = "all";
    $counties->each(function ($county) use ($type, $lang, $sitemap) {
        $sitemap->add(Url::create(route('estates.list', ['locale' => $lang, 'typeSlug' => $type, 'countySlug' => $county->slug])));
        $county->cities->each(function ($city) use ($county, $type, $lang, $sitemap) {
            $sitemap->add(Url::create(route('estates.list', ['locale' => $lang, 'typeSlug' => $type, 'countySlug' => $county->slug, 'citySlug' => $city->slug])));
            $city->areas->each(function ($area) use ($county, $type, $lang, $sitemap, $city) {
                $sitemap->add(Url::create(route('estates.list', ['locale' => $lang, 'typeSlug' => $type, 'countySlug' => $county->slug, 'citySlug' => $city->slug, 'areaSlug' => $area->slug])));
            });
        });
    });
    $sitemap->writeToFile(public_path('sitemap.xml'));

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
