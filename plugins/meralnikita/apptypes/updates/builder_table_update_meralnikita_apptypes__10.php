<?php namespace Meralnikita\Apptypes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateMeralnikitaApptypes10 extends Migration
{
    public function up()
    {
        Schema::table('meralnikita_apptypes_', function($table)
        {
            $table->renameColumn('slider_center_text2_line3', 'slider1_center_text2_line3');
        });
    }
    
    public function down()
    {
        Schema::table('meralnikita_apptypes_', function($table)
        {
            $table->renameColumn('slider1_center_text2_line3', 'slider_center_text2_line3');
        });
    }
}
