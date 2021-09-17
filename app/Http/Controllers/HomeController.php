<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function __invoke(){
        $styleSheets = [
        ];
        $scripts = [
            asset('js/index.js'),
            asset('js/screenAdaptations.js'),
            asset('js/animationsHandler.js'),
            asset('js/menu.js')
        ];
        $isHomePage = true;
        $params = compact('styleSheets', 'scripts', 'isHomePage');
        return view('home', $params);
    }
}
