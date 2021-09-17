@section('title', 'Desarrolladores')
@extends('layouts.defaultDOM')
@section('content')
    <section class="i0">
        <h1>Desarrolladores</h1>
        <h2>Servicio para desarrolladores</h2>
        <p>JavasWeb ofrece a los desarrolladores la posibilidad de trabajar con nosotros.</p>
        <svg width="300" height="300" class="i0">
            <polygon points="0,0 300,0 300,300" stroke="none" stroke-width="0" fill="var(--color4)"></polygon>
        </svg>
        <svg width="300" height="300" class="i1">
            <polygon points="0,0 300,300 0,300" stroke="none" stroke-width="0" fill="var(--color6)"></polygon>
        </svg>
    </section>
    <section class="i1">
        <h2>¿En qué consiste?</h2>
        <p>El servicio consiste en el suministro de clientes para el dessarrollador a cambio de
            una pequeña comisión del 5%.
        </p>
        <p>El desarrollador podrá crear un presupuesto con el monto deseado y trendrá trato
            directo con el cliente.</p>
        <svg width="300" height="300" class="i0">
            <polygon points="0,0 300,0 0,300" stroke="none" stroke-width="0" fill="var(--color6)"></polygon>
        </svg>
        <svg width="300" height="300" class="i1">
            <polygon points="300,0 300,300 0,300" stroke="none" stroke-width="0" fill="var(--color4)"></polygon>
        </svg>
    </section>
    <section class="i2">
        <h2>Contacto</h2>
        <p>Para más información contactate con nosotros a través el siguiente formulario o cualquiera de los otros medios.</p>
        <form action="{{route('devs.contact')}}" method="post" id="contactForm">
            @method('POST')
            @csrf
            <input type="text" name="name" id="name" placeholder="Nombre completo" value="{{old('name')}}">
            @error('name')
                <small>{{$message}}</small>
            @enderror
            <input type="email" name="email" id="email" placeholder="Correo electrónico" value="{{old('email')}}">
            @error('email')
                <small>{{$message}}</small>
            @enderror
            <input type="tel" name="telephone" id="telephone" placeholder="Teléfono" value="{{old('telephone')}}">
            @error('telephone')
                <small>{{$message}}</small>
            @enderror
            <input type="submit" value="Enviar">
            @if (session('info'))
                <script>
                    alert("{{session('info')}}");
                </script>
            @endif
        </form>
        <svg width="300" height="300" class="i0">
            <polygon points="0,0 300,0 300,300" stroke="none" stroke-width="0" fill="var(--color4)"></polygon>
        </svg>
        <svg width="300" height="300" class="i1">
            <polygon points="0,0 300,300 0,300" stroke="none" stroke-width="0" fill="var(--color6)"></polygon>
        </svg>
    </section>
@endsection
