<?php namespace Meral\Setup;

use Backend;
use System\Classes\PluginBase;

/**
 * setup Plugin Information File
 */
class Plugin extends PluginBase
{
    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name' => 'setup',
            'description' => 'No description provided yet...',
            'author' => 'meral',
            'icon' => 'icon-beer'
        ];
    }

    /**
     * Register method, called when the plugin is first registered.
     *
     * @return void
     */
    public function register()
    {

    }

    /**
     * Boot method, called right before the request route.
     *
     * @return array
     */
    public function boot()
    {

    }

    /**
     * Registers any front-end components implemented in this plugin.
     *
     * @return array
     */
    public function registerComponents()
    {
        return []; // Remove this line to activate

        return [
            'Meral\Setup\Components\info' => 'infoSite',
        ];
    }

    /**
     * Registers any back-end permissions used by this plugin.
     *
     * @return array
     */
    public function registerPermissions()
    {
        return []; // Remove this line to activate

        return [
            'meral.setup.some_permission' => [
                'tab' => 'setup',
                'label' => 'Some permission'
            ],
        ];
    }

    /**
     * Registers back-end navigation items for this plugin.
     *
     * @return array
     */
    public function registerNavigation()
    {
        return [
            'setup' => [
                'label' => 'Site info',
                'url' => \Backend::url('meral/setup/infoeditor'),
                'icon' => 'icon-list-alt',
                'order' => 500,
                'sideMenu' => [
                    'headinfo' => [
                        'label' => 'Number and email',
                        'icon' => 'icon-list-alt',
                        'url' => \Backend::url('meral/setup/infoeditor'),
                    ],
                    'slider' => [
                        'label' => 'Slider',
                        'icon' => 'icon-list-alt',
                        'url' => \Backend::url('meral/setup/slider'),
                    ]
                ],

            ]
        ];
    }
}
