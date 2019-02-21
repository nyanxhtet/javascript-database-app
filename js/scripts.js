/* var repository = [

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




for (var i = 0; i < repository.length; i ++){

  document.write("<p>");
  document.write(repository[i].name+ " (Height: "+ repository[i].height+ ") ")

  if (repository[i].height > 1.0 ){
    document.write("-Wow, that's big!");
  }

  document.write("</p><br>");

}

*/

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
