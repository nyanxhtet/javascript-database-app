var pokemonRepository = (function () {
  var repository =  [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  var $modalContainer = document.querySelector('#modal-container');

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  function showModal(){
    $modalContainer.classList.add('visible');
  }

  function hideModal(){
    $modalContainer.classList.remove('visible');
    $modalContainer.innerHTML = '';
  }

  function showDetails(pokemon){
    loadDetails(pokemon).then(function () {
      showModal();

      var modal = document.createElement('div');
      modal.classList.add('modal');

      var name = document.createElement('h1');
      name.innerText = 'Name: ' + pokemon.name;

      var height = document.createElement('h2');
      height.innerText = 'Height: ' + pokemon.height;

      var closeButton = document.createElement('button');
      closeButton.innerText= 'close';
      closeButton.classList.add('close-modal');
      closeButton.addEventListener('click', function (){
        hideModal();
      });

      var image = document.createElement('IMG');
      image.setAttribute('src', pokemon.imageUrl);
      image.setAttribute('width', '200px');
      image.setAttribute('height', 'auto');
      image.setAttribute('alt', 'picture of pokemon');

      modal.appendChild(name);
      modal.appendChild(height);
      modal.appendChild(image);
      modal.appendChild(closeButton);
      $modalContainer.appendChild(modal);

    });

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


  //this closes the modal is 'escape' key is pressed AND if modal has visible class.

  window.addEventListener('keydown', function (e)  {
    if (e.key === 'Escape' && $modalContainer.classList.contains('visible')){
      hideModal();
    }
  });

  //this closes the modal when anywhere in the modal-container is pressed (background, outside of modal)

  $modalContainer.addEventListener('click', function (e) {
    var target= e.target;
    if (target === $modalContainer) {
      hideModal();
    };
  });


  return{
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    hideModal: hideModal,
  };

})();


pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
