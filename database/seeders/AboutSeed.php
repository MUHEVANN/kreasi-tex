<?php

namespace Database\Seeders;

use App\Models\About;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AboutSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        About::create([
            'title' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, aspernatur.',
            'desc' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laborum ab officiis dolore corporis dolorum ut odit! Officia aut in consectetur ipsa optio eligendi reprehenderit provident ut autem ad? Aliquid, totam cum eveniet iure molestiae esse expedita id quo neque?"
        ]);
    }
}