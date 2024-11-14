<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class County extends Model
{
    protected $fillable = ['name', 'slug'];

    public function getNameAttribute($value)
    {
        // Decode the JSON string stored in the database
        return json_decode($value, true); // 'true' returns an associative array
    }


    public function cities()
    {
        return $this->hasMany(City::class);
    }
}
