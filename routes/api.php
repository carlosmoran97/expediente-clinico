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

// Rutas de las especialidades

Route::get('/especialidad', 'EspecialidadController@index');
Route::post('/especialidad', 'EspecialidadController@store');
Route::put('/especialidad', 'EspecialidadController@update');
Route::delete('/especialidad', 'EspecialidadController@destroy');

Route::get('/horario', 'HorarioController@index');
Route::post('/horario', 'HorarioController@store');
Route::put('/horario', 'HorarioController@update');
Route::delete('/horario', 'HorarioController@destroy');

// Rutas de los departamentos
Route::get('/departamento', 'DepartamentoController@index');
Route::post('/departamento', 'DepartamentoController@store');
Route::put('/departamento', 'DepartamentoController@update');
Route::delete('/departamento', 'DepartamentoController@destroy');

// Ruta de los municipios
Route::get('/municipio', 'MunicipioController@index');
Route::post('/municipio', 'MunicipioController@store');
Route::put('/municipio', 'MunicipioController@update');
Route::delete('/municipio', 'MunicipioController@destroy');

// Ruta de las direcciones
Route::get('/direccion', 'DireccionController@index');
Route::post('/direccion', 'DireccionController@store');
Route::put('/direccion', 'DireccionController@update');
Route::delete('/direccion', 'DireccionController@destroy');

// Ruta de las personas
Route::get('/persona', 'PersonaController@index');
Route::post('/persona', 'PersonaController@store');
Route::put('/persona', 'PersonaController@update');
Route::delete('/persona', 'PersonaController@destroy');
