<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactForm extends Model
{
    protected $fillable = ['name', 'email', 'phone', 'msg', 'read', 'estate_id'];
}
