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
            <ul>
                <li><a href="{{null}}">Nosotros<a></li>
                <li><a href="{{null}}">Servicios<a></li>
                <li><a href="{{null}}">Por qué elegirnos<a></li>
                <li><a href="{{null}}">Contacto<a></li>
            </ul>
        </nav>
    </header>

    @yield('content')

    {{-- Develop footer --}}
    <footer>Footer</footer>
</body>
</html>
