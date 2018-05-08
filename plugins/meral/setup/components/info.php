<?php namespace Meral\Setup\Components;

use Cms\Classes\ComponentBase;
use meral\setup\models\InfoEditor;

class info extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'info Component',
            'description' => 'No description provided yet...'
        ];
    }
    public function getInfo()
    {
        return InfoEditor::orderBy('id', 'desc')->get();
    }
    public function defineProperties()
    {
        return [];
    }
}
