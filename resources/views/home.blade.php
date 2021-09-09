@section('title', 'JAVAS WEB')
@extends('layouts.defaultDOM')
@section('content')
    <section id="coverPage">
        {{-- #29213b --}}
        <div id="coverPageImage">
            <img src="{{asset('img/design/coverpage.jpg')}}">
            <span></span>
        </div>
        <svg width="1000" height="1000" class="decorationBlock i0">
            <polygon points="0,0 1000,0 1000,1000" stroke="none" stroke-width="0" fill="var(--color1)"></polygon>
        </svg>
        <svg width="1000" height="1000" class="decorationBlock i1">
            <polygon points="1000,0 1000,1000 0,1000" stroke="none" stroke-width="0" fill="var(--color4)"></polygon>
        </svg>
        <div class="text">
            <h1>JAVAS<br>WEB</h1>
            <p>Consultora de desarrollo web</p>
        </div>
    </section>
    <section id="aboutUs">
        <div class="image" style="background-image: url({{asset('img/design/aboutUs.jpg')}})"></div>
        <svg width="1000" height="1000" class="decorationBlock i1">
            <polygon points="0,0 1000,0 500,500" stroke="none" stroke-width="0" fill="var(--color4)"></polygon>
        </svg>
        <div class="text">
            <h1>INFORMACIÓN SOBRE LA EMPRESA</h1>
            <p>
                Somos JavasWeb, una consultora especializada en el desarrollo web.
                Buscamos ofrecer a nuestros clientes el mejor servicio, pensando siempre
                en la mejor calidad a cambio del mejor precio.
            </p>
        </div>
    </section>
@endsection
