var repository = [

  {name: 'bulbasaur',
  height: .7,
  type: 'grass'},

  {name: 'charmander',
  height: .6,
  type: 'fire'},

  {name: 'blastoise',
  height: 1.6,
  type: 'water'},
];


for (var i = 0; i <= 2; i ++){
  document.write(repository[i].name+ " (Height:"+ repository[i].height+ ")  ");
}

for (var i = 0; i <= 2; i ++){
  if (repository[i].height > 1){
    document.write(repository[i].name+ " (Height:"+ repository[i].height+ ") -Wow, that's big!");
  }
}
