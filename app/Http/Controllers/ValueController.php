<?php

namespace App\Http\Controllers;

use App\Http\Requests\ValueRequest;
use App\Models\Value;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ValueController extends Controller
{

    public function create()
    {
        return Inertia::render('Values/ValueCreate');
    }

    public function store(ValueRequest $req)
    {
        $message = Value::create($req->all());

        return $this->res($message, 200, 'Success Create!');
    }
}
