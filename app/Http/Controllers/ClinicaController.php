<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ClinicaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clinica = Clinica::join('persona', 'clinica.persona_id', '=','persona.id' and 'direcciones', 'clinica.direcion_id', '=','direcion_id' )
            ->select('clinica.id','clinica.numero_registro','clinica.nombre','clinica.telefono','clinica.correo_elctronico','clinica.persona-id','clinica.direccin_id', 'persona.persona', 'direcion.direccion')
            ->orderBy('clinica.id', 'desc')->get();
        return $clinica;
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
        $clinica = new Clinica();
        $persona = Persona::findOrFail($request->persona_id);
        $direccion = Direccion::findOrFail($request->direccion_id);

        $clinica->numero_registro = $request->numero_registro;
        $clinica->nombre = $request->nombre;
        $clinica->telefono = $request->telefono;
        $clinica->correo_electronico = $request->correo_electronico;
        $clinica->persona()->associate($persona);
        $clinica->direcion()->associate($direccion);
        $clinica->save();
        return $clinica;
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
    public function update(Request $request, $id)
    {
         $clinica = Clinica::findOrFail($request->clinica_id);
         $direccion = Direccion::findOrFail($request->direccion_id);
         $persona = Persona::findOrFail($request->id);

         $clinica->numero_registro = $request->numero_registro;
         $clinica->nombre = $request->nombre;
         $clinica->telefono = $request->telefono;
         $clinica->correo_electronico = $request->correo_electronico;
         $clinica->persona()->associate($persona);
         $clinica->direcion()->associate($direccion);
         $clinica->save();
         return $clinica;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        Clinica::destroy($resques->id);
    }
}
