document.addEventListener("DOMContentLoaded", function () {
    const buscador = document.getElementById("buscador");
    const productos = document.querySelectorAll(".producto");
  
    buscador.addEventListener("input", function () {
      const termino = buscador.value.toLowerCase();
  
      productos.forEach((producto) => {
        const nombre = producto.dataset.nombre.toLowerCase();
        const visible = nombre.includes(termino);
        producto.style.display = visible ? "block" : "none";
      });
    });
  });

// Escuchar cambios de sesión
auth.onAuthStateChanged(user => {
    const info = document.getElementById("usuario-info");
    if (user) {
      info.textContent = "Hola, " + user.email;
    } else {
      info.textContent = "";
    }
  });
  auth.onAuthStateChanged(user => {
    const info = document.getElementById("usuario-info");
    const logoutBtn = document.getElementById("logout-btn");
  
    if (user) {
      info.textContent = "Hola, " + user.email;
      logoutBtn.style.display = "inline";
      // Opcional: ocultar formularios de login/registro si ya inició sesión
      document.getElementById("email").style.display = "none";
      document.getElementById("password").style.display = "none";
      document.querySelector("button[onclick='registrar()']").style.display = "none";
      document.getElementById("email-login").style.display = "none";
      document.getElementById("password-login").style.display = "none";
      document.querySelector("button[onclick='login()']").style.display = "none";
    } else {
      info.textContent = "";
      logoutBtn.style.display = "none";
      // Mostrar formularios si no hay usuario
      document.getElementById("email").style.display = "inline";
      document.getElementById("password").style.display = "inline";
      document.querySelector("button[onclick='registrar()']").style.display = "inline";
      document.getElementById("email-login").style.display = "inline";
      document.getElementById("password-login").style.display = "inline";
      document.querySelector("button[onclick='login()']").style.display = "inline";
    }
  });
  document.getElementById("logout-btn").addEventListener("click", () => {
    auth.signOut().then(() => {
      alert("Sesión cerrada");
    });
  });
      