<?php namespace Meralnikita\Statistic;

use System\Classes\PluginBase;

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
            'name' => 'statistic',
            'description' => 'No description provided yet...',
            'author' => 'meralnikita',
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
//        User::extend(function($model) {
//            $model->hasOne['author'] = ['Acme\Blog\Models\Author'];
//        });
    }

    /**
     * Registers any front-end components implemented in this plugin.
     *
     * @return array
     */
    public function registerComponents()
    {
        // return []; // Remove this line to activate

        return [
            'meral\setup\components\Showstatistic' => 'statistic'

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
            'statistic' => [
                'label' => 'statistics',
                'url' => \Backend::url('meralnikita/statistic/showstatistic'),
                'icon' => 'icon-list-alt',
                'order' => 500,
                'sideMenu' => [
                    'showstatistic' => [
                        'label' => 'show statistic',
                        'icon' => 'icon-list-alt',
                        'url' => \Backend::url('meralnikita/statistic/showstatistic'),
                    ],
//                    'editstatistic' => [
//                        'label' => 'Slider',
//                        'icon' => 'icon-list-alt',
//                        'url' => \Backend::url('meralnikita/statistic/editstatistic'),
//                    ]
                ],

            ]
        ];
    }
}
