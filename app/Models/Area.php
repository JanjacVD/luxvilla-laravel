<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    protected $fillable = ['name', 'slug', 'city_id'];
    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function estates()
    {
        return $this->hasMany(RealEstate::class);
    }
}
