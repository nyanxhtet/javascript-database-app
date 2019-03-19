var pokemonRepository = (function () {
  var repository =  [

    {name: 'Bulbasaur',
    height: .7,
    type: ['grass','poison']},

    {name: 'Charmander',
    height: .6,
    type: ['fire']},

    {name: 'Blastoise',
    height: 1.6,
    type: ['water']},
  ];

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  function showDetails(pokemon){
    console.log(pokemon);
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


  return{
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
  };

})();

pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});
