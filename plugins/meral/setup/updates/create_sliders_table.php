<?php namespace Meral\Setup\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateSlidersTable extends Migration
{
    public function up()
    {
        Schema::create('meral_setup_sliders', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('title');
            $table->text('content');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('meral_setup_sliders');
    }
}
