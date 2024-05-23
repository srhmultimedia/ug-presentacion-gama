// Obtén todos los campos de formulario y etiquetas
var form = document.querySelector("form");
var fields = document.querySelectorAll("input, textarea");
var labels = document.querySelectorAll("label");
var submitButton = document.querySelector('button[type="submit"]');
var nameField = document.querySelector('input[name="name"]');
var jobField = document.querySelector('input[name="job"]');
var jobLabel = document.querySelector('label[for="job"]');

// Oculta todos los campos y etiquetas excepto el primero
submitButton.style.display = "none";
for (let i = 1; i < fields.length; i++) {
  fields[i].style.display = "none";
  labels[i].style.display = "none";
}

// Agrega controladores de eventos a los campos de formulario
for (let i = 0; i < fields.length; i++) {
  console.log("🚀 ~ fields[i].addEventListener ~ fields[i]:", fields[i]);
  fields[i].addEventListener("change", function (event) {
    // Oculta el campo y la etiqueta actuales
    this.style.display = "none";
    var currentLabel = document.querySelector('label[for="' + this.id + '"]');
    currentLabel.style.display = "none";

    // Muestra el siguiente campo y etiqueta
    console.log("🚀 ~ fields[i].addEventListener ~ i+1:", i + 1);
    var nextField = fields[i + 1];
    console.log("🚀 ~ fields[i].addEventListener ~ nextField:", nextField);
    var nextLabel = labels[i + 1];
    console.log("🚀 ~ fields[i].addEventListener ~ nextLabel:", nextLabel);
    if (nextField) {
      nextField.style.display = "block";
      nextLabel.style.display = "block";

      // Si el siguiente campo es el campo de trabajo, cambia el texto de su etiqueta
      if (nextField === jobField) {
        jobLabel.textContent = "¿Cual es tu cargo " + nameField.value + "?";
      }
    } else {
      // Si no hay más campos, muestra el botón de envío
      submitButton.style.display = "block";
    }
  });
}

// Agrega un controlador de eventos al campo de cargo
jobField.addEventListener("focus", function () {
  // Cambia el texto de la etiqueta del campo de cargo
  jobLabel.textContent = "¿Cual es tu cargo " + nameField.value + "?";
});

// Agrega un controlador de eventos al formulario
form.addEventListener("submit", function (event) {
  // Evita la acción de envío predeterminada
  event.preventDefault();

  // Guarda los valores del formulario en el almacenamiento local
  var formData = new FormData(form);
  for (var pair of formData.entries()) {
    localStorage.setItem(pair[0], pair[1]);
  }

  // Redirige a la página de entrenamiento
  window.location.href = "training.html";
});
