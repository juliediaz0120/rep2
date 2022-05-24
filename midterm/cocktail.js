$(function() {
  $('#liquor-search').click(function() {
    //default request is get
    /// default type is json
    //so we usually don't actually need to set these

    let searchTerm = $('#searchTerm').val()
    $('#fail').text('')

    // make sure the searchTerm isn't empty
    if (searchTerm !== '') {
      $.getJSON(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${searchTerm}`, function(data) {
        //jQuery automatically parses the JSON for us
        if (data.ingredients == null) {
              $('#liquor-description').text('')
              $('#fail').text("We couldn't find anything like that.")
        } else {
              $('#liquor-description').text(data.ingredients[0].strDescription)
        }
      })

      $.getJSON(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTerm}`, function (data) {
        //     if (data.drinks == null) {
        //       $('#fail').text("We couldn't find anything like that.")
        // } else {
              for(let i=0; i<5; i++) {
                let drink = data.drinks[i]
                $('#liquor-description').append('<li>' + drink.strDrink + '<br> <img src="' + drink.strDrinkThumb + 
                                                '" alt="cocktail" style="width:100px;height:100px;"> </li>' )
              }
       // }
      })
    }
  }) 
})




