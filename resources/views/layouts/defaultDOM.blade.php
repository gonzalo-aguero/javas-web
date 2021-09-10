<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">


    <meta name="keywords" content="como tener una pagina,como hacer una pagina,empresas,negocio,empresa,servicio,web,pagina,sitio web,desarrollo web, gmadesarrolloweb.ml, gmadesarrolloweb,GMA,gma,ecommerce,commerce,e-commerce,tienda,tienda online,comercio electronico,gma desarrolloweb,gma desarrollo web,parana,argentina,entre rios,Desarrollo web argentina,Desarrollo web parana,paraná"/>
    <meta name="description" content="Le brindamos a tu empresa la posibilidad de estar presente en internet y poder vender por este poderoso medio. || ¡Consigue tu página web! || ¡Obtén tu tienda online! || ¡Obtén tu e-commerce!"/>
    <meta name="author" content="gonzaloaguerodev@javasweb" />
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
                <li><a href="{{null}}">sa<a></li>
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
