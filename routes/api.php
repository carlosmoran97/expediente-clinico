<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/especialidad', 'EspecialidadController@index');
Route::post('/especialidad', 'EspecialidadController@store');
Route::put('/especialidad', 'EspecialidadController@update');
Route::delete('/especialidad', 'EspecialidadController@destroy');

Route::get('/horario', 'HorarioController@index');
Route::post('/horario', 'HorarioController@store');
Route::put('/horario', 'HorarioController@update');
Route::delete('/horario', 'HorarioController@destroy');
