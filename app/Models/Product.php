<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $fillable = ['bahan_id', 'nama', 'deskripsi', 'gambar', 'is_view', 'count_star'];
}
