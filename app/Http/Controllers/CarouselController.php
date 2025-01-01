<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Carousel;
use Illuminate\Http\Request;
use App\Http\Requests\CarouselRequest;
use App\Http\Requests\CarouselUpdateRequest;

class CarouselController extends Controller
{
    public function index()
    {
       return Inertia::render('Carousel/CarouselIndex');
    }

    public function create()
    {
        return Inertia::render('Carousel/CarouselCreate');
    }

    public function edit(Bahan $value)
    {
        return Inertia::render('Carousel/CarouselEdit', ['carousel' => $value]);
    }

    /*
        API
    */

    public function getCarousel()
    {
        $carousels = Carousel::all();

        return $this->res("Success Get!", 201, $carousels);
    }

    public function store(CarouselRequest $request)
    {
        $path = $request['gambar']->store('carousel', 'public');

        $data = Carousel::create([
            'title' => $request['title'],
            'desc' => $request['desc'],
            'gambar' => $path,
        ]);

        return $this->res("Success Create!", 201, $data);
    }

    public function update(CarouselUpdateRequest $request, Carousel $carousel)
    {
        $carousel->update($request->all());

        return $this->res("Success Updated!", 201, $carousel);
    }

    public function delete(Carousel $carousel)
    {
        $carousel->delete();

        return $this->res("Success Deleted!", 201, $carousel);
    }
}
