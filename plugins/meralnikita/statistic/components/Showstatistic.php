<?php namespace Meralnikita\Statistic\Components;
namespace Meral\Setup;

use Cms\Classes\ComponentBase;
use Meral\Setup\Models\Bookingcontroller;

class Showstatistic extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'showstatistic Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function getAllBooks(){
        $books =  Bookingcontroller::orderBy('id', 'desc')->get();
        return  $books;

    }
    
    public function defineProperties()
    {
        return [];
    }
}
