  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const textInputs = document.querySelectorAll('input[type="text"]');
    const signatureList = document.getElementById("signatureList");

    function updateSignature() {
      let signatureHTML = '';

      textInputs.forEach((textInput) => {
        if (
          textInput.value.trim() !== "" &&
          document.getElementById(textInput.id.replace("Input", "Checkbox")).checked
        ) {
          signatureHTML += `<li>${textInput.value.trim()}</li>`;
        }
      });

      signatureList.innerHTML = signatureHTML;
    }

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", updateSignature);
    });

    textInputs.forEach((textInput) => {
      textInput.addEventListener("input", updateSignature);
    });

    // Initial update
    updateSignature();
