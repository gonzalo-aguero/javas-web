@section('url', 'https://javasweb.com/')
@section('title', 'JAVAS WEB')
@section('isHomePage', true)
@extends('layouts.defaultDOM')
@section('content')
    <section id="coverPage" style="
            background: linear-gradient(270deg, rgba(14, 70, 136, 0.6) 0%, rgba(254, 165, 1, 0.6) 100%),
            url({{asset('img/design/coverpage.jpg')}});
            background-size: cover;
            background-position: center center;
        ">
        <div class="text animate__animated animate__fadeInLeftBig" id="coverPageText">
            <img src="{{asset('img/whiteFavicon.png')}}" alt="Logo Javas Web">
            <h1>[ Desarrollo Web ]</h1>
            <p class="animate__animated animate__fadeIn animate__delay-1s">
                Tenés un proyecto? Tu empresa está en crecimiento? Necesitás un sitio web?
                No lo dudes! <strong>Presupuesto sin cargo!</strong>
            </p>
            <span id="startButton">COMENZAR</span>
        </div>
    </section>
    <section id="hello">
        <h2>HELLO</h2>
        <p>Somos Javas Web: Desarrollo de software a medida.</p>
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
