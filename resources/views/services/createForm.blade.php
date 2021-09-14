@extends('layouts.defaultDOM')
@section('title', 'Create service')
@section('content')
    <h1>Create a new service</h1>
    <h2>Please, fill at the follow form.</h2>
    <form action="{{route('services.create')}}" method="post">
        @csrf
        <label>
            Name
            <input type="text" name="name" id="name">
        </label>
        <label>
            Description
            <textarea name="description" id="description"></textarea>
        </label>
        <label>
            Price
            <input type="text" name="price" id="price">
        </label>
        <input type="submit" value="Send">
    </form>
@endsection
