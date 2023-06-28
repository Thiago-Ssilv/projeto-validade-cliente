const form = document.getElementById("form");
const username = document.getElementById("productname");
const email = document.getElementById("validity");
const password = document.getElementById("unit");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const productnameValue = productname.value;
  const validityValue = validity.value;
  const unitValue = unit.value;
  

  if (productnameValue === "") {
    setErrorFor(productname, "O nome do produto é obrigatório.");
  } else {
    setSuccessFor(productname);
  }

  if (validityValue === "") {
    setErrorFor(validity, "A validade é obrigatório.");
  }  else {
    setSuccessFor(validity);
  }

  if (unitValue === "") {
    setErrorFor(unit, "A unidade é obrigatória.");
  }else {
    setSuccessFor(unit);
  }



  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small =formControl.querySelector ("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

