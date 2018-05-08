<?php namespace Meral\Setup\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateNumberformsTable extends Migration
{
    public function up()
    {
        Schema::create('meral_setup_numberforms', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->text('phonenumber');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('meral_setup_numberforms');
    }
}
