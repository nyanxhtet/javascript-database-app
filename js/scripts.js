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


for (var i = 0; i < repository.length; i ++){
  document.write("<p>");
  document.write(repository[i].name+ " (Height:"+ repository[i].height+ ")  ");
  document.write("</p><br>");

  if (repository[i].height > 1.0){
    document.write("<p>");
    document.write(repository[i].name+ " (Height:"+ repository[i].height+ ") -Wow, that's big!");
    document.write("</p><br>");
  }

}
