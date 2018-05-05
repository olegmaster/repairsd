<?php namespace Meralnikita\ContactindFo\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateMeralnikitaContactindfoData extends Migration
{
    public function up()
    {
        Schema::create('meralnikita_contactindfo_data', function($table)
        {
            $table->engine = 'InnoDB';
            $table->text('contact_text');
            $table->string('place', 150);
            $table->string('email', 150);
            $table->string('phone', 50);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('meralnikita_contactindfo_data');
    }
}
