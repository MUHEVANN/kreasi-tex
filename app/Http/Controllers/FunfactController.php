<?php

namespace App\Http\Controllers;

use App\Http\Requests\FunfactRequest;
use App\Models\Funfact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FunfactController extends Controller
{
    /*
        WEB
    */

    public function index()
    {
        return Inertia::render('Funfact/FunfactIndex');
    }

    public function create()
    {
        return Inertia::render('Funfact/FunfactCreate');
    }

    public function edit(Funfact $funfact)
    {
        return Inertia::render('Funfact/FunfactEdit', ['funfact' => $funfact]);
    }

    /*
        API
    */

    public function getFunfact()
    {
        $funfact = Funfact::all();

        return $this->res("Success Get!", 200, $funfact);
    }

    public function store(FunfactRequest $request)
    {
        $path = $request['image']->store('funfact', 'public');

        $data = Funfact::create([
            'text' => $request['text'],
            'image' => $path
        ]);

        return $this->res("Success Create!", 201, $data);
    }

    public function update(FunfactRequest $request, Funfact $funfact)
    {
        $path = $funfact->image;

        if ($request['image']) {
            unlink(public_path('storage/' . $path));
            $path = $request['image']->store('funfact', 'public');
        }
        $funfact->update([
            'text' => $request['text'],
            'image' => $path
        ]);

        return $this->res("Success Updated!", 200, $funfact);
    }

    public function delete(Funfact $funfact)
    {
        unlink(public_path('storage/' . $funfact->image));
        $funfact->delete();

        return $this->res("Success Deleted!", 201, $funfact);
    }
}
