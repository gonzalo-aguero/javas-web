@extends('layouts.defaultDOM')
@section('title', 'Services')
@section('content')
    <h1>Services</h1>
    <h2>Look at the amazing services catalog!</h2>
    @foreach ($services as $service)
        <li>
            {{$service->price}}
            <a href="{{route('services.show', 'Desarrollo web')}}">Services</a>
        </li>
    @endforeach
    {{$services->links()}}
@endsection
