<?php namespace Meral\Articles;

use Backend;
use System\Classes\PluginBase;

/**
 * articles Plugin Information File
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
            'name'        => 'articles',
            'description' => 'Editin articles',
            'author'      => 'meral',
            'icon'        => 'icon-beer'
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
            'Meral\Articles\Components\MyComponent' => 'myComponent',
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
            'meral.articles.some_permission' => [
                'tab' => 'articles',
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
        return []; // Remove this line to activate

        return [
            'articles' => [
                'label'       => 'articles',
                'url'         => Backend::url('meral/articles/mycontroller'),
                'icon'        => 'icon-leaf',
                'permissions' => ['meral.articles.*'],
                'order'       => 500,
                'sideMenu' => [
                    'products' => [
                        'label'       => 'Товары',
                        'icon'        => 'icon-list-alt',
                        'url'         => \Backend::url('meral/articles/mycontroller'),
                    ],
                ]
            ],
        ];


    }
}
