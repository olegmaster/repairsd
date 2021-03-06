<?php namespace Meral\Setup\Controllers;

use BackendMenu;
use Backend\Classes\Controller;

/**
 * Showstatistic Back-end Controller
 */
class Showstatistic extends Controller
{
    public $implement = [
        'Backend.Behaviors.FormController',
        'Backend.Behaviors.ListController'
    ];

    public $formConfig = 'config_form.yaml';
    public $listConfig = 'config_list.yaml';

    public function __construct()
    {
        parent::__construct();

        BackendMenu::setContext('Meral.Setup', 'setup', 'showstatistic');
    }
}
