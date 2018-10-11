<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Municipio extends Model
{
    protected $fillable = ['municipio', 'departamento_id'];
    public function departamento(){
        return $this->belongsTo('App\Departamento', 'departamento_id');
    }
}
