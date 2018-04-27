<?php namespace Meralnikita\Apptypes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateMeralnikitaApptypes6 extends Migration
{
    public function up()
    {
        Schema::table('meralnikita_apptypes_', function($table)
        {
            $table->integer('image_slider_1');
            $table->integer('image_slider_2');
        });
    }
    
    public function down()
    {
        Schema::table('meralnikita_apptypes_', function($table)
        {
            $table->dropColumn('image_slider_1');
            $table->dropColumn('image_slider_2');
        });
    }
}
