<?php

use App\Http\Controllers\ValueController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::get('/values/data', [ValueController::class, 'getValue']);
Route::post('/values', [ValueController::class, 'store']);
Route::put('/values/{value}', [ValueController::class, 'update']);
Route::delete('/values/{value}', [ValueController::class, 'delete']);