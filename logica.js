document.getElementById("loginForm").addEventListener("submit", function(evento) {

  evento.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;

  if (usuario === "usuario" && contrasena === "1234") {
    window.location.href = "Dashboard.html";
  } else {
    document.getElementById("mensaje").textContent =
      "Usuario o contraseña incorrectos";
  }

});