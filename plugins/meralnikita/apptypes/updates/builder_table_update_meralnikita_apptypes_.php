<?php namespace Meralnikita\Apptypes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateMeralnikitaApptypes extends Migration
{
    public function up()
    {
        Schema::table('meralnikita_apptypes_', function($table)
        {
            $table->text('svg');
        });
    }
    
    public function down()
    {
        Schema::table('meralnikita_apptypes_', function($table)
        {
            $table->dropColumn('svg');
        });
    }
}
