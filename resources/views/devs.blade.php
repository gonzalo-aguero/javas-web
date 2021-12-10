@section('url', 'https://javasweb.com/devs')
@section('title', 'Desarrolladores')
@section('description', 'Somos JavasWeb, y te ofrecemos la posibilidad de conseguir clientes sin siquiera mover un dedo!')
@section('keywords', 'Desarrollo web,diseño web,agencia desarrollo web,web developer,software,desarrollo de software,Javas web,javas,javas web,developers,desarrolladores,clientes para desarrolladores,freelancer,freelancers')
@extends('layouts.defaultDOM')
@section('content')
    <section id="coverPage" style="
            background: linear-gradient(270deg, rgba(14, 70, 136, 0.6) 0%, rgba(254, 165, 1, 0.6) 100%),
            url({{asset('img/design/coverpage-devs.jpg')}});
            background-size: cover;
            background-position: center center;
        ">
        <div id="particles-js"></div>
        <div class="text" id="coverPageText">
            <img class="animate__animated" src="{{asset('img/whiteFavicon.png')}}" alt="Logo Javas Web">
            <h1 class="animate__animated">[ Desarrolladores ]</h1>
            <p class="animate__animated">
                Sos desarrollador freelancer? Entonces puede que te interese nuestra propuesta.
            </p>
            <span class="animate__animated" id="startButton">SABER MÁS</span>
        </div>
    </section>
    <section class="textSection i0">
        <h1 id="developers">Desarrolladores</h1>
        <h2>Servicio para desarrolladores</h2>
        <p>Javas Web ofrece a los desarrolladores la posibilidad de trabajar con nosotros.</p>
    </section>
    <section class="textSection i1">
        <h2>¿En qué consiste?</h2>
        <p>El servicio consiste en el suministro de clientes para el desarrollador a cambio de
            una pequeña comisión del 5%.</p>
        <p>El desarrollador podrá crear un presupuesto con el monto deseado y trendrá trato
            directo con el cliente.</p>
    </section>
    <section class="textSection i3">
        <h2>Si estás interesado:</h2>
        <p>No dudes en contactarnos, te contaremos acerca de nuestra propuesta bien a detalle
            para que comprendas nuestro flujo de trabajo.</p>
        <a href="{{route('home')}}/#_contact" id="contactButton">CONTACTAR</a>
    </section>
@endsection
