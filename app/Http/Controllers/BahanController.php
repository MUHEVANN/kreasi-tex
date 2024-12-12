<?php

namespace App\Http\Controllers;

use App\Http\Requests\BahanRequest;
use App\Models\Bahan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BahanController extends Controller
{
    public function index()
    {
        return Inertia::render('Bahan/BahanIndex');
    }

    public function create()
    {
        return Inertia::render('Bahan/BahanCreate');
    }

    public function edit(Bahan $value)
    {
        return Inertia::render('Bahan/BahanEdit', ['bahan' => $value]);
    }

    //
    public function store(BahanRequest $req)
    {
        $message = Bahan::create($req->all());

        return $this->res('Bahan created successfully', 201, $message);
    }

    public function update(BahanRequest $req, Bahan $bahan)
    {
        $bahan->update($req->all());

        return $this->res('Bahan updated successfully', 200, $bahan);
    }

    public function delete(Bahan $bahan)
    {
        $bahan->delete();

        return $this->res('Bahan deleted successfully', 200, $bahan);
    }

    public function getBahan()
    {
        $values = Bahan::all();

        return $this->res('Bahan fetched successfully', 200, $values);
    }
}
