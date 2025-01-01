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

    public function edit(Carousel $carousel)
    {
        return Inertia::render('Carousel/CarouselEdit', ['carousel' => $carousel]);
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
        if ($request['gambar']) {
            unlink(public_path('storage/' . $carousel->gambar));
            $path = $request['gambar']->store('gambar_about', 'public');
            $carousel->update([
                'title' => $request['title'],
                'desc' => $request['desc'],
                'gambar' => $path
            ]);
        }
        $carousel->update([
            'title' => $request['title'],
            'desc' => $request['desc'],
            'gambar' => $carousel['gambar']
        ]);

        return $this->res("Success Updated!", 201, $carousel);
    }

    public function delete(Carousel $carousel)
    {
        $carousel->delete();

        return $this->res("Success Deleted!", 201, $carousel);
    }
}
