@section('url', 'https://javasweb.com/')
@section('title', 'JAVAS WEB')
@section('description', 'Somos JavasWeb, una consultora especializada en el desarrollo web.
Buscamos ofrecer a nuestros clientes el mejor servicio, pensando siempre en la mejor calidad a cambio del mejor precio.')
@section('keywords', 'Desarrollo web,web,www,diseño web,diseño,agencia desarrollo web,web developer,software,desarrollo de software,Javas web,javas,javas web')
@extends('layouts.defaultDOM')
@section('content')
    <section id="coverPage" style="
            background: linear-gradient(270deg, rgba(14, 70, 136, 0.6) 0%, rgba(254, 165, 1, 0.6) 100%),
            url({{asset('img/design/coverpage-home.jpg')}});
            background-size: cover;
            background-position: center center;
        ">
        <div id="particles-js"></div>
        <div class="text" id="coverPageText">
            <img class="animate__animated" src="{{asset('img/whiteFavicon.png')}}" alt="Logo Javas Web">
            <h1 class="animate__animated">[ Desarrollo Web ]</h1>
            <p class="animate__animated">
                Tenés un proyecto? Tu empresa está en crecimiento? Necesitás un sitio web?
                No lo dudes! <strong>Presupuesto sin cargo!</strong>
            </p>
            <span class="animate__animated" id="startButton">COMENZAR</span>
        </div>
    </section>
    <section id="hello">
        <h2>HELLO</h2>
        <p>Somos Javas Web: Desarrollo de software a medida.</p>
    </section>
    <section id="services">
        <h2 class="animate__animated" id="servicesTitle">SERVICIOS</h2>
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
        <h2 class="animate__animated" id="aboutUsTitle">NOSOTROS</h2>
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
            <h3 class="animate__animated">TECNOLOGÍAS</h3>
            <ul>
                <li class="animate__animated"><img src="{{asset('img/icons/technologies/html5.svg')}}" title="HTML5" alt="HTML5"></li>
                <li class="animate__animated"><img src="{{asset('img/icons/technologies/css3.svg')}}" title="CSS3"  alt="CSS3"></li>
                <li class="animate__animated"><img src="{{asset('img/icons/technologies/js.svg')}}" title="JavaScript"  alt="JavaScript"></li>
                <li class="animate__animated"><img src="{{asset('img/icons/technologies/PHP.svg')}}" title="PHP"  alt="PHP"></li>
                <li class="animate__animated"><img src="{{asset('img/icons/technologies/MySQL.svg')}}" title="MySQL"  alt="MySQL"></li>
                <li class="animate__animated"><img src="{{asset('img/icons/technologies/reactNative.svg')}}" title="React Native"  alt="React Native"></li>
                <li class="animate__animated"><img src="{{asset('img/icons/technologies/nodeJS.svg')}}" title="Node JS"  alt="Node JS"></li>
                <li class="animate__animated"><img src="{{asset('img/icons/technologies/jquery.svg')}}" title="JQuery"  alt="JQuery"></li>
                <li class="animate__animated"><img src="{{asset('img/icons/technologies/webPack.svg')}}" title="Web Pack"  alt="Web Pack"></li>
                <li class="animate__animated"><img src="{{asset('img/icons/technologies/wordpress.svg')}}" title="Wordpress"  alt="Wordpress"></li>
                <li class="animate__animated"><img src="{{asset('img/icons/technologies/java.svg')}}" title="Java"  alt="Java"></li>
                <li class="animate__animated"><img src="{{asset('img/icons/technologies/firebase.svg')}}" title="Firebase"  alt="Firebase"></li>
                <li class="animate__animated"><img src="{{asset('img/icons/technologies/heroku.svg')}}" title="Heroku"  alt="Heroku"></li>
                <li class="animate__animated"><img src="{{asset('img/icons/technologies/github.svg')}}" title="Github"  alt="Github"></li>
            </ul>
        </div>
    </section>
    <section id="ourProjects">
        <h2 class="animate__animated" id="ourProjectsTitle">ALGUNOS DE NUESTROS PROYECTOS</h2>
        <div class="projects">
            <a href="https://bskelevadores.com" target="_blank" class="project i0 animate__animated">
                <img src="{{asset('img/projects/BSK Elevadores.jpg')}}" alt="BSK Elevadores">
                <h4>SITIO WEB: DISEÑO + DESARROLLO</h4>
            </a>
            <a href="https://anubisinsumos.com" target="_blank" class="project i1 animate__animated">
                <img src="{{asset('img/projects/Anubis Insumos.jpg')}}" alt="Anubis Insumos">
                <h4>TIENDA ONLINE: DESARROLLO</h4>
            </a>
            <a href="https://bgatransporte.com" target="_blank" class="project i2 animate__animated">
                <img src="{{asset('img/projects/BGA Transporte.jpg')}}" alt="BGA Transporte">
                <h4>SITIO WEB: DISEÑO + DESARROLLO</h4>
            </a>
        </div>
    </section>
    <section id="workflow">
        <h2 class="animate__animated" id="workflowTitle">NUESTRO WORKFLOW</h2>
        <ul>
            <li class="i0 animate__animated">
                <div class="text">
                    <h3>INVESTIGACIÓN</h3>
                    <p>Recopilar y analizar todos los datos sobre las características del negocio para nuestro cliente.</p>
                </div>
                <img src="{{asset('img/design/workflow/1.svg')}}" alt="INVESTIGACIÓN">
            </li>
            <li class="i1 animate__animated">
                <img src="{{asset('img/design/workflow/2.svg')}}" alt="DISEÑO Y DESARROLLO">
                <div class="text">
                    <h3>DISEÑO Y DESARROLLO</h3>
                    <p>Planificación, wireframing, prototipado, visualización, arquitectura y codificación.</p>
                </div>
            </li>
            <li class="i2 animate__animated">
                <div class="text">
                    <h3>REFINAMIENTO</h3>
                    <p>Control de la calidad, testing, aspectos técnicos y mejoras del proyecto final.</p>
                </div>
                <img src="{{asset('img/design/workflow/3.svg')}}" alt="REFINAMIENTO">
            </li>
            <li class="i3 animate__animated">
                <img src="{{asset('img/design/workflow/4.svg')}}" alt="FINALIZACIÓN">
                <div class="text">
                    <h3>FINALIZACIÓN</h3>
                    <p>Finalmente, lanzamiento del producto y presentación del proyecto al mundo.</p>
                </div>
            </li>
        </ul>
    </section>
    <section id="contact">
        <h2 class="animate__animated" id="contactTitle">CONTACTO</h2>
        <p class="animate__animated">Contáctanos sin compromiso. En menos de 24 horas te enviaremos nuestro feedback.</p>
        <div id="contactOptions">
            <div id="othersContactOptions">
                <h3>¿Hablamos?</h3>
                <p>Damos servicios a todo tipo de sectores:<br>
                    Startups, Clientes finales, Agencias, Pymes, Particulares, Autónomos, etc.
                </p>
                <span><strong>Email: </strong><a href="mailto:javaswebonline@gmail.com">javaswebonline@gmail.com</a></span>
                <span><strong>Instagram: </strong><a href="https://www.instagram.com/javas_web/">@javas_web</a></span>
                <span><strong>WhatsApp: </strong>
                    <a class="whatsapp" href="https://api.whatsapp.com/send?phone=5493434258605&text=Hola!%20Quisiera%20realizar%20una%20consulta.%F0%9F%98%81">+54 9 343 425-8605</a>
                    <a class="whatsapp" href="https://api.whatsapp.com/send?phone=5493435083266&text=Hola!%20Quisiera%20realizar%20una%20consulta.%F0%9F%98%81">+54 9 343 508-3266</a>
                </span>
            </div>
            <form action="{{route('mail.contact')}}" method="post" id="contactForm">
                @method('POST')
                @csrf

                <select name="service" id="service">
                    <option value="" selected>Seleccionar motivo</option>
                    <option value="Sitio web">Sitio web</option>
                    <option value="Tienda online">Tienda online (ecommerce)</option>
                    <option value="Apps">Apps móviles</option>
                    <option value="Soy desarrollador">Servicio para desarrolladores</option>
                    <option value="Otro">Otro</option>
                </select>
                @error('service')
                    <small>{{$message}}</small>
                @enderror
                <div>
                    <input type="text" name="name" id="name" placeholder="Nombre" value="{{old('name')}}">
                    @error('name')
                        <small>{{$message}}</small>
                    @enderror
                    <input type="text" name="company" id="company" placeholder="Empresa" value="{{old('company')}}">
                    @error('company')
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
                </div>
                <textarea name="message" id="message" placeholder="Mensaje">{{old('message')}}</textarea>
                @error('message')
                    <small>{{$message}}</small>
                @enderror
                <input type="submit" value="Enviar" disabled>
                @if (session('info'))
                    <script>
                        setTimeout(()=> alert("{{session('info')}}"), 1200);
                    </script>
                @endif
            </form>
        </div>
    </section>
@endsection
