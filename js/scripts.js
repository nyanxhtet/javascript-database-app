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


pokemonRepository.getAll().forEach(function(pokemon){
  document.write("<p>");
  document.write(pokemon.name + " (Height: "+ pokemon.height+ ")");
  if (pokemon.height >1.0){
    document.write("-Wow, that's big!");
  }
  document.write("</p><br>");

});
