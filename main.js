// Alerta de bienvenida
window.onload = function() {
  alert("¡Bienvenido al proyecto de Sistemas Operativos y Seguridad!");
};

// Mostrar/Ocultar tabla
function toggleTabla() {
  const tabla = document.getElementById("tabla-busquedas");
  if (tabla.style.display === "none") {
    tabla.style.display = "table";
  } else {
    tabla.style.display = "none";
  }
}

// Cambiar color de fondo
function cambiarFondo() {
  const colores = ["#f8f9fa", "#e3f2fd", "#fff3cd", "#d1e7dd"];
  document.body.style.backgroundColor = 
    colores[Math.floor(Math.random() * colores.length)];
}
