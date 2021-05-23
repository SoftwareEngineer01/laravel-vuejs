<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\System\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
/*Route::apiResource('/users', 'System\UserController');*/
Route::get('/users', [UserController::class, 'index']);

/*Inventarios*/
Route::resource('inventory', 'Inventory\InventoryController');
Route::get('inventoriesByType/{id}', 'Inventory\InventoryController@getInventories');

/*Tipos de Inventarios*/
Route::get('inventory_types', 'Inventory\InventoryType\InventoryTypeController@index');
Route::post('inventory_type', 'Inventory\InventoryType\InventoryTypeController@store');
Route::get('inventory_type/{id}', 'Inventory\InventoryType\InventoryTypeController@show');
Route::put('inventory_type/{id}', 'Inventory\InventoryType\InventoryTypeController@update');
Route::delete('inventory_type/{id}', 'Inventory\InventoryType\InventoryTypeController@destroy');

/*Entrada Inventario*/
Route::resource('inventory_entry', 'Inventory\InventoryEntryController');

/*Proveedores*/
Route::resource('supplier', 'Supplier\SupplierController');

/*Servicios*/
Route::resource('service', 'Service\ServiceController');

/*Clientes*/
Route::resource('customer', 'Customer\CustomerController');

/*Mantenimientos*/
Route::resource('maintenance', 'Service\MaintenanceController');
