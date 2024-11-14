<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Hashtag extends Model
{
    use SoftDeletes;
    protected $fillable = ['name', 'hashtag_group_id'];

    public function getNameAttribute($value)
    {
        // Decode the JSON string stored in the database
        return json_decode($value, true); // 'true' returns an associative array
    }


    public function group()
    {
        return $this->belongsTo(HashtagGroup::class, 'hashtag_group_id', 'id');
    }

    public function realEstates()
    {
        return $this->belongsToMany(RealEstate::class, 'hashtag_real_estate');
    }

}
