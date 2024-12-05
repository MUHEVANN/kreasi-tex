<?php

namespace App\Http\Controllers;

use App\Http\Requests\ValueRequest;
use App\Models\Value;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ValueController extends Controller
{

    public function index()
    {
        return Inertia::render('Values/ValueIndex');
    }
    public function create()
    {
        return Inertia::render('Values/ValueCreate');
    }

    /* 
        API
    */

    public function store(ValueRequest $req)
    {
        $message = Value::create($req->all());

        return $this->res('Value created successfully', 201, $message);
    }

    public function update(ValueRequest $req, Value $value)
    {

        $value->update($req->all());

        return $this->res('Value updated successfully', 201, $value);
    }

    public function delete(Value $value)
    {
        $value->delete();

        return $this->res('Value deleted successfully', 201, $value);
    }

    public function getValue()
    {
        $values = Value::all();

        return $this->res('Values fetched successfully', 200, $values);
    }
}