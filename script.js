$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myDIV li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});



var elPokemonsList = document.querySelector(".js-pokemons__list");
var elPokemonstemplate = document.querySelector(".js-pokemon__template").content;

var createPokemonsCard = (object) =>  {
  var elPokemonsCard =  elPokemonstemplate.cloneNode(true);

  elPokemonsCard.querySelector('.books_library').dataset.id = object.id;
  elPokemonsCard.querySelector('.books_img').src = object.img;
  elPokemonsCard.querySelector('.books_name').textContent = object.name;
  elPokemonsCard.querySelector('.books_type').textContent = object.type;
 

 return elPokemonsCard;
};

var renderPokemons = (array) => {
   elPokemonsList.innerHTML = '';

   array.forEach(pokemon => {
       elPokemonsList.appendChild(createPokemonsCard(pokemon))
   });
};

renderPokemons(books);

elPokemonsList.addEventListener('click', (evt) => {
  if (evt.target.matches('.books_info')){
     var closestPokemon = evt.target.closest('.books_library');
     
     var foundPokemon = books.find(pokemon => {
        return closestPokemon.dataset.id === String(pokemon.id)
     });

     var renderModal = (object) => {
        document.querySelector('.malumot').textContent = object.malumot;
        document.querySelector('.name_modal').textContent = object.name_modal;
        document.querySelector('.modal_img').src= object.modal_img;
     }

     renderModal(foundPokemon);
  }
});




