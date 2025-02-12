const nameField = document.getElementById("name")
const nameBtn = document.getElementById("nameBtn")

nameBtn.addEventListener("click", logName)

function logName() {
    console.log(nameField.value)
}