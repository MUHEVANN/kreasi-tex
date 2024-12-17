<?php

namespace App\Http\Controllers;

use App\Http\Requests\GmapRequest;
use App\Models\Gmap;
use Inertia\Inertia;

class GmapController extends Controller
{
    public function index()
    {
        return Inertia::render('Gmap/GmapIndex');
    }

    public function create()
    {
        return Inertia::render('Gmap/GmapCreate');
    }

    public function edit(Gmap $gmap)
    {
        return Inertia::render('Gmap/GmapEdit', [
            'gmap' => $gmap
        ]);
    }

    public function store(GmapRequest $req)
    {
        $data = Gmap::create($req->validated());

        return $this->res("Success Create!", 201, $data);
    }

    public function getGmap()
    {
        $gmap = Gmap::all();

        return $this->res("Success Get!", 200, $gmap);
    }

    public function update(Gmap $gmap, GmapRequest $req)
    {
        
        $gmap->update($req->validated());

        return $this->res("Success Update!", 200, $gmap);
    }

    public function delete(Gmap $gmap)
    {
        $gmap->delete();

        return $this->res("Success Delete!", 200);
    }
}