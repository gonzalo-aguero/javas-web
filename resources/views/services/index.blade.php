@extends('layouts.defaultDOM')
@section('title', 'Services')
@section('content')
    <h1>Services</h1>
    <button>
        <a href="{{route('services.createForm')}}">Create</a>
    </button>
    <h2>Look at the amazing services catalog!</h2>
    @foreach ($services as $service)
        <li>
            [{{$service->id}}] ---
            {{$service->name}} ---
            ${{$service->price}} ---
            <a href="{{route('services.show', $service)}}">See more</a>
        </li>
    @endforeach
    {{$services->links()}}
@endsection
