<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function __invoke(){
        $styleSheets = [
            asset('css/app.css')
        ];
        $scripts = [
            asset('js/app.js')
        ];
        $isHomePage = true;
        $params = compact('styleSheets', 'scripts', 'isHomePage');
        return view('home', $params);
    }
}
