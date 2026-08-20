const checkButton = document.querySelector("#comprobar");
const feedback = document.querySelector("#retroalimentacion");

checkButton?.addEventListener("click", () => {
  const selected = document.querySelector('input[name="respuesta"]:checked');

  if (!selected) {
    feedback.className = "feedback warning";
    feedback.textContent = "Selecciona una respuesta antes de continuar.";
    return;
  }

  const isCorrect = selected.value === "a";
  feedback.className = `feedback ${isCorrect ? "success" : "warning"}`;
  feedback.textContent = isCorrect
    ? "Correcto. Explica aquí el razonamiento que confirma la respuesta."
    : "Revisa el dato clave del caso. Añade aquí una explicación que oriente sin revelar demasiado pronto.";

  window.educationalStorage?.save("plantilla", { completed: true, correct: isCorrect });
});
