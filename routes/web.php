<?php

use App\Http\Controllers\Admin\MovieController as AdminMovieController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\User\SubscriptionPlanController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect("/", "/login");

Route::middleware("auth", "role:user")->prefix("dashboard")->name("user.dashboard.")->group(function () {
    Route::get("/", [DashboardController::class, "index"])->name("index");

    Route::get("/movie/{movie:slug}", [MovieController::class, "show"])->name("movie.show")->middleware("checkUserSubscription:true");

    Route::get("/subscription-plan", [SubscriptionPlanController::class, "index"])->name("subscription-plan.index")->middleware("checkUserSubscription:false");
    Route::post("/subscription-plan/{subscriptionPlan}/user-subscribe", [SubscriptionPlanController::class, "userSubscribe"])->name("subscription-plan.userSubscribe")->middleware("checkUserSubscription:false");
});

Route::middleware("auth", "role:admin")->prefix("admin")->name("admin.dashboard.")->group(function () {
    Route::resource("movie", AdminMovieController::class);
});

Route::prefix("prototype")->name("prototype.")->group(function () {
    Route::get("/login", function () {
        return Inertia::render("Prototype/Login");
    })->name("login");
    Route::get("/register", function () {
        return Inertia::render("Prototype/Register");
    })->name("register");
    Route::get("/dashboard", function () {
        return Inertia::render("Prototype/Dashboard");
    })->name("dashboard");
    Route::get("/subscription-plan", function() {
        return Inertia::render("Prototype/SubscriptionPlan");
    })->name("subscription-plan");
    Route::get("/movie/{slug}", function () {
        return Inertia::render("Prototype/Movie/Show");
    })->name("movie.show");
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard/User/Index');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
