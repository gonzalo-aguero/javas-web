
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="robots" content="index,follow"/>
    <meta http-equiv="cache-control" content="no-cache"/>
    <meta http-equiv="expires" content="0"/>
    <meta name="keywords" content="@yield('keywords')"/>
    <meta name="description" content="@yield('description')"/>
    <meta name="author" content="gonzaloaguerodev@gmail.com" />
    <meta name="copyright" content="Javas Web" />
    <link rel="canonical" href="@yield('url')"/>

    <link rel="icon" type="image/png" href="{{asset('favicon.ico')}}" />
    <title>@yield('title')</title>
    @if (isset($styleSheets))
        @foreach ($styleSheets as $href)
            <link rel="stylesheet" href="{{$href}}">
        @endforeach
    @endif
    <link rel="stylesheet" href="{{asset('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')}}">
</head>
<body>
    <header id="header">
        <div class="left animate__animated animate__fadeIn animate__slow" id="siteIdentity">
            <div>
                <h2 class="i0">JAVAS</h2>
                <h2 class="i1">WEB</h2>
            </div>
        </div>
        <nav class="right" id="mainNavigation">
            <button class="imageButton">
                <img src="{{asset('img/icons/menu_white_24dp.svg')}}" id="openMenu" alt="Abrir menu">
            </button>
            <button class="imageButton">
                <img src="{{asset('img/icons/close_white_24dp.svg')}}" id="closeMenu" alt="Cerrar menu" style="display:none;">
            </button>
            <ul class="animate__animated animate__fadeInDown animate__delay-2s">
                @if (isset($isHomePage) && $isHomePage === true)
                    <li><a href="#">Home<a></li>
                    <li><a href="#_aboutUs">Nosotros<a></li>
                    <li><a href="#_services">Servicios<a></li>
                    <li><a href="#_projects">Trabajos<a></li>
                    <li><a href="#_contact">Contacto<a></li>
                    <li><a href="{{route('devs')}}">Desarrollador<a></li>
                @else
                    <li><a href="{{route('home')}}#">Home<a></li>
                    <li><a href="{{route('home')}}#_aboutUs">Nosotros<a></li>
                    <li><a href="{{route('home')}}#_services">Servicios<a></li>
                    <li><a href="{{route('home')}}#_projects">Trabajos<a></li>
                    <li><a href="{{route('home')}}#_contact">Contacto<a></li>
                    <li><a href="{{route('devs')}}">Desarrollador<a></li>
                @endif
            </ul>
        </nav>
    </header>

    @yield('content')

    <footer id="footer">
        <img src="{{asset('img/favicon.png')}}" alt="Logo Javas Web">
        <h2>JAVAS WEB</h2>
        <span>© JAVAS WEB 2021</span>
    </footer>
    @if (isset($scripts))
        @foreach ($scripts as $src)
            <script src="{{$src}}"></script>
        @endforeach
    @endif
</body>
</html>
