<?php

namespace App\Http\Controllers;

use App\Http\Requests\TestimonialRequest;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestimonialController extends Controller
{
    /*
        WEB
    */

    public function index()
    {
        return Inertia::render('Testimonial/TestimonialIndex');
    }

    public function create()
    {
        return Inertia::render('Testimonial/TestimonialCreate');
    }

    public function edit(Testimonial $testimonial)
    {
        return Inertia::render('Testimonial/TestimonialEdit', ['testimonial' => $testimonial]);
    }

    /*
        API
    */

    public function getTestimonial()
    {
        $testimonials = Testimonial::all();

        return $this->res("Success Get!", 201, $testimonials);
    }

    public function store(TestimonialRequest $request)
    {
        $path = $request['profile']->store('testimonial', 'public');

        $data = Testimonial::create([
            'name' => $request['name'],
            'comment' => $request['comment'],
            'profile' => $path
        ]);

        return $this->res("Success Create!", 201, $data);
    }

    public function update(TestimonialRequest $request, Testimonial $testimonial)
    {
        $path = $testimonial->profile;

        if ($request['profile']) {
            unlink(public_path('storage/' . $path));
            $path = $request['profile']->store('testimonial', 'public');
        }
        $testimonial->update([
            'name' => $request['name'],
            'comment' => $request['comment'],
            'profile' => $path
        ]);

        return $this->res("Success Updated!", 201, $testimonial);
    }

    public function delete(Testimonial $testimonial)
    {
        unlink(public_path('storage/' . $testimonial->profile));
        $testimonial->delete();

        return $this->res("Success Deleted!", 201, $testimonial);
    }
}
