<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre', 50)->unique();
            $table->string('descripcion', 255)->nullable();
        });
        DB::table('roles')->insert(array('id' => '1', 'nombre' => 'SysAdmin', 'descripcion' => 'Es el que puede agregar partners [clinicas], crearle su usuario administrador de clinica.'));
        DB::table('roles')->insert(array('id' => '2', 'nombre' => 'ClinicaAdmin', 'descripcion' => 'Usuario encargado de administrar una clínica. Gestionar los empleados, pacientes, horarios y datos pertinentes a su propia clínica.'));
        DB::table('roles')->insert(array('id' => '3', 'nombre' => 'Recepcionista', 'descripcion' => 'Es quien crea un nuevo expediente clínico para un paciente que llega por primera vez a la clinica.'));
        DB::table('roles')->insert(array('id' => '4', 'nombre' => 'Enfermera', 'descripcion' => 'Es la encargada de registrar los signos vitales del paciente antes de proceder a la consulta.'));
        DB::table('roles')->insert(array('id' => '5', 'nombre' => 'Medico', 'descripcion' => 'Es el encargado de registrar el diagnostico, sintomatologia, recetas, tratamientos médicos y exmanes de la consulta.'));
        DB::table('roles')->insert(array('id' => '6', 'nombre' => 'Paciente', 'descripcion' => 'Llega a la clínica y registra su número de expediente y selecciona el especialista con que pasará consulta.'));
        DB::table('roles')->insert(array('id' => '7', 'nombre' => 'Laboratorista', 'descripcion' => 'Registra los resultados de los examenes, clinica de procedencia, fecha hora y demás datos pertinentes.'));
    }    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roles');
    }
}
