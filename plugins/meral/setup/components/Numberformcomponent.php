<?php namespace Meral\Setup\Components;

use Cms\Classes\ComponentBase;
use Illuminate\Support\Facades\Input;
use meral\setup\models\Numberform;

class Numberformcomponent extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'numberformcomponent Component',
            'description' => 'No description provided yet...'
        ];
    }
    public function onRun()
    {
        if (Input::get('phone-number')!==null) {
            $this->onSubmitForm();
        }
    }


    public function onSubmitForm()
    {

        $num = new Numberform();

        $num->phonenumber = Input::get('phone-number');
        
        $num->save();

    }
    public function defineProperties()
    {
        return [];
    }
}
