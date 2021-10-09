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
            <div class="service i3 animate__animated">
                <img class="serviceIcon" src="{{asset('img/design/services/diseño UX&UI.svg')}}" alt="Diseño UX/UI">
                <h3>Diseño UX/UI</h3>
                <p>Ponemos especial cuidado en el diseño de la interfaz y experiencia de usuario. </p>
                <a href="#" class="info">INFO</a>
            </div>
            <div class="service i4 animate__animated">
                <img class="serviceIcon" src="{{asset('img/design/services/backend&frontend.svg')}}" alt="Backend & Frontend">
                <h3>Backend & Frontend</h3>
                <p>Somos tu partner de confianza. Realizamos todo tipo de implementaciones a
                     nivel software. Trabajamos tanto del lado del Frontend como del Backend.</p>
                <a href="#" class="info">INFO</a>
            </div>
            <div class="service i5 animate__animated">
                <img class="serviceIcon" src="{{asset('img/design/services/SEO.svg')}}" alt="SEO & SEM">
                <h3>SEO & SEM</h3>
                <p>Realizamos una gestión completa de posicionamiento. Desde el estudio de palabras
                    claves hasta optimización de su sitio web, contenido e imágenes.</p>
                <a href="#" class="info">INFO</a>
            </div>
        </div>
    </section>
    <section id="aboutUs">
        <h2 class="animate__animated animate__fadeIn" id="aboutUsTitle">NOSOTROS</h2>
        <div class="blocks">
            <div class="block i0 animate__animated">
                <h3>¿Quiénes somos?</h3>
                <p>Somos JavasWeb, una consultora especializada en el desarrollo  web. Buscamos
                    ofrecer a nuestros clientes el mejor servicio, pensando siempre en la mejor
                    calidad a cambio del mejor precio.</p>
            </div>
            <div class="block i1 animate__animated">
                <h3>¿Para quién trabajamos?</h3>
                <p>Diseñamos, desarrollamos e innovamos para gente como vos.
                    <br>Trabajamos para empresas, emprendedores, autónomos, etc.</p>
            </div>
            <div class="block i2 animate__animated">
                <h3>¿Por qué lo hacemos?</h3>
                <p>Porque somos apasionados en lo que hacemos y queremos aprovechar nuestra
                    pasión para ayudarte a vos y a tu empresa a crecer, innovar y dominar el
                    mercado.</p>
            </div>
        </div>
        <div id="technologies">
            <h3>TECNOLOGÍAS</h3>
            <ul>
                <li><img src="{{asset('img/icons/technologies/html5.svg')}}" title="HTML5" alt="HTML5"></li>
                <li><img src="{{asset('img/icons/technologies/css3.svg')}}" title="CSS3"  alt="CSS3"></li>
                <li><img src="{{asset('img/icons/technologies/js.svg')}}" title="JavaScript"  alt="JavaScript"></li>
                <li><img src="{{asset('img/icons/technologies/PHP.svg')}}" title="PHP"  alt="PHP"></li>
                <li><img src="{{asset('img/icons/technologies/MySQL.svg')}}" title="MySQL"  alt="MySQL"></li>
                <li><img src="{{asset('img/icons/technologies/reactNative.svg')}}" title="React Native"  alt="React Native"></li>
                <li><img src="{{asset('img/icons/technologies/nodeJS.svg')}}" title="Node JS"  alt="Node JS"></li>
                <li><img src="{{asset('img/icons/technologies/jquery.svg')}}" title="JQuery"  alt="JQuery"></li>
                <li><img src="{{asset('img/icons/technologies/webPack.svg')}}" title="Web Pack"  alt="Web Pack"></li>
                <li><img src="{{asset('img/icons/technologies/wordpress.svg')}}" title="Wordpress"  alt="Wordpress"></li>
                <li><img src="{{asset('img/icons/technologies/java.svg')}}" title="Java"  alt="Java"></li>
                <li><img src="{{asset('img/icons/technologies/firebase.svg')}}" title="Firebase"  alt="Firebase"></li>
                <li><img src="{{asset('img/icons/technologies/heroku.svg')}}" title="Heroku"  alt="Heroku"></li>
                <li><img src="{{asset('img/icons/technologies/github.svg')}}" title="Github"  alt="Github"></li>
            </ul>
        </div>
    </section>
    <section id="ourProjects">
        <h2 class="animate__animated animate__fadeIn" id="ourProjectsTitle">ALGUNOS DE NUESTROS PROYECTOS</h2>
        <div class="projects">
            <div class="project i0 animate__animated">
                <img src="{{asset('img/projects/project1.jpg')}}" alt="">
                <h4>APP: DISEÑO + DESARROLLO</h4>
            </div>
            <div class="project i1 animate__animated">
                <img src="{{asset('img/projects/project2.jpg')}}" alt="">
                <h4>SITIO WEB: DISEÑO + DESARROLLO</h4>
            </div>
            <div class="project i2 animate__animated">
                <img src="{{asset('img/projects/project3.jpg')}}" alt="">
                <h4>APP: DISEÑO + DESARROLLO</h4>
            </div>
        </div>
    </section>
    <section id="workflow">
        <h2 class="animate__animated animate__fadeIn" id="workflowTitle">NUESTRO WORKFLOW</h2>
        <ul>
            <li class="i0">
                <div class="text">
                    <h3>INVESTIGACIÓN</h3>
                    <p>Recopilar y analizar todos los datos sobre las características del negocio para nuestro cliente.</p>
                </div>
                <img src="{{asset('img/design/workflow/1.svg')}}" alt="INVESTIGACIÓN">
            </li>
            <li class="i1">
                <img src="{{asset('img/design/workflow/2.svg')}}" alt="DISEÑO Y DESARROLLO">
                <div class="text">
                    <h3>DISEÑO Y DESARROLLO</h3>
                    <p>Planificación, wireframing, prototipado, visualización, arquitectura y codificación.</p>
                </div>
            </li>
            <li class="i2">
                <div class="text">
                    <h3>REFINAMIENTO</h3>
                    <p>Control de la calidad, testing, aspectos técnicos y mejoras del proyecto final.</p>
                </div>
                <img src="{{asset('img/design/workflow/3.svg')}}" alt="REFINAMIENTO">
            </li>
            <li class="i3">
                <img src="{{asset('img/design/workflow/4.svg')}}" alt="FINALIZACIÓN">
                <div class="text">
                    <h3>FINALIZACIÓN</h3>
                    <p>Finalmente, lanzamiento del producto y presentación del proyecto al mundo.</p>
                </div>
            </li>
        </ul>
    </section>
@endsection
