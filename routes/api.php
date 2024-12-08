<?php

use App\Http\Controllers\FaqController;
use App\Http\Controllers\TestimonialController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::put('/testimonial/{testimonial}', [TestimonialController::class, 'update']);
Route::put('/faq/{faq}', [FaqController::class, 'update']);
