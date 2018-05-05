<?php namespace Meral\Setup\Components;

use Cms\Classes\ComponentBase;
use Illuminate\Support\Facades\Input;

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
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
        if (Input::get('app-type') !== null) {
            $this->onSubmitForm();
            return redirect()->back();
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

        $validatedData = Validator::make(Input::all(), [
            'app-type' => 'required',
            'brand' => 'required',
            'date' => 'required',
            'time' => 'required',
            'name' => 'required|min:2',
            'address' => 'required|min:5',
            'city' => 'required|min:2',
            'phone' => 'required',
            'problem' => 'required'
        ]);

       // dd($validatedData);
        if ($validatedData->fails()) {

            return redirect()->back()->withErrors($validatedData);

        }else{
            $book->save();
            $data =Input::all();
             //dd($data);
            Mail::send('repair',$data,function ($message) use ($data){
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
