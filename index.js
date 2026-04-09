// dom elements and queryselector All

const display = document.getElementById("display");
const buttons  = document.querySelectorAll(".btn");

// create storage for user input
let inputSave = ""

buttons.forEach(button=> {
  button.addEventListener("click", function () {
    const value = button.getAttribute("data-value") // trigger created
// Clear button
    if(value === "C") {
      inputSave = ""
      display.value = ""
    }

    // Operator Delete saved and rendered user input values
    else if(value === "X") {
      inputSave = inputSave.slice(0, -1)
      display.value = inputSave
    }
  // Operator equals
    else if(value === "=") {
      try {
        inputSave = eval(inputSave).toString()
        display.value = inputSave
      } catch {
        display.value = "error"
        input.save = ""
      }

    }

    // Operator percentage
    else if(value=== "%") {
      inputSave = (parseFloat(inputSave) / 100).toString()
      display.value = inputSave
    }
    // Normal  input  both data values and operator data values 
    else {
      inputSave += value
      display.value = inputSave
    }

  })
})
