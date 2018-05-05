<?php namespace Contactform\Contactform\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateContactformContactform extends Migration
{
    public function up()
    {
        Schema::create('contactform_contactform_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('full_name', 150);
            $table->string('email', 150);
            $table->text('message');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('contactform_contactform_');
    }
}
