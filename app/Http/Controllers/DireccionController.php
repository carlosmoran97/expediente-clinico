<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Direccion;

class DireccionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $direcciones = Direccion::join('municipios', 'direcciones.municipio_id', '=', 'municipios.id')
            ->select('direcciones.id', 'direcciones.casa', 'direcciones.calle', 'direcciones.colonia', 'municipios.municipio')
            ->orderBy('direcciones.id')
            ->get();
        return $direcciones;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $direccion = new Direccion();
        $direccion->casa = $request->casa;
        $direccion->calle = $request->calle;
        $direccion->colonia = $request->colonia;
        $direccion->municipio_id = $request->municipio_id;
        $direccion->save();
        return $direccion;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $direccion = Direccion::findOrFail($request->id);

        $direccion->casa = $request->casa;
        $direccion->calle = $request->calle;
        $direccion->colonia = $request->colonia;
        $direccion->municipio_id = $request->municipio_id;

        $direccion->save();

        return $direccion;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        Direccion::destroy($request->id);
    }
}