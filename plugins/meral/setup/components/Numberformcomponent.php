<?php namespace Meral\Setup\Components;

use Cms\Classes\ComponentBase;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use meral\setup\models\Numberform;
use October\Rain\Support\Facades\Flash;

class Numberformcomponent extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'numberformcomponent Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function onRun()
    {
        if (Input::get('phone-number') !== null) {
            $this->onSubmitForm();
        }
    }


    public function onSubmitForm()
    {
        $num = new Numberform();

        $num->phonenumber = Input::get('phone-number');

        $validatedData = Validator::make(Input::all(), [
            'phone-number' => 'required'
        ]);

        if ($validatedData->fails()) {
            return redirect()->back()->withErrors($validatedData);
        } else {
            $num->save();
            $data = Input::all();
            // dd($data);
            Mail::send('number', $data, function ($message) use ($data) {
                $message->from("indahazzard@gmail.com");
                $message->to('from@example.com');
                $message->subject('from meraldev');
            });
            Flash::success('Settings successfully saved!');
        }
    }

    public function defineProperties()
    {
        return [];
    }
}
