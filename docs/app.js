// INPUTS
const tempInput = document.getElementById("temperature")
const fromUnit = document.getElementById("from-unit")
const toUnit = document.getElementById("to-unit")
// OUTPUTS
const resTemp = document.getElementById("res-temp")
// BUTTON
const btn = document.getElementById("btn")
const swapBtn = document.getElementById("swap-unit-btn")
// WARNING TEXTS
const tempWarn = document.getElementById("temp-warning")
const fromUnitWarn = document.getElementById("from-unit-warning")
const toUnitWarn = document.getElementById("to-unit-warning")

let res

// RESULT function
function displayResult(temp, unit) {
    resTemp.classList.remove("text-4xl", "opacity-65", "pt-1")
    resTemp.classList.add("text-[53px]", "pt-1", "leading-12")
    if (unit == "Fahrenheit") {
        resTemp.innerHTML = `${temp}&deg;F`
    } else if (unit == "Celsius") {
        resTemp.innerHTML = `${temp}&deg;C`
    } else {
        resTemp.innerHTML = `${temp}K`
    }
}

// HANDLE EMPTY INPUTS
function handleEmptyInputs() {
    if (tempInput.value == "") {
        tempWarn.classList.remove("hidden")
        tempInput.classList.remove("border-slate-800")
        tempInput.classList.add("border-red")
    }
    if (fromUnit.value == "") {
        fromUnitWarn.classList.remove("hidden")
        fromUnit.classList.remove("border-slate-800")
        fromUnit.classList.add("border-red")
    }
    if (toUnit.value == "") {
        toUnitWarn.classList.remove("hidden")
        toUnit.classList.remove("border-slate-800")
        toUnit.classList.add("border-red")
    }
}

// RESTORE ORIGINAL UI WHEN INPUT IS GIVEN
tempInput.addEventListener("input", () => {
    tempWarn.classList.add("hidden")
    tempInput.classList.remove("border-red")
    tempInput.classList.add("border-slate-800")
})

fromUnit.addEventListener("change", () => {
    fromUnitWarn.classList.add("hidden")
    fromUnit.classList.remove("border-red")
    fromUnit.classList.add("border-slate-800")
})

toUnit.addEventListener("change", () => {
    toUnitWarn.classList.add("hidden")
    toUnit.classList.remove("border-red")
    toUnit.classList.add("border-slate-800")
})


// SWAP UNITS
swapBtn.addEventListener('click', () => {
    if (fromUnit.value != "" && toUnit.value != "") {
        let temp = fromUnit.value;
        fromUnit.value = toUnit.value;
        toUnit.value = temp;
    }
})

// CALCULATE ON BUTTON PRESS
btn.addEventListener("click", () => {
    handleEmptyInputs()

    if (tempInput.value != "" && fromUnit.value != "" && toUnit.value != "") {
        const tempInputVal = Number(tempInput.value)
        // calculate here
        // for CELSIUS
        if (fromUnit.value == "Celsius") {
            if (toUnit.value == "Fahrenheit") {
                res = tempInputVal * 1.8 + 32
            } else if (toUnit.value == "Kelvin") {
                res = tempInputVal + 273.15
            } else {
                res = tempInputVal
            }
        }
        // for FAHRENHEIT
        else if (fromUnit.value == "Fahrenheit") {
            if (toUnit.value == "Celsius") {
                res = (tempInputVal - 32) * (5 / 9).toFixed(2)
            } else if (toUnit.value == "Kelvin") {
                res = (tempInputVal - 32) * (5 / 9).toFixed(2) + 273.15
            } else {
                res = tempInputVal
            }
        }
        // for KELVIN
        else {
            if (toUnit.value == "Celsius") {
                res = tempInputVal - 273.15
            } else if (toUnit.value == "Fahrenheit") {
                res = (tempInputVal - 273.15) * 1.8 + 32
            } else {
                res = tempInputVal
            }
        }
        // call DISPLAY function
        !Number.isInteger(res)
            ? displayResult(res.toFixed(2), toUnit.value)
            : displayResult(res, toUnit.value)
    }
})
