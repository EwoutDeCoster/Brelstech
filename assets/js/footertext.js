
function init() {
    let text = document.getElementById("footertxt")
    const s = new Date()
    let year = s.getFullYear()
    text.innerHTML = `© Brel's Tech ${year}. All Rights Reserved.`
}

window.onload = init;