<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class HashtagGroup extends Model
{
    use SoftDeletes;
    protected $fillable = ['name'];

    public function getNameAttribute($value)
    {
        // Decode the JSON string stored in the database
        return json_decode($value, true); // 'true' returns an associative array
    }


    public function hashtags()
    {
        return $this->hasMany(Hashtag::class)->withTrashed();
    }
}
