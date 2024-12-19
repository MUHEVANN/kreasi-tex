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

    public function getFunfact(Request $request)
    {
        $page = $request->input('page', 1);  // Default ke halaman 1 jika tidak ada parameter `page`
        $funfact = Funfact::paginate(3, ['*'], 'page', $page);

        return $this->res("Success Get!", 200, $funfact);
    }

    public function store(FunfactRequest $request)
    {
        $data = Funfact::create($request->all());

        return $this->res("Success Create!", 201, $data);
    }

    public function update(FunfactRequest $request, Funfact $funfact)
    {
        $funfact->update($request->all());

        return $this->res("Success Updated!", 200, $funfact);
    }

    public function delete(Funfact $funfact)
    {
        unlink(public_path('storage/' . $funfact->image));
        $funfact->delete();

        return $this->res("Success Deleted!", 201, $funfact);
    }
}
