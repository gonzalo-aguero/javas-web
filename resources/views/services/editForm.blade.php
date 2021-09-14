@extends('layouts.defaultDOM')
@section('title', 'Edit service')
@section('content')
    <h1>Edit the service #{{$service->id}}</h1>
    <form action="{{route('services.edit', $service)}}" method="post">
        @method('PUT')
        @csrf
        <label>
            Name
            <input type="text" name="name" id="name" value="{{$service->name}}">
        </label>
        <label>
            Description
            <textarea name="description" id="description">{{$service->description}}</textarea>
        </label>
        <label>
            Price
            <input type="text" name="price" id="price" value="{{$service->price}}">
        </label>
        <input type="submit" value="Send">
    </form>
@endsection
