<?php namespace Meral\Setup\Components;

use Cms\Classes\ComponentBase;
use Illuminate\Support\Facades\Input;

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use meral\setup\models\Bookingmodel;

class Bookingformcomponent extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'bookingformcomponent Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function onRun()
    {
        if (Input::get('app-type')!==null) {
            $this->onSubmitForm();
        }
    }
    

    public function onSubmitForm()
    {

            $book = new Bookingmodel();

            $book->apptype = Input::get('app-type');
            $book->brand = Input::get('brand');
            $book->date = Input::get('date');
            $book->time = Input::get('time');
            $book->name = Input::get('name');
            $book->address = Input::get('address');
            $book->city = Input::get('city');
            $book->phone = Input::get('phone');
            $book->problem = Input::get('problem');
            $book->save();
       // Mail::rawTo('indahazzard@gmail.com', 'Hello friend');
//        Mail::send('acme.blog::mail.message', $vars, function($message) {
//
//            $message->to('admin@domain.tld', 'Admin Person');
//            $message->subject('This is a reminder');
//
//        });
    }

    public function defineProperties()
    {
        return [];
    }
}
