<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\About;
use App\Models\Value;
use App\Models\Carousel;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $carousels = Carousel::all();
        $values = Value::all();
        return Inertia::render('Home', [
            'carousels' => $carousels,
            'values' => $values,
        ]);
    }
}
