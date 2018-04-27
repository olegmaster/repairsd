<?php namespace Meralnikita\Apptypes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateMeralnikitaApptypes4 extends Migration
{
    public function up()
    {
        Schema::table('meralnikita_apptypes_', function($table)
        {
            $table->text('slider1_left_text');
            $table->text('slider1_center_text');
            $table->integer('slider1_images_id');
            $table->text('slider2_left_text');
            $table->text('slider2_center_text');
            $table->integer('slider2_texts_id');
            $table->integer('slider2_images_id');
        });
    }
    
    public function down()
    {
        Schema::table('meralnikita_apptypes_', function($table)
        {
            $table->dropColumn('slider1_left_text');
            $table->dropColumn('slider1_center_text');
            $table->dropColumn('slider1_images_id');
            $table->dropColumn('slider2_left_text');
            $table->dropColumn('slider2_center_text');
            $table->dropColumn('slider2_texts_id');
            $table->dropColumn('slider2_images_id');
        });
    }
}
