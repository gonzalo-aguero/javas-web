@section('title', 'JAVAS WEB')
@section('isHomePage', true)
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
        <div class="text animate__animated animate__fadeInLeftBig">
            <h1>JAVAS<br>WEB</h1>
            <p class="animate__animated animate__fadeIn animate__delay-1s">Consultora de desarrollo web</p>
        </div>
    </section>
    <section id="aboutUs">
        <img src="{{asset('img/design/aboutUs.jpg')}}">
        <div class="text">
            <h1 class="animate__animated animate__fadeInLeft">INFORMACIÓN SOBRE LA EMPRESA</h1>
            <p class="animate__animated animate__fadeInRight">
                Somos JavasWeb, una consultora especializada en el desarrollo web.
                Buscamos ofrecer a nuestros clientes el mejor servicio, pensando siempre
                en la mejor calidad a cambio del mejor precio.
            </p>
        </div>
        <!-- Yellow Triangle -->
        <svg width="600" height="300" class="i0">
            <polygon points="0,0 600,0 300,300" stroke="none" stroke-width="0" fill="var(--color4)"></polygon>
        </svg>
        <!-- White Polygon -->
        <svg width="900" height="500" class="i1">
            <polygon points="300,0 900,0 900,500 200,500 0,300" stroke="none" stroke-width="0" fill="var(--color1)" class=""></polygon>
        </svg>
        <!-- White Triangle -->
        <svg width="250" height="250" class="i2">
            <polygon points="0,0 250,250 0,250" stroke="none" stroke-width="0" fill="var(--color1)"></polygon>
        </svg>
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
        <h2 class="animate__animated animate__fadeIn">NUESTROS SERVICIOS</h2>
        <div class="services">
            <div class="service i0 animate__animated">
                <img src="{{asset('img/icons/ourServicesIcon1.svg')}}" alt="">
                <h3>CONSULTORÍA WEB</h3>
                <p>Creamos una solución para vos a través de la web.</p>
            </div>
            <div class="service i1 animate__animated">
                <img src="{{asset('img/icons/ourServicesIcon2.png')}}" alt="">
                <h3>MANTENIMIENTO</h3>
                <p>Nos encargamos de mantener vivo tu sitio web y hacer los cambios que necesites.</p>
            </div>
            <div class="service i2 animate__animated">
                <img src="{{asset('img/icons/ourServicesIcon3.svg')}}" alt="">
                <h3>DERIVACIÓN DE CLIENTES</h3>
                <p>¡Si sos desarrollador/a, en caso de no poder tomar un cliente te lo derivamos!</p>
            </div>
        </div>
    </section>
    <section id="whyChooseUs">
        <div class="text">
            <h2 class="animate__animated">¿POR QUÉ ELEGIRNOS?</h2>
            <h3>Efectividad</h3>
            <p class="animate__animated">Solucionamos los problemas de cada cliente, siempre con la mejor calidad y el mejor precio.</p>

            <h3>Servicio personalizado</h3>
            <p class="animate__animated">Cada empresa es única, por lo que nosotros nos aseguramos de crear la solución que mejor se adapte a tu empresa!</p>

            <h3>Presupuesto sin cargo</h3>
            <p class="animate__animated">Contanos lo que necesitas o cuál es tu problema; ¡Nosotros te ofrecemos una solución y te pasamos presupuesto sin cargo!</p>
        </div>
        <img src="{{asset('img/design/whyChooseUs.jpg')}}">
        <!-- Yellow polygon -->
        <svg width="500" height="500" class="i0">
            <polygon points="0,0 100,0 500,350 350,500 0,500" stroke="none" stroke-width="0" fill="var(--color4)"></polygon>
        </svg>
        <!-- White triangle -->
        <svg width="300" height="300" class="i1">
            <polygon points="300,0 300,300 0,300" stroke="none" stroke-width="0" fill="var(--color1)"></polygon>
        </svg>
    </section>
@endsection
