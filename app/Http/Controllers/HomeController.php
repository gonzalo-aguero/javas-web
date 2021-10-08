<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function __invoke(){
        $styleSheets = [
            asset('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'),
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
