console.log("app.js loaded")
//expands or collapses search bar
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
//submits wikisearch queriy
document.getElementById("searchbar").onsubmit = function(e) {
    e.preventDefault();
    console.log("form submitted");
    console.log(this.lastElementChild.value);
    //example using opensearch query
    url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=bacon&format=jsonp&callback=?"
    // debugger;
    $.ajax({
    url: url,
    type: 'GET',
    cache: false,
    // data: data,
  }).done(function(server_data){
      console.log(server_data);
  })
}