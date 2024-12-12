<?php

namespace App\Http\Controllers;

use App\Http\Requests\GambarRequest;
use App\Models\GambarAbout;
use Inertia\Inertia;

class GambarAboutController extends Controller
{
    public function index()
    {
        return Inertia::render('GambarAbout/GambarAboutIndex');
    }
    public function edit(GambarAbout $gambar)
    {
        return Inertia::render('GambarAbout/GambarAboutEdit', [
            'gambar' => $gambar
        ]);
    }
    public function create()
    {
        return Inertia::render('GambarAbout/GambarAboutCreate');
    }

    public function getGambar()
    {
        $gambar = GambarAbout::get();

        return $this->res("Success Get!", 201, $gambar);
    }

    public function store(GambarRequest $request)
    {
        $path = $request['gambar']->store('gambar_about', 'public');

        $gambar = GambarAbout::create([
            'gambar' => $path
        ]);
        return $this->res("Success Created!", 201, $gambar);
    }

    public function update(GambarRequest $request, GambarAbout $gambar)
    {
        if ($request['gambar']) {
            unlink(public_path('storage/' . $gambar->gambar));
            $path = $request['gambar']->store('gambar_about', 'public');
            $gambar->update([
                'gambar' => $path
            ]);
        }

        return $this->res("Success Updated!", 201, $gambar);
    }

    public function delete(GambarAbout $gambar)
    {
        unlink(public_path('storage/' . $gambar->gambar));
        $gambar->delete();

        return $this->res("Success Deleted!", 201);
    }
}
