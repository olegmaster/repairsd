<?php namespace Meral\Setup\Components;

use Cms\Classes\ComponentBase;
use meral\setup\models\Bookingmodel;


class Showbookings extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'showbookings Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function getInfo()
    {
        return Bookingmodel::orderBy('id', 'desc')->get();
    }

    public function defineProperties()
    {
        return [];
    }
}
