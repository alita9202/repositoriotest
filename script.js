function mostrarMensaje() {
  alert("¡Bienvenido al proyecto de Taller de Aplicaciones en Internet!");
}

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje");

  if (nombre === "" || correo === "") {
    mensaje.textContent = "Por favor, completa todos los campos.";
    mensaje.style.color = "#dc2626";
    return;
  }

  if (!correo.includes("@") || !correo.includes(".")) {
    mensaje.textContent = "Ingresa un correo válido.";
    mensaje.style.color = "#dc2626";
    return;
  }

  mensaje.textContent = "Formulario enviado correctamente.";
  mensaje.style.color = "#16a34a";

  document.getElementById("formulario").reset();
});