document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById('signup-form');
    const cancelBtn = document.getElementById('cancel-btn');
    
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
      
      const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passwordPattern.test(password)) {
        alert("La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra y un número.");
        return;
      }
    
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
      }
      
      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
      }
      
      alert("Nombre: " + name + "\nCorreo electrónico: " + email + "\nContraseña: " + password);
      
    });
    
    cancelBtn.addEventListener('click', function() {
      window.location.href = "index.html";
    });
  });
  