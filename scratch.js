<script>
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        // Construir el mensaje de WhatsApp
        const mensajeWhatsApp = `Hola, soy ${nombre} (${email}). ${mensaje}`;
        const numeroWhatsApp = '+573058553638'; // Cambia este número por el tuyo
        const enlaceWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensajeWhatsApp)}`;

        // Redirigir al enlace de WhatsApp
        window.open(enlaceWhatsApp, '_blank');
    });
</script>
