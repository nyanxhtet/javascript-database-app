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

  return{
    add: add,
    getAll: getAll
  };

})();

function addListItem() {

  var newPokemon = document.createElement('li');
  newPokemon.classList.add('list-item');

  var newButton = document.createElement('button');
  newButton.classList.add('list-button');

  newPokemon.appendChild(newButton);

  var $pokedex = document.querySelector('.pokedex');
  $pokedex.appendChild(newPokemon);

};


pokemonRepository.getAll().forEach(function(pokemon){

  addListItem();
  var $button = document.getElementsByClassName('list-button');
  $button.innerText = pokemon.name;

  if (pokemon.height >1.0){
    document.write("-Wow, that's big!");
  }
  document.write("</p><br>");

});
