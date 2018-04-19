<?php namespace Meral\Setup\Controllers;

use BackendMenu;
use Backend\Classes\Controller;
use Meral\Setup\Models\Bookingmodel;

/**
 * showbookingscontroller Back-end Controller
 */
class showbookingscontroller extends Controller
{
    public $implement = [
        'Backend.Behaviors.FormController',
        'Backend.Behaviors.ListController'
    ];

    public $formConfig = 'config_form.yaml';
    public $listConfig = 'config_list.yaml';

    
//    public function getInfo()
//    {
//        return Bookingmodel::orderBy('id', 'desc')->get();
//    }
    public function __construct()
    {
        parent::__construct();

        
        BackendMenu::setContext('Meral.Setup', 'setup', 'bookings');
    }
}
