<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

// use App\Mail\ContactMailable;
// use Illuminate\Support\Facades\Mail;
$SendInBluePath = __DIR__ . '/../../../vendor/sendinblue/api-v3-sdk/lib/';

require_once __DIR__ . '/../../../vendor/sendinblue/api-v3-sdk/lib/Configuration.php';
require_once __DIR__ . '/../../../vendor/sendinblue/api-v3-sdk/lib/Api/TransactionalEmailsApi.php';
require_once __DIR__ . '/../../../vendor/sendinblue/api-v3-sdk/lib/Model/SendSmtpEmail.php';
require_once __DIR__ . '/../../../vendor/guzzlehttp/guzzle/src/Client.php';

class DevsController extends Controller
{
    public function index(){
        $styleSheets = [
            asset('css/app.css'),
            asset('css/devs.css')
        ];
        $scripts = [
            asset('js/particles.min.js'),
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
        $apiKey = env("SENDINBLUE_API_KEY");
        $config = \SendInBlue\Client\Configuration::getDefaultConfiguration()->setApiKey('api-key', $apiKey);
        $apiInstance = new \SendInBlue\Client\Api\TransactionalEmailsApi(
            new \GuzzleHttp\Client(),
            $config
        );
        $sendSmtpEmail = new \SendinBlue\Client\Model\SendSmtpEmail();
        $sendSmtpEmail['sender'] = array(
                'email'=> 'javaswebonline@gmail.com',
                'name'=> 'JAVAS WEB'
            );
        $sendSmtpEmail['to'] = array(array(
                'email'=> 'gonzaloaguerodev@gmail.com',
                'name'=> 'Gonzalo Aguero Dev'
            ));
        $sendSmtpEmail['subject'] = "Contact Form Message";
        $sendSmtpEmail['htmlContent'] = "
            <html>
            <head>
                <style>
                    #content{
                        background-color: #E8E8E8;
                        padding: 10px;
                        border-radius: 5px;
                    }
                    h1{
                        text-align: center;
                        color: #FEA501;
                        text-transform: uppercase;
                    }
                    span{
                        display: block;
                        text-align: center;
                        font-size: 16px;
                    }
                    span > strong{
                        color: #0e6788;
                    }
                </style>
            </head>
            <body>
                <div id='content'>
                    <h1 style='text-align:center'>Contact Form</h1>
                    <span><strong>Name: </strong>".$request->name."</span><br>
                    <span><strong>Email: </strong>".$request->email."</span><br>
                    <span><strong>Telephone: </strong><a href='https://api.whatsapp.com/send?phone=".$request->telephone."'>".$request->telephone."</a></span><br>
                    <span><strong>Message: </strong>".$request->message."</span><br>
                </div>
            </body>
            </html>
            ";
        try {
            $apiInstance->sendTransacEmail($sendSmtpEmail);
            return redirect()->route('devs')->with('info', 'Mensaje enviado correctamente.');
        } catch (Exception $e) {
            return redirect()->route('devs')->with('info', "Error al enviar mensaje.\n".$e->getMessage().PHP_EOL);
        }
        // Mail::to('gonzaloaguerodev@gmail.com')->send($mail);
    }
}
