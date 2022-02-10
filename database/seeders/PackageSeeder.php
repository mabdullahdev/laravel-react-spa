<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Package;

class PackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Package::create(
            [
                'title' => 'Bronze',
                'price' => 50,
                'badge' => 'bronze.jpg'
            ]
        );

        Package::create(
            [
                'title' => 'Silver',
                'price' => 150,
                'badge' => 'silver.jpg'
            ]
        );

        Package::create(
            [
                'title' => 'Gold',
                'price' => 250,
                'badge' => 'gold.jpg'
            ]
        );
    }
}
