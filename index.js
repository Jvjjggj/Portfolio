let saveE1 = document.getElementById("saveBtn")
let copyE1 = document.getElementById("copyBtn")
let inputTextArea = document.getElementById("inputTextArea")
let copyTextArea = document.getElementById("copyTextArea")
saveE1.onclick = function() {
    let value = inputTextArea.value
    localStorage.setItem("inputValue", value)
}

copyE1.onclick = function() {
    let getValue = localStorage.getItem("inputValue")
    let getValuee = inputTextArea.value
    if (getValuee === "") {
        copyTextArea.value = "Input is empty"
        alert("Input is Empty")
        return
    }
    copyTextArea.value = getValuee
}

function persist() {
    let getValue = localStorage.getItem("inputValue")
    inputTextArea.value = getValue
}


persist()