<?php

use App\Http\Controllers\BahanController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\FunfactController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\ValueController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/product', function () {
    return Inertia::render('Product');
});

Route::get('/material-info', function () {
    return Inertia::render('MaterialInfo');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth:sanctum'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

/*
    WEB
*/
Route::prefix('dashboard')->middleware('auth')->group(function () {
    /*
        Value
    */
    Route::get('/values', [ValueController::class, 'index']);
    Route::get('/values/create', [ValueController::class, 'create']);
    Route::get('/values/{value}/edit', [ValueController::class, 'edit']);

    /*
        FAQ
    */
    Route::get('/faq', [FaqController::class, 'index']);
    Route::get('/faq/create', [FaqController::class, 'create']);
    Route::get('/faq/{faq}/edit', [FaqController::class, 'edit']);

    /*
        Testimonial
    */
    Route::get('/testimonial', [TestimonialController::class, 'index']);
    Route::get('/testimonial/create', [TestimonialController::class, 'create']);
    Route::get('/testimonial/{testimonial}/edit', [TestimonialController::class, 'edit']);

    /*
        About
    */
    Route::get('/about', [AboutController::class, 'index']);
    Route::get('/about/{about}/edit', [AboutController::class, 'edit']);

    // Web Product
    Route::get('/product', [ProductController::class, 'index']);
    Route::get('/product/create', [ProductController::class, 'create']);
    Route::get('/product/{product}/edit', [ProductController::class, 'edit']);

    // Web Bahan
    Route::get('/bahan', [BahanController::class, 'index']);
    Route::get('/bahan/create', [BahanController::class, 'create']);
    Route::get('/bahan/{value}/edit', [BahanController::class, 'edit']);

    // Web Bahan
    Route::get('/funfact', [FunfactController::class, 'index']);
    Route::get('/funfact/create', [FunfactController::class, 'create']);
    Route::get('/funfact/{funfact}/edit', [FunfactController::class, 'edit']);
});



/*
    Api
*/

Route::middleware('auth')->group(function () {
    /* value */
    Route::post('/values', [ValueController::class, 'store']);
    Route::put('/values/{value}', [ValueController::class, 'update']);
    Route::delete('/values/{value}', [ValueController::class, 'delete']);

/*
    FAQ
    */
    Route::post('/faq', [FaqController::class, 'store']);
    Route::put('/faq/{faq}', [FaqController::class, 'update']);
    Route::delete('/faq/{faq}', [FaqController::class, 'delete']);

    /*
    Testimonial
    */
    Route::post('/testimonial', [TestimonialController::class, 'store']);
    Route::delete('/testimonial/{testimonial}', [TestimonialController::class, 'delete']);
    Route::post('/testimonial/{testimonial}', [TestimonialController::class, 'update']);

    /*
    About
    */
    Route::post('/about', [AboutController::class, 'store']);
    Route::delete('/about/{about}', [AboutController::class, 'delete']);
    Route::put('/about/{about}', [AboutController::class, 'update']);
});

Route::get('/about/data', [AboutController::class, 'getAbout']);
Route::get('/values/data', [ValueController::class, 'getValue']);
Route::get('/testimonial/data', [TestimonialController::class, 'getTestimonial']);
Route::get('/faq/data', [FaqController::class, 'getFaq']);


// API Bahan
Route::get('/bahan/data', [BahanController::class, 'getBahan']);
Route::post('/bahan', [BahanController::class, 'store']);
Route::put('/bahan/{bahan}', [BahanController::class, 'update']);
Route::delete('/bahan/{bahan}', [BahanController::class, 'delete']);
//

// API Product
Route::get('/product/data', [ProductController::class, 'getProduct']);
Route::get('/product/category/{id}', [ProductController::class, 'getProductByCategory']);
Route::post('/product', [ProductController::class, 'store']);
Route::post('/product/{product}', [ProductController::class, 'update']);
Route::delete('/product/{product}', [ProductController::class, 'delete']);
//

// API Funfact
Route::get('/funfact/data', [FunfactController::class, 'getFunfact']);
Route::post('/funfact', [FunfactController::class, 'store']);
Route::post('/funfact/{funfact}', [FunfactController::class, 'update']);
Route::delete('/funfact/{funfact}', [FunfactController::class, 'delete']);
//

require __DIR__ . '/auth.php';

