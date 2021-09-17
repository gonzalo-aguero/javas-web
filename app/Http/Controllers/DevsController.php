<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Mail\ContactMailable;
use Illuminate\Support\Facades\Mail;
class DevsController extends Controller
{
    public function index(){
        $styleSheets = [
            asset('css/devs.css')
        ];
        $scripts = [
            asset('js/index.js'),
            asset('js/screenAdaptations.js'),
            asset('js/animationsHandler.js'),
            asset('js/menu.js')
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
        // require_once(__DIR__."/../../vendor/autoload.php");
        // $mailin = new Mailin('gonzaloaguerodev@gmail.com', 'J8HW9p6zSPtQNhma');
        // $mailin->
        //     addTo('gonzaloaguerodev@gmail.com', 'Gonzalo Agüero')->
        //     setFrom('gonzaloaguerodev@gmail.com', 'Gonzalo Agüero')->
        //     setReplyTo('gonzaloaguerodev@gmail.com','Gonzalo Agüero')->
        //     setSubject('Escriba el asunto aquí')->
        //     setText('Hola')->
        //     setHtml('<strong>Hola</strong>');
        // $res = $mailin->send();
        // /**
        // El mensaje de éxito será enviado de esta forma:
        // {'result' => true, 'message' => 'E-mail enviado'}
        // */
    }
}
