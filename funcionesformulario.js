document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const cancelBtn = document.getElementById('cancel-btn');
  
    loginBtn.addEventListener('click', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      console.log("Usuario:", username);
      console.log("Contraseña:", password);
      // Aquí podrías enviar los datos a un servidor para autenticación
    });
  
    signupBtn.addEventListener('click', function(event) {
      event.preventDefault();
      // Aquí podrías dirigir al usuario al formulario de registro
      console.log("Redirigir al formulario de registro");
    });
  
    cancelBtn.addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = "index.html";
    });
  });
  