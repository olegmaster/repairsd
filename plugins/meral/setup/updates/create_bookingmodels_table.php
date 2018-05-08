<?php namespace Meral\Setup\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateBookingmodelsTable extends Migration
{
    public function up()
    {
        Schema::create('meral_setup_bookingmodels', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('meral_setup_bookingmodels');
    }
}
