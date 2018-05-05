<?php namespace Meralnikita\Apptypes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateMeralnikitaApptypes9 extends Migration
{
    public function up()
    {
        Schema::table('meralnikita_apptypes_', function($table)
        {
            $table->text('slider1_left_text1');
            $table->text('slider1_center_text_line2');
            $table->text('slider1_left_text2');
            $table->text('slider1_left_text3');
            $table->text('slider1_center_text_line1');
            $table->text('slider1_center_text_line3');
            $table->text('slider1_center_text2_line1');
            $table->text('slider_center_text2_line3');
            $table->renameColumn('slider1_centertext2', 'slider1_center_text2_line2');
            $table->dropColumn('slider1_left_text');
            $table->dropColumn('slider1_center_text');
        });
    }
    
    public function down()
    {
        Schema::table('meralnikita_apptypes_', function($table)
        {
            $table->dropColumn('slider1_left_text1');
            $table->dropColumn('slider1_center_text_line2');
            $table->dropColumn('slider1_left_text2');
            $table->dropColumn('slider1_left_text3');
            $table->dropColumn('slider1_center_text_line1');
            $table->dropColumn('slider1_center_text_line3');
            $table->dropColumn('slider1_center_text2_line1');
            $table->dropColumn('slider_center_text2_line3');
            $table->renameColumn('slider1_center_text2_line2', 'slider1_centertext2');
            $table->text('slider1_left_text');
            $table->text('slider1_center_text');
        });
    }
}
