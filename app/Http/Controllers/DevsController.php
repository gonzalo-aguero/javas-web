<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DevsController extends Controller
{
    public function __invoke(){
        $styleSheets = [
            asset('css/devs.css')
        ];
        $scripts = [
            asset('js/index.js')
        ];
        $params = compact('styleSheets', 'scripts');
        return view('devs', $params);
    }
}
