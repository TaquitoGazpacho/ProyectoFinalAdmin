
<body style="border-radius:10px; max-width: 500px; text-align: center; border: 1px solid #92BCE0; margin:auto">
    <h1 style="background: #3C8DBC; color: white; border-top: 2px solid #3071A9; border-bottom: 2px solid #3071A9">Lock<span style="color: #F96F00">Box</span></h1>
    <h3 style="color: black">Hola, {{ $user->name }}, tu pedido se ha realizado correctamente</h3>
    <p style="color: black">Para hacer un seguimiento de tu pedido, puedes entrar en el apartado "pedidos" de tu cuenta en lockbox.</p>
    <a style="color: white;line-height: 50px;width: 300px; height: 50px; background: #F96F00; border: 1px solid #bc5600; text-decoration: none;display: inline-block;" href="{{ route('home.pedidos') }}">Tus pedidos</a>
    <p style="color: black">Gracias por confiar en nosotros.</p>
</body>
<br/>
