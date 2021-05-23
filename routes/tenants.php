<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


$namespace = 'App\\Http\\Controllers\\Tenant\\';


Route::prefix('api')->namespace($namespace)->group(function () {
    Route::apiResource('users', 'UserController');
});
//Auth::routes();

    Route::middleware(['web'])
    ->namespace('App\Http\Controllers')
    ->as('tenant.')
    ->group(function () {
      Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

    });
