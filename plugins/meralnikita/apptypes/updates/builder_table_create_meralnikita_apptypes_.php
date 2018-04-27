<?php namespace Meralnikita\Apptypes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateMeralnikitaApptypes extends Migration
{
    public function up()
    {
        Schema::create('meralnikita_apptypes_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->text('type');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('meralnikita_apptypes_');
    }
}
