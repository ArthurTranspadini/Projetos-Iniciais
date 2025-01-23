const inputField = document.getElementById("inNumber");
const buttons = document.querySelectorAll("button");
const clickSound = document.getElementById("clickSound");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;
        clickSound.volume = 0.01;
        clickSound.currentTime = 0;
            clickSound.play();

        if (button.id === "btnIClear") {
            inputField.value = inputField.value.slice(0, -1);
        } else if (button.id === "btnIClear1") {
            inputField.value = '';
        } else if (button.id === "btnO=") {
            try {
                    let expression = inputField.value.replace(/(\d+(?:\.\d+)?)%\s*(\d+(?:\.\d+)?)/g, (match, p1, p2) => {
                        return (parseFloat(p1) / 100) * parseFloat(p2);
                    });
                    inputField.value = eval(expression);
            } catch (error) {
                inputField.value = "Erro";
                setTimeout(() => inputField.value = "", 1000); 
            };
        } else if (value) {
            inputField.value += value;
        }
    });
});
