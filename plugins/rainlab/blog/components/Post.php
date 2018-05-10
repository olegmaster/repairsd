<?php namespace RainLab\Blog\Components;

use BackendAuth;
use Cms\Classes\Page;
use Cms\Classes\ComponentBase;
use RainLab\Blog\Models\Post as BlogPost;

class Post extends ComponentBase
{
    /**
     * @var RainLab\Blog\Models\Post The post model used for display.
     */
    public $post;

    /**
     * @var string Reference to the page name for linking to categories.
     */
    public $categoryPage;

    /**
     * @var array Array of similar posts that have similar category with current post
     */
    public $similar;

    public function componentDetails()
    {
        return [
            'name' => 'rainlab.blog::lang.settings.post_title',
            'description' => 'rainlab.blog::lang.settings.post_description'
        ];
    }

    public function defineProperties()
    {
        return [
            'slug' => [
                'title' => 'rainlab.blog::lang.settings.post_slug',
                'description' => 'rainlab.blog::lang.settings.post_slug_description',
                'default' => '{{ :slug }}',
                'type' => 'string'
            ],
            'categoryPage' => [
                'title' => 'rainlab.blog::lang.settings.post_category',
                'description' => 'rainlab.blog::lang.settings.post_category_description',
                'type' => 'dropdown',
                'default' => 'blog/category',
            ],
        ];
    }

    public function getCategoryPageOptions()
    {
        return Page::sortBy('baseFileName')->lists('baseFileName', 'baseFileName');
    }

    public function onRun()
    {
        $postModel = new BlogPost();
        $this->categoryPage = $this->page['categoryPage'] = $this->property('categoryPage');
        $this->post = $this->page['post'] = $this->loadPost();
        $this->similar =

        $similarId = $this->page['similar'] = $postModel->loadSimilarPosts($this->post);
        if(count($similarId) > 0){

            $ids = [];

            $similarIdToArray = $similarId->toArray();

            foreach($similarIdToArray as $elem){
                $ids[] = $elem->id;

            }

            $similarPost = new BlogPost();
            $similarPost->find($ids);

            $this->similar = $similarPost->get();



//            echo "<pre>";
//            print_r($similarPost->get()[0]->categories[0]->name);
//            echo "</pre>";



        }

        //die();



       // dd($this->similar);
    }

    public function onRender()
    {
        if (empty($this->post)) {
            $this->post = $this->page['post'] = $this->loadPost();
        }
    }

//    /**
//     * Load similar as current post
//     */
//    protected function loadSimilarPosts()
//    {
//
//        $postId = $this->post->id;
//        $posts = \RainLab\Blog\Models\Post::all();
//
//        //dd($this->post->categories->count());
//        if ($postId && $this->post->categories->count()) {
//            $similarPosts = $posts->belongsToMany('\RainLab\Blog\Models\Categories');
//            dd($similarPosts);
//        }
//    }

    protected function loadPost()
    {


        $slug = $this->property('slug');

        $post = new BlogPost;

        $post = $post->isClassExtendedWith('RainLab.Translate.Behaviors.TranslatableModel')
            ? $post->transWhere('slug', $slug)
            : $post->where('slug', $slug);

        if (!$this->checkEditor()) {
            $post = $post->isPublished();
        }

        $post = $post->first();

        /*
         * Add a "url" helper attribute for linking to each category
         */
        if ($post && $post->categories->count()) {
            $post->categories->each(function ($category) {
                $category->setUrl($this->categoryPage, $this->controller);
            });
        }

        return $post;
    }

    public function previousPost()
    {
        return $this->getPostSibling(-1);
    }

    public function nextPost()
    {
        return $this->getPostSibling(1);
    }

    protected function getPostSibling($direction = 1)
    {
        if (!$this->post) {
            return;
        }

        $method = $direction === -1 ? 'previousPost' : 'nextPost';

        if (!$post = $this->post->$method()) {
            return;
        }

        $postPage = $this->getPage()->getBaseFileName();

        $post->setUrl($postPage, $this->controller);

        $post->categories->each(function ($category) {
            $category->setUrl($this->categoryPage, $this->controller);
        });

        return $post;
    }

    protected function checkEditor()
    {
        $backendUser = BackendAuth::getUser();
        return $backendUser && $backendUser->hasAccess('rainlab.blog.access_posts');
    }
}
