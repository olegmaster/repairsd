<?php namespace Meralnikita\Apptypes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateMeralnikitaApptypes8 extends Migration
{
    public function up()
    {
        Schema::table('meralnikita_apptypes_', function($table)
        {
            $table->text('slider2_slide1_title');
            $table->text('slider2_slide1_description');
            $table->text('slider2_slide2_title');
            $table->text('slider2_slide2_description');
            $table->text('slider2_slide3_title');
            $table->text('slider2_slide3_description');
        });
    }
    
    public function down()
    {
        Schema::table('meralnikita_apptypes_', function($table)
        {
            $table->dropColumn('slider2_slide1_title');
            $table->dropColumn('slider2_slide1_description');
            $table->dropColumn('slider2_slide2_title');
            $table->dropColumn('slider2_slide2_description');
            $table->dropColumn('slider2_slide3_title');
            $table->dropColumn('slider2_slide3_description');
        });
    }
}
