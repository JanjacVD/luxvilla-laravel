<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $fillable = ['name', 'slug', 'county_id'];

    public function areas()
    {
        return $this->hasMany(Area::class);
    }

    public function county()
    {
        return $this->belongsTo(County::class);
    }
}
