<?php namespace Meralnikita\Apptypes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateMeralnikitaApptypesSlider2Texts extends Migration
{
    public function up()
    {
        Schema::create('meralnikita_apptypes_slider2_texts', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->integer('id_appliance_type');
            $table->text('text_content');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('meralnikita_apptypes_slider2_texts');
    }
}
