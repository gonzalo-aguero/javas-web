
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="keywords" content="desarrollo web,web,www,diseño web,diseño,agencia desarrollo web,web developer,software,desarrollo de software"/>
    <meta name="description" content="Somos JavasWeb, una consultora especializada en el desarrollo web.
        Buscamos ofrecer a nuestros clientes el mejor servicio, pensando siempre en la mejor calidad a cambio del mejor precio."/>
    <meta name="author" content="gonzaloaguerodev@gmail.com" />

    <link rel="icon" type="image/png" href="{{asset('img/favicon.png')}}" />
    <title>@yield('title')</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    @if (isset($styleSheets))
        @foreach ($styleSheets as $href)
            <link rel="stylesheet" href="{{$href}}">
        @endforeach
    @endif
</head>
<body>
    <header id="header">
        <div class="left animate__animated animate__fadeIn animate__slow" id="siteIdentity">
            <img src="{{asset('img/favicon.png')}}" alt="Logo JavasWeb">
            <div>
                <h2 class="i0">JAVAS</h2>
                <h2 class="i1">WEB</h2>
            </div>
        </div>
        <nav class="right" id="mainNavigation">
            <button class="imageButton">
                <img src="{{asset('img/icons/menu_white_24dp.svg')}}" id="openMenu" alt="Menu">
            </button>
            <button class="imageButton">
                <img src="{{asset('img/icons/close_white_24dp.svg')}}" id="closeMenu" alt="Menu" style="display:none;">
            </button>
            <ul class="animate__animated animate__fadeInDown animate__delay-2s">
                @if (isset($isHomePage) && $isHomePage === true)
                    <li><a href="#">Inicio<a></li>
                    <li><a href="#_aboutUs">Nosotros<a></li>
                    <li><a href="#_ourServices">Servicios<a></li>
                    <li><a href="#_whyChooseUs">Por qué elegirnos<a></li>
                    <li><a href="#_footer">Contacto<a></li>
                    <li><a href="{{route('devs')}}">Desarrollador<a></li>
                @else
                    <li><a href="{{route('home')}}#">Inicio<a></li>
                    <li><a href="{{route('home')}}#_aboutUs">Nosotros<a></li>
                    <li><a href="{{route('home')}}#_ourServices">Servicios<a></li>
                    <li><a href="{{route('home')}}#_whyChooseUs">Por qué elegirnos<a></li>
                    <li><a href="{{route('home')}}#_footer">Contacto<a></li>
                    <li><a href="{{route('devs')}}">Desarrollador<a></li>
                @endif
            </ul>
        </nav>
    </header>

    @yield('content')

    <footer id="footer">
        <img src="{{asset('img/design/footer.webp')}}">
        <!-- Black triangle -->
        <svg width="650" height="500" class="i0">
            <polygon points="650,0 650,500 0,500" stroke="none" stroke-width="0" fill="var(--color6)"></polygon>
        </svg>
        <div class="text">
            <h2 class="animate__animated">Ponete en contacto</h2>
            <h3>Dirección postal</h3>
            <p class="animate__animated"><a href="https://goo.gl/maps/GTc4ZU6FGksCfgcx7" target="_blank">Paraná, Entre Ríos, Argentina</a></p>
            <h3>Correo electrónico</h3>
            <p class="animate__animated"><a href="mailto:gonzaloaguerodev@gmail.com">gonzaloaguerodev@gmail.com</a></p>
            <h3>Número de teléfono</h3>
            <p class="animate__animated"><a href="tel:+54 9 343 425-8605">+54 9 343 425-8605</a></p>
        </div>
    </footer>
    @if (isset($scripts))
        @foreach ($scripts as $src)
            <script src="{{$src}}"></script>
        @endforeach
    @endif
</body>
</html>
