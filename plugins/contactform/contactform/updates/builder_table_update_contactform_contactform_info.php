<?php namespace Contactform\Contactform\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateContactformContactformInfo extends Migration
{
    public function up()
    {
        Schema::rename('contactform_contactform_', 'contactform_contactform_info');
        Schema::table('contactform_contactform_info', function($table)
        {
            $table->increments('id')->nullable(false)->unsigned()->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::rename('contactform_contactform_info', 'contactform_contactform_');
        Schema::table('contactform_contactform_', function($table)
        {
            $table->increments('id')->nullable(false)->unsigned()->default(null)->change();
        });
    }
}
