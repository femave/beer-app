$('#buttonBeer').on('click', function (e) {
  e.preventDefault()
  var inputBeer = $('#inputBeer').val()

  $.ajax({
    url: 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + inputBeer

  })

  .then(function (beerData) {
  	var aOptionsBeers = beerData.map(function (beer) {
  		return '<option value="' + beer.id + '">' + beer.name + '</option>'
  	})
  	$('#list-beers').removeClass('hidden')
  	htmlSelect = aOptionsBeers.join('')
  	$('#list-beers').html(htmlSelect)
  	})

  	$('#list-beers').on('change', function (e) {
  		var idBeer = $(this).val()

  		$.ajax({
  			url: 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + idBeer
  		})
  		.then(function (beerData) {
  			var beerImage
  			var beerName
  			var beerDescription

  			beerData.hasOwnProperty('labels') ? beerImage = beerData.labels.medium : beerImage = 'http://blog.logotipogratis.com/uploads/3/4/5/5/3455247/jarra-cerveza.png'
  			beerData.hasOwnProperty('name') ? beerName = beerData.name : beerName = idBeer
  			beerData.hasOwnProperty('description') ? beerDescription = beerData.description : beerDescription = '<p>This beer haven\'t description yet sorry </p>'

  			var innerHtml = ''
  			var innerHtmlImg = ''

  			innerHtml += '<h3>' + beerName + '</h3>'
  			innerHtml += '<p>' + beerDescription + '</p>'
  			innerHtmlImg += '<img class ="img-responsive" src="' + beerImage + '"/>'

  			$('#beerTitle').html(innerHtml)
  			$('#beerImg').removeClass('hidden')
  			$('#beerImg').html(innerHtmlImg)
  		})
  	})
})
