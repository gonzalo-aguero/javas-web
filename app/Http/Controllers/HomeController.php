<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function __invoke(){
        $styleSheets = [
        ];
        $scripts = [
            asset('js/screenAdaptations.js'),
            asset('js/animationsHandler.js'),
            asset('js/menu.js'),
            asset('js/WhatsAppButton.js'),
            asset('js/index.js')
        ];
        $isHomePage = true;
        $params = compact('styleSheets', 'scripts', 'isHomePage');
        return view('home', $params);
    }
}
