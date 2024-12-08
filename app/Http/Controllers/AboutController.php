<?php

namespace App\Http\Controllers;

use App\Http\Requests\AboutRequest;
use App\Models\About;
use Inertia\Inertia;

class AboutController extends Controller
{
    /* 
        WEB
    */
    public function index()
    {
        return Inertia::render('About/AboutIndex');
    }
    public function create()
    {
        return Inertia::render('About/AboutCreate');
    }
    public function edit(About $about)
    {

        return Inertia::render('About/AboutEdit', [
            'about' => $about
        ]);
    }


    /* 
        API
    */

    public function getAbout()
    {
        $about = About::get();

        return $this->res("Success Get!", 201, $about);
    }

    public function update(AboutRequest $request, About $about)
    {
        $about->update($request->all());

        return $this->res("Success Updated!", 201, $about);
    }
}
