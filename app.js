console.log("app.js loaded")
document.getElementById("search-icon").onclick = function(e) {
    console.log("click");
    if (this.classList.contains("collapsed")) {
        console.log("it is collapsed")
        this.classList.remove("collapsed")
    }
    else {
        console.log("it is not collapsed")
        this.classList.add("collapsed")
    }
}