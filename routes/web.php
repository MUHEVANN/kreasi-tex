<?php

use App\Http\Controllers\FaqController;
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
});

Route::get('/values/data', [ValueController::class, 'getValue']);
Route::get('/testimonial/data', [TestimonialController::class, 'getTestimonial']);
Route::get('/faq/data', [FaqController::class, 'getFaq']);

require __DIR__ . '/auth.php';
