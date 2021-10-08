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
    <section id="services">
        <h2 class="animate__animated animate__fadeIn" id="servicesTitle">SERVICIOS</h2>
        <div class="services">
            <div class="service i0 animate__animated">
                <img class="serviceIcon" src="{{asset('img/design/services/software a medida.svg')}}" alt="Software a medida">
                <h3>Software a medida</h3>
                <p>Desarrollamos una solución de software a medida con las últimas tecnologías,
                    conforme a las necesidades y funcionalidades de tu negocio.</p>
                <a href="#" class="info">INFO</a>
            </div>
            <div class="service i1 animate__animated">
                <img class="serviceIcon" src="{{asset('img/design/services/ecommerce and website.svg')}}" alt="Ecommerce and Website">
                <h3>Ecommerce & Website</h3>
                <p>Creamos tu sitio web o tienda online (ecommerce) adaptada a tus necesidades,
                    creando siempre la mejor solución para aumentar las ventas de tu empresa.</p>
                <a href="#" class="info">INFO</a>
            </div>
            <div class="service i2 animate__animated">
                <img class="serviceIcon" src="{{asset('img/design/services/apps.svg')}}" alt="Apps Móviles">
                <h3>Apps Móviles</h3>
                <p>Desarrollamos aplicaciones para los principales mercados como App Store para
                    dispositivos iOS y Google Play para dispositivos Android.</p>
                <a href="#" class="info">INFO</a>
            </div>


            <div class="service i0 animate__animated">
                <img class="serviceIcon" src="{{asset('img/design/services/software a medida.svg')}}" alt="Software a medida">
                <h3>Software a medida</h3>
                <p>Desarrollamos una solución de software a medida con las últimas tecnologías,
                    conforme a las necesidades y funcionalidades de tu negocio.</p>
                <a href="#" class="info">INFO</a>
            </div>
            <div class="service i1 animate__animated">
                <img class="serviceIcon" src="{{asset('img/design/services/ecommerce and website.svg')}}" alt="Ecommerce and Website">
                <h3>Ecommerce & Website</h3>
                <p>Creamos tu sitio web o tienda online (ecommerce) adaptada a tus necesidades,
                    creando siempre la mejor solución para aumentar las ventas de tu empresa.</p>
                <a href="#" class="info">INFO</a>
            </div>
            <div class="service i2 animate__animated">
                <img class="serviceIcon" src="{{asset('img/design/services/apps.svg')}}" alt="Apps Móviles">
                <h3>Apps Móviles</h3>
                <p>Desarrollamos aplicaciones para los principales mercados como App Store para
                    dispositivos iOS y Google Play para dispositivos Android.</p>
                <a href="#" class="info">INFO</a>
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
