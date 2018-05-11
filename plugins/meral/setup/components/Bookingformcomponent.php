<?php namespace Meral\Setup\Components;

use Cms\Classes\ComponentBase;
use Illuminate\Support\Facades\Input;

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use meral\setup\models\Bookingmodel;
use October\Rain\Support\Facades\Flash;

class Bookingformcomponent extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'bookingformcomponent Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function onRun()
    {
    }

    public function defineProperties()
    {
        return [];
    }
}
