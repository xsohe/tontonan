<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscriptionPlan = [
            [
                "name" => "Basic",
                "price" => 79000,
                "active_period_in_month" => 1,
                "features" => json_encode(["feature 1", "feature 2", "feature 3"]),
            ],
            [
                "name" => "Premium",
                "price" => 299000,
                "active_period_in_month" => 3,
                "features" => json_encode(["feature 1", "feature 2", "feature 3", "feature 4", "feature 5"]),
            ]
        ];
        
        SubscriptionPlan::insert($subscriptionPlan);
    }
}
