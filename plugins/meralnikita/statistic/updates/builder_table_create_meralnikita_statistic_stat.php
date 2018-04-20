<?php namespace Meralnikita\Statistic\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateMeralnikitaStatisticStat extends Migration
{
    public function up()
    {
        Schema::create('meralnikita_statistic_stat', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('meralnikita_statistic_stat');
    }
}
