<?php
namespace Meral\Setup\Components;

use Cms\Classes\ComponentBase;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use meral\setup\models\Contact;

class Contactform extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'Contact Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function onRun()
    {
        if (Input::get('name') !== null) {
            $this->onSubmitForm();
        }
    }

    public function onSubmitForm()
    {

        $contact = new Contact();

        $contact->name = Input::get('name');
        $contact->email = Input::get('email');
        $contact->message = Input::get('message');

        //////
        $validatedData = Validator::make(Input::all(), [


            'name' => 'required|min:2',

            'email' => 'required|email',
            'message' => 'required'
        ]);
       // dd($validatedData);
        if ($validatedData->fails()) {

            return redirect()->back()->withErrors($validatedData);

        }else{
            $contact->save();

            $data = Input::all();

            Mail::send('meral.setup::mail.message-number', $data, function ($message) use ($data) {
                $message->from("indahazzard@gmail.com");
                $message->to('from@example.com');
                $message->subject('from meraldev');
            });
            Session::flash('message', "Your email was sent");
        }
//////


    }

    public function defineProperties()
    {
        return [];
    }
}
