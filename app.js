$('document').ready(function() {
 searchResult = "";
 data = {srsearch: "random"};
  $("#random-wiki").click(function(e){
    $.ajax({
      url: "https://stark-dawn-64113.herokuapp.com/wiki/index",
      type: 'get',
      data: data
    }).done(function(server_data){
      console.log(server_data.query);
      searchResult = server_data.query.random
      // debugger;
      $("#search-results").empty()
      // debugger;
      if (searchResult.length > 0) {
        for (var i = 0; i < searchResult.length; i++) {
          var resultHTML = `
          <div class='result'>
            <a href="https://en.wikipedia.org/wiki/${searchResult[i].title}">
              <h2>${searchResult[i].title}</h2>
            </a>
          </div>`
          $("#search-results").append(resultHTML)
        }   
      }else {
        var resultHTML = `
        <div class='result'>
          <h2 style="color: red; text-align: center">No Results Found</h2>
        </div>`
        $("#search-results").append(resultHTML)
      }
      
    }).fail(function(error){
      console.log(error);
    });
  });
  
  $("#searchbar").on( "submit", function(e) {
    e.preventDefault();
    console.log("works");
    // debugger;
    var data = $("#searchbar").serialize();
    var url = `https://stark-dawn-64113.herokuapp.com/wiki/index`;
    $.ajax({
      url: url,
      type: 'get',
      data: data
    }).done(function(server_data){
      console.log(server_data.query.search);
      searchResult = server_data.query.search
      $("#search-results").empty()
      if (searchResult.length > 0) {
        for (var i = 0; i < searchResult.length; i++) {
          var resultHTML = `
          <div class='result'>
            <a href="https://en.wikipedia.org/wiki/${searchResult[i].title}">
              <h2>${searchResult[i].title}</h2>
            </a>
            ${searchResult[i].snippet}
          </div>`
          $("#search-results").append(resultHTML)
        }   
      }else {
        var resultHTML = `
        <div class='result'>
          <h2 style="color: red; text-align: center">No Results Found</h2>
        </div>`
        $("#search-results").append(resultHTML)
      }
      
    }).fail(function(error){
      console.log(error);
    });
  });
});
