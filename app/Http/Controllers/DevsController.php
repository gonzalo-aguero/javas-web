<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Mail\ContactMailable;
use Illuminate\Support\Facades\Mail;
class DevsController extends Controller
{
    public function index(){
        $styleSheets = [
            asset('css/app.css'),
            asset('css/devs.css')
        ];
        $scripts = [
            asset('js/app.js')
        ];
        $params = compact('styleSheets', 'scripts');
        return view('devs', $params);
    }
    public function contact(Request $request){
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'telephone' => 'required'
        ]);

        $mail = new ContactMailable($request->all());
        Mail::to('gonzaloaguerodev@gmail.com')->send($mail);

        return redirect()->route('devs')->with('info', 'Mensaje enviado correctamente.');
    }
}
