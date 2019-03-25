var pokemonRepository = (function () {
  var repository =  [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  function showDetails(pokemon){
    loadDetails(pokemon).then(function () {
      console.log(pokemon);   });
  }

  function addListItem(item) {
    var newPokemon = document.createElement('li');
    newPokemon.classList.add('list-item');

    var newButton = document.createElement('button');
    newButton.classList.add('list-button');

    newPokemon.appendChild(newButton);
    newButton.innerText= item.name;

    var $pokedex = document.querySelector('.pokedex');
    $pokedex.appendChild(newPokemon);


    newButton.addEventListener('click', function(e){
      pokemonRepository.showDetails(item);
    });


  };

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  }

  return{
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };

})();


pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
