<?php

namespace App\Http\Controllers;

use App\Http\Requests\FaqRequest;
use App\Models\Faq;
use Inertia\Inertia;

class FaqController extends Controller
{
    /* 
        WEB
    */

    public function index()
    {
        return Inertia::render('Faqs/FaqIndex');
    }

    public function create()
    {
        return Inertia::render('Faqs/FaqCreate');
    }

    public function edit(Faq $faq)
    {
        return Inertia::render('Faqs/FaqEdit', [
            'faq' => $faq
        ]);
    }


    /* 
        API
    */

    public function getFaq()
    {
        $faqs = Faq::all();

        return $this->res("Success Get!", 201, $faqs);
    }

    public function store(FaqRequest $request)
    {
        $data = Faq::create($request->all());

        return $this->res("Success Create!", 201, $data);
    }

    public function update(FaqRequest $request, Faq $faq)
    {
        $faq->update($request->all());

        return $this->res("Success Updated!", 201, $faq);
    }

    public function delete(Faq $faq)
    {
        $faq->delete();

        return $this->res("Success Deleted!", 201, $faq);
    }
}
