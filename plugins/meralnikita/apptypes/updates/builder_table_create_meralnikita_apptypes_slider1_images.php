<?php namespace Meralnikita\Apptypes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateMeralnikitaApptypesSlider1Images extends Migration
{
    public function up()
    {
        Schema::create('meralnikita_apptypes_slider1_images', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->integer('id_appliance_type');
            $table->string('image_src');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('meralnikita_apptypes_slider1_images');
    }
}
