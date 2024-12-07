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
Route::prefix('dashboard')->group(function () {
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
});



/* 
    Api
*/
/* value */
Route::get('/values/data', [ValueController::class, 'getValue']);
Route::post('/values', [ValueController::class, 'store']);
Route::put('/values/{value}', [ValueController::class, 'update']);
Route::delete('/values/{value}', [ValueController::class, 'delete']);

/* 
    FAQ
*/
Route::get('/faq/data', [FaqController::class, 'getFaq']);
Route::post('/faq', [FaqController::class, 'store']);
Route::put('/faq/{faq}', [FaqController::class, 'update']);
Route::delete('/faq/{faq}', [FaqController::class, 'delete']);

/* 
    Testimonial
*/
Route::get('/testimonial', [TestimonialController::class, 'getTestimonial']);
Route::post('/testimonial', [TestimonialController::class, 'store']);
Route::put('/testimonial/{testimonial}', [TestimonialController::class, 'update']);
Route::delete('/testimonial/{testimonial}', [TestimonialController::class, 'delete']);


require __DIR__ . '/auth.php';
