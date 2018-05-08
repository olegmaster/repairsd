<?php namespace Meral\Setup\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateInfoEditorsTable extends Migration
{
    public function up()
    {
        Schema::create('meral_setup_info_editors', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('number');
            $table->text('email');
            $table->text('headerTitle');
            $table->string('show');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('meral_setup_info_editors');
    }
}
