<?php
namespace nikita\setup;

class Plugin extends \System\Classes\PluginBase
{

    public function boot()
    {
      dd('nikita');
    }

    public function pluginDetails()
    {
        return [
            'name' => 'Setup',
            'description' => 'Setup content.',
            'author' => 'nikita molodets',
            'icon' => 'icon-leaf'
        ];
    }

    public function registerComponents()
    {
        return [
            'nikita\setup\Components\componentsSetup' => 'componentsSetup'
        ];
    }
}
?>
