<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\AboutSeed;
use Database\Seeders\valueSeed;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);


        User::factory()->create([
            'name' => 'kreasitexindonesia@gmail.com',
            'email' => 'Kre@sitexIndonesi4',
        ]);

        $this->call([
            AboutSeed::class,
            valueSeed::class,
        ]);
    }
}
