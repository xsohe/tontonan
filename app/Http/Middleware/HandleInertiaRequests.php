<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    private function activePlan() {
        $activePlan = Auth::user() ? Auth::user()->LastActiveUserSubscription : null;

        if(!$activePlan) {
            return null;
        }

        $lastDay = Carbon::parse($activePlan->updated_at)->addMonths($activePlan->subscriptionPlan->active_period_in_month);
        $activeDays = Carbon::parse($activePlan->updated_at)->diffInDays($lastDay);
        $remainingActiveDays = Carbon::parse($activePlan->expired_date)->diffInDays(Carbon::now());
        
        return [
            'name' => $activePlan->subscriptionPlan->name,
            'remainingActiveDays' => $remainingActiveDays,
            'activeDays' => $activeDays
        ];
    }
    
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
                'activePlan' => $this->activePlan()
            ],
            "flashMessage" => [
                "message" => Session::get("message"),
                "type" => Session::get("type"),
            ],
            "env" => [
                "MIDTRANS_CLIENTKEY" => env("MIDTRANS_CLIENTKEY")
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}
