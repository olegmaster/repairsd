<?php namespace Meral\Setup\Components;

use Cms\Classes\ComponentBase;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
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
        
        $data = Input::all();
        
        Mail::send('meral.setup::mail.message-number',$data,function ($message) use ($data){
            $message->from("indahazzard@gmail.com");
            $message->to('from@example.com');
            $message->subject('from meraldev');
        });
        Session::flash('message',"Your email was sent");

    }
    public function defineProperties()
    {
        return [];
    }
}
