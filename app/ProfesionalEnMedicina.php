<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProfesionalEnMedicina extends Model
{
    protected $table = 'profesional_en_medicina';
    protected $fillable = ['JVPM', 'trabajador_id', 'especialidad_id'];
    public function trabajador(){
        return $this->belongsTo('App\Trabajador', "trabajador_id");
    }
    public function especialidad(){
        return $this->belongsTo('App\Especialidad', "Especialidad_id");
    }

}
