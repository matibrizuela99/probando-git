document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario para realizar validación

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const mensaje = document.getElementById('mensaje');

    // Validación básica
    if (!nombre || !email || !password || !confirmPassword) {
        mensaje.textContent = "Por favor, completa todos los campos.";
        return;
    }

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
        mensaje.textContent = "Las contraseñas no coinciden.";
        return;
    }

    mensaje.textContent = "¡Registro exitoso!";
    mensaje.style.color = "green";

    // Simular envío de formulario
    setTimeout(() => {
        mensaje.textContent = "";
        document.getElementById('registroForm').reset();
    }, 2000);
});
