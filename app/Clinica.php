<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Clinica extends Model
{
    protected $fillable = ['numero_registro', 'nombre', 'telefono', 'correo_electronico', 'persona_id'];
    public function encargado(){
        return $this->belongsTo('App\Persona', 'persona_id');
    }
    public function personas(){
        return $this->hasMany('App\Persona');
    }
}
