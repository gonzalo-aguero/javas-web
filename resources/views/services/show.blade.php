@extends('layouts.defaultDOM')
@section('title', $service->name)
@section('content')
    <br>
    <a href="{{route('services.index')}}">Return</a>
    ---
    <a href="{{route('services.editForm', $service)}}">Edit service</a>
    <h1>{{$service->name}} (#{{$service->id}})</h1>
    <h2>{{$service->price}}</h2>
    <p>Description: {{$service->description}}</p>
@endsection
