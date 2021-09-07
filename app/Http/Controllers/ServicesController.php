<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
    public function index(){
        $services = Service::paginate();
        $params = compact('services');
        return view('services.index', $params);
    }
    public function show($service){
        $params = array(
            "service"=>$service
        );
        return view('services.show', $params);
    }
    public function get($service = null){
        $params = array(
            "service"=>$service
        );
        if($service === null){
            header('Location: ./');
            die();
        }else{
            return view('services.get', $params);
        }
    }
}
