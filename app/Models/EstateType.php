<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class EstateType extends Model
{
    use SoftDeletes;
    public function getNameAttribute($value)
    {
        // Decode the JSON string stored in the database
        return json_decode($value, true); // 'true' returns an associative array
    }
    protected $fillable = ['slug', 'name'];

    public function estates()
    {
        return $this->hasMany(RealEstate::class);
    }
}
