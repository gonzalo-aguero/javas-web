<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
}


/**
 * Service::all(); to get all records.
 * Service::where('id', ID)->get(); to get conditionals records.
 * Service::where('price', 'toConsult')->orderBy('id', 'desc')->get(); to get record in order descendent.
 * Service::select('name', 'price')->get();
 * Service::find(5); to get an specific record.
 */
