<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
    public function index(){
        $services = Service::orderBy('id', 'desc')->paginate();
        $params = compact('services');
        return view('services.index', $params);
    }
    public function show($id){
        $service = Service::find($id);
        $params = compact('service');
        return view('services.show', $params);
    }
    public function createForm(){
        return view('services.createForm');
    }
    public function create(Request $request){
        $service = new Service();
        $service->name = $request->name;
        $service->description = $request->description;
        $service->price = $request->price;
        $service->save();
        return redirect()->route('services.show', $service->id);
    }
    public function editForm(Service $service){
        return view('services.editForm', compact('service'));
    }
    public function edit(Request $request, Service $service){
        $service->name = $request->name;
        $service->description = $request->description;
        $service->price = $request->price;
        $service->save();
        return redirect()->route('services.show', $service->id);
    }
}
