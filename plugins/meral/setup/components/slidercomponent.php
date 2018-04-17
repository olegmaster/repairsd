<?php namespace Meral\Setup\Components;

use Cms\Classes\ComponentBase;
use meral\setup\models\Slider;

class slidercomponent extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'sliderComponent Component',
            'description' => 'No description provided yet...'
        ];
    }
    public function getSlides()
    {
        return Slider::orderBy('id', 'desc')->get();
    }
    public function defineProperties()
    {
        return [];
    }
}
