<?php namespace Meral\Setup\Components;

use Cms\Classes\ComponentBase;
use Illuminate\Support\Facades\Input;
use vojtasvoboda\reviews\models\Review;

class Reviewform extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'reviewform Component',
            'description' => 'No description provided yet...'
        ];
    }
    public function onRun()
    {
        if (Input::get('name')!==null) {
            $this->onSubmitForm();
        }
    }

    public function onSubmitForm()
    {

        $num = new Review();
        $num->rating = Input::get('rating');
        $num->name = Input::get('name');
        $num->content = Input::get('content');
        
        $num->save();
    }

    public function defineProperties()
    {
        return [];
    }
}
