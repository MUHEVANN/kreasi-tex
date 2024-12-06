<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    protected $fillable = ['name', 'comment', 'profile'];

    public function profile(): Attribute
    {
        return Attribute::make(
            get: fn(string $value) => 'storage/' . $value,
        );
    }
}
