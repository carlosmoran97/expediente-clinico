<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Persona extends Model
{
    protected $table= 'persona';
    protected $fillable = ['nombre','apellidos', 'fechaDenacimiento', 'docuementoDeIdentidad', 'estadoCivil','genero', 'direccion_id'];
    public function direccion(){
        return $this->belongsTo('App\Direccion', 'direccion_id');
    }
}
