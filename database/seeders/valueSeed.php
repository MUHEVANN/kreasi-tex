<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Value;

class valueSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $values = [
            [
                'title' => 'kualitas terjamin',
                'desc' => 'Produk berkualitas tinggi dengan jaminan kepuasan terbaik untuk Anda.',
                'icon' => 'circle-check-big',
            ],
            [
                'title' => 'harga terbaik',
                'desc' => 'Dapatkan kualitas terbaik dengan harga yang paling kompetitif untuk memenuhi kebutuhan Anda!',
                'icon' => 'circle-dollar-sign',
            ],
            [
                'title' => 'Bisa kirim ke seluruh indonesia',
                'desc' => 'Dapatkan kualitas terbaik dengan harga kompetitif, lengkap dengan layanan pengiriman ke seluruh Indonesia!',
                'icon' => 'truck',
            ],
        ];

        foreach($values as $value) {
            Value::create([
              'title' =>$value['title'],
              'desc' => $value['desc'],
              'icon' => $value['icon'],
            ]);
        }
    }
}
