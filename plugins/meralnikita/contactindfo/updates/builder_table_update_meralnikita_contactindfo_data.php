<?php namespace Meralnikita\ContactindFo\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateMeralnikitaContactindfoData extends Migration
{
    public function up()
    {
        Schema::table('meralnikita_contactindfo_data', function($table)
        {
            $table->increments('id')->unsigned();
        });
    }
    
    public function down()
    {
        Schema::table('meralnikita_contactindfo_data', function($table)
        {
            $table->dropColumn('id');
        });
    }
}
