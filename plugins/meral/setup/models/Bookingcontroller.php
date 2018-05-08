<?php namespace Meral\Setup\Models;

use Meral\Setup\Models\Bookingmodel;
use Model;

/**
 * bookingcontroller Model
 */
class Bookingcontroller extends Model
{
    /**
     * @var string The database table used by the model.
     */
    public $table = 'meral_setup_bookingmodels';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = [];

    /**
     * @var array Relations
     */
    public $hasOne = [];
    public $hasMany = [];
    public $belongsTo = [];
    public $belongsToMany = [];
    public $morphTo = [];
    public $morphOne = [];
    public $morphMany = [];
    public $attachOne = [];
    public $attachMany = [];
}
