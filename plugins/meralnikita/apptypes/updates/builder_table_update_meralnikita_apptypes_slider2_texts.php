<?php namespace Meralnikita\Apptypes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateMeralnikitaApptypesSlider2Texts extends Migration
{
    public function up()
    {
        Schema::table('meralnikita_apptypes_slider2_texts', function($table)
        {
            $table->text('title');
        });
    }
    
    public function down()
    {
        Schema::table('meralnikita_apptypes_slider2_texts', function($table)
        {
            $table->dropColumn('title');
        });
    }
}
