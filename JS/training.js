// Obtén los elementos que deseas llenar con los datos del usuario
var nameElement = document.querySelector("#name");
var jobElement = document.querySelector("#job");

// Obtén el formulario de la encuesta y el modal de retroalimentación
var surveyForm = document.querySelector("#survey-form");
var feedbackModal = document.querySelector("#feedback-modal");
var feedbackMessage = document.querySelector("#feedback-modal .feedback-msg");

// Recupera los valores del almacenamiento local y los asigna a los elementos
nameElement.textContent = localStorage.getItem("name");
jobElement.textContent = localStorage.getItem("job");

// Obtén las imágenes de los temas y los temas
var topicImages = document.querySelectorAll(".topic img");
var topics = document.querySelectorAll(".topic p");

var topicsInfo = [
  {
    id: "topic-one",
    desc: "Este programa ofrece una capacitación integral para aquellos interesados en desempeñarse como auditores internos en el ámbito del Sistema de Gestión de la Energía, conforme a los requisitos establecidos en la Norma Técnica Colombiana (NTC) ISO 50001:2019. Los participantes adquirirán los conocimientos y habilidades necesarios para evaluar la eficacia y la mejora continua de este sistema, contribuyendo así al uso eficiente de los recursos energéticos y al cumplimiento de los objetivos organizacionales relacionados con la energía.",
    survey: {
      question:
        "¿Cuál es el objetivo principal del Programa de Formación de Auditores Internos en el Sistema de Gestión de la Energía NTC ISO 50001:2019?",
      options: [
        "Desarrollar habilidades de liderazgo.",
        "Capacitar en la evaluación de la eficacia del sistema energético.",
        "Ofrecer técnicas de marketing para empresas energéticas.",
      ],
      answer: {
        id: "1",
        text: "Capacitar en la evaluación de la eficacia del sistema energético.",
      },
    },
  },
  {
    id: "topic-two",
    desc: "Este curso proporciona los conocimientos y herramientas necesarias para gestionar efectivamente los cambios en una organización y tomar decisiones informadas en medio de estos. Se enfoca en desarrollar habilidades para identificar, evaluar y responder adecuadamente a los cambios, permitiendo así una adaptación ágil y estratégica a las transformaciones del entorno empresarial.",
    survey: {
      question:
        "¿Cuál es el enfoque principal del Curso Gestión de los Cambios para la Toma de Decisiones en la Organización?",
      options: [
        "Mejorar la eficiencia operativa.",
        "Desarrollar habilidades de comunicación.",
        "Facilitar la toma de decisiones en un entorno de cambios organizacionales.",
      ],
      answer: {
        id: "2",
        text: "Facilitar la toma de decisiones en un entorno de cambios organizacionales.",
      },
    },
  },
];

// Agrega controladores de eventos a los temas
topics.forEach(function (topic) {
  topic.addEventListener("click", function () {
    // Muestra el título del entrenamiento y su descripción
    var trainingTitle = document.querySelector("#training-title");
    var trainingDescription = document.querySelector("#training-description");
    trainingTitle.textContent = this.textContent;

    // Busca la descripción en el array topics por el id del topic
    var topicId = this.id;
    var topic = topicsInfo.find(function (t) {
      return t.id === topicId;
    });

    // Verifica si se encontró el topic y muestra la descripción correspondiente
    if (topic) {
      trainingDescription.textContent = topic.desc;

      // Reemplaza las opciones de la encuesta con las opciones del topic
      var surveyQuestion = document.querySelector("#question");
      surveyQuestion.textContent = topic.survey.question;
      var surveyOptions = document.querySelectorAll("#survey-form label");
      surveyOptions.forEach(function (option, index) {
        option.textContent = topic.survey.options[index];
      });

      surveyForm.style.display = "block";

      // Agrega un controlador de eventos al formulario de la encuesta
      surveyForm.addEventListener("submit", function (event) {
        // Evita la acción de envío predeterminada
        event.preventDefault();

        // Verifica si la respuesta es correcta
        var selectedOption = this.querySelector("input:checked").value;
        var correctAnswer = topic.survey.answer;

        // Muestra un mensaje en el modal de retroalimentación
        if (selectedOption === correctAnswer.id) {
          feedbackMessage.textContent =
            "¡Felicitaciones! Tu respuesta es correcta.";
        } else {
          feedbackMessage.innerHTML =
            `Lo siento, tu respuesta es incorrecta. La respuesta correcta es: <strong>${correctAnswer.text}</strong>`;
        }

        // Muestra el modal de retroalimentación
        feedbackModal.style.display = "block";
      });
    }
  });
});

// Agrega funcionalidad al botón cerrar del modal
var closeButton = document.querySelector("#feedback-modal .close");
closeButton.addEventListener("click", function() {
  feedbackModal.style.display = "none";
  window.location.href = "https://docs.google.com/presentation/d/1yBCqZJb6T1DAtfwrw7YgL6RUYL_jH1-72BXX0MQ1kSg/preview?slide=id.g20da5686f28_0_42"
});
