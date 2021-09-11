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

</head>
<body>
    <header id="header">
        <div class="left" id="siteIdentity">
            <img src="{{asset('img/favicon.png')}}" alt="Logo JavasWeb">
            <div>
                <h2 class="i0">JAVAS</h2>
                <h2 class="i1">WEB</h2>
            </div>
        </div>
        <nav class="right" id="mainNavigation">
            <img src="{{asset('img/icons/menu_white_24dp.svg')}}" id="openMenu" alt="Menu">
            <ul>
                <li><a href="#aboutUs">Nosotros<a></li>
                <li><a href="#ourServices">Servicios<a></li>
                <li><a href="#whyChooseUs">Por qué elegirnos<a></li>
                <li><a href="#footer">Contacto<a></li>
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
            <h2>Ponete en contacto</h2>
            <h3>Dirección postal</h3>
            <p>Paraná, Entre Ríos, Argentina</p>
            <h3>Correo electrónico</h3>
            <p><a href="mailto:gonzaloaguerodev@gmail.com">gonzaloaguerodev@gmail.com</a></p>
            <h3>Número de teléfono</h3>
            <p>+54 9 343 425-8605</p>
        </div>
    </footer>
    <script src="{{asset('js/screenAdaptations.js')}}"></script>
</body>
</html>
