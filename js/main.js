$('#buttonBeer').on('click', function (e) {
  e.preventDefault()
  var inputBeer = $('#inputBeer').val()
  console.log(inputBeer)

  $.ajax({
    url: 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + inputBeer

  })

  .then(function (beerData) {
  	var aOptionsBeers = beerData.map(function (beer) {
  		return '<option value="' + beer.id + '">' + beer.name + '</option>'
  	})
  	htmlSelect = aOptionsBeers.join('')
  	$('#list-beers').html(htmlSelect)
  	})

  	$('#list-beers').on('change', function (e) {
  		var idBeer = $(this).val()

  		$.ajax({
  			url: 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + idBeer
  		})
  		.then(function (beerData) {
  			var beerImage = beerData.labels.medium
  			var beerName = beerData.name
  			var beerDescription = beerData.description

  			var innerHtml = ''

  			innerHtml += '<h3>' + beerName + '</h3>'
  			innerHtml += '<p>' + beerDescription + '</p>'
  			innerHtml += '<img src="' + beerImage + '"/>'
  			$('#beer').html(innerHtml)
  		})
  	})
})
