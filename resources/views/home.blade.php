@section('title', 'JAVAS WEB')
@extends('layouts.defaultDOM')
@section('content')
    <section id="coverPage">
        {{-- #29213b --}}
        <div id="coverPageImage">
            <img src="{{asset('img/design/coverpage.jpg')}}">
            <span></span>
        </div>
        <!-- White triangle -->
        <svg width="740" height="500" class="decorationBlock i0">
            <polygon points="0,0 740,0 740,500" stroke="none" stroke-width="0" fill="var(--color1)"></polygon>
        </svg>
        <!-- Yellow Triangle -->
        <svg width="500" height="500" class="decorationBlock i1">
            <polygon points="500,0 500,500 0,500" stroke="none" stroke-width="0" fill="var(--color4)"></polygon>
        </svg>
        <div class="text">
            <h1>JAVAS<br>WEB</h1>
            <p>Consultora de desarrollo web</p>
        </div>
    </section>
    <section id="aboutUs">
        <div class="image" style="background-image: url({{asset('img/design/aboutUs.jpg')}})"></div>
        <svg width="600" height="300" class="decorationBlock i1">
            <polygon points="0,0 600,0 300,300" stroke="none" stroke-width="0" fill="var(--color4)"></polygon>
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
    <section id="ourServices">
        <!-- Black triangle -->
        <svg width="300" height="300" class="decorationBlock i0">
            <polygon points="0,0 300,300 0,300" stroke="none" stroke-width="0" fill="var(--color6)"></polygon>
        </svg>
        <!-- Yellow triangle -->
        <svg width="300" height="300" class="decorationBlock i1">
            <polygon points="0,0 300,300 300,0" stroke="none" stroke-width="0" fill="var(--color4)"></polygon>
        </svg>
        <h2>NUESTROS SERVICIOS</h2>
        <div class="services">
            <div class="service i0">
                <img src="{{asset('img/icons/ourServicesIcon1.png')}}" alt="">
                <h3>CONSULTORÍA INFORMÁTICA</h3>
                <p>Te ayudamos a maximizar tu red y procesos informáticos.</p>
            </div>
            <div class="service i1">
                <img src="{{asset('img/icons/ourServicesIcon2.png')}}" alt="">
                <h3>SOLUCIONES EN LA NUBE</h3>
                <p>Conservá los datos de tus negocios y aplicaciones de manera segura.</p>
            </div>
            <div class="service i2">
                <img src="{{asset('img/icons/ourServicesIcon3.png')}}" alt="">
                <h3>CONTINUIDAD EMPRESARIAL</h3>
                <p>¡Volvé a recuperar tus datos cuando ocurra un desastre!</p>
            </div>
        </div>
    </section>
@endsection
