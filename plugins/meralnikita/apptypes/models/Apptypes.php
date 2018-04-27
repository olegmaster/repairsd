<?php namespace Meralnikita\Apptypes\Models;

use Model;

/**
 * Model
 */
class Apptypes extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;
    public $attachMany = [
        'img_slider_1' => 'System\Models\File',
        'img_slider_2' => 'System\Models\File'
    ];

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    /**
     * @var string The database table used by the model.
     */
    public $table = 'meralnikita_apptypes_';
}
