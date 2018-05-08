<?php namespace Meral\Setup\Controllers;

use BackendMenu;
use Backend\Classes\Controller;

/**
 * Numberformcontroller Back-end Controller
 */
class Numberformcontroller extends Controller
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

        BackendMenu::setContext('Meral.Setup', 'setup', 'numberformcontroller');
    }
}
