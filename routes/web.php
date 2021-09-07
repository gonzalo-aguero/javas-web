<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ServicesController;
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
Route::get('/', HomeController::class)->name('home');
Route::get('services', [ServicesController::class, 'index'])->name('services.index');
Route::get('services/get/{service?}', [ServicesController::class, 'get'])->name('services.get');
Route::get('services/{service}', [ServicesController::class, 'show'])->name('services.show');






// route with optional variable (service).
// Route::get('/services/{service?}', function ($service = null) {
//     $service === null ? $msg = "Servicios" : $msg = "Estás en el servicio $service.";
//     return "<h2>$msg</h2>";
// });
