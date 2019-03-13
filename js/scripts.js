var pokemonRepository = (function () {
  var repository =  [

    {name: 'bulbasaur',
    height: .7,
    type: ['grass','poison']},

    {name: 'charmander',
    height: .6,
    type: ['fire']},

    {name: 'blastoise',
    height: 1.6,
    type: ['water']},
  ];

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
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
  };

  return{
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };

})();



pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});
