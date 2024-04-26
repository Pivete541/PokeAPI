var formulario = document.querySelector("form")

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  let urlForm = "https://pokeapi.co/api/v2/pokemon/"; console.log(urlForm)
  let nome = document.getElementById("name");         console.log(nome)

  urlForm = urlForm + this.name.value;                console.log(urlForm)
  urlForm = urlForm.toLocaleLowerCase();              console.log(urlForm)

  let resposta = document.getElementById("dados");    console.log(resposta)
  let imagem = document.getElementById("imgPokemon"); console.log(imagem)

  let html01 = "";                                    console.log(html01);

  fetch(urlForm)
    .then((resposta) => resposta.json())
    .then(function (data) {
      html01 = "Nome: " + maiuscula(data.name) + "<br>";               console.log(html01)
      html01 = html01 + "Type: " + maiuscula(data.types[0].type.name); console.log(html01)
      resposta.innerHTML = html01;                                     console.log(resposta.innerHTML)

      imagem.innerHTML =                                                
        "<img src='" +
        data.sprites.front_default +
        "'><img src='" +
        data.sprites.back_default +
        "'>";                                                          console.log(imagem.innerHTML)
    })                                                            
    .catch(function (err) {
      if (err == "SyntaxError: Unexpected token N in JSON at position 0") { 
        html01 = "Pokémon não encontrado!"
      
      } else {
        html01 = "Pokémon não encontrado!"
      
      };                                                                 
      resposta.innerHTML = html01;                                       console.log(resposta.innerHTML)
    })
})

function maiuscula(val) {
  return val[0].toUpperCase() + val.substr(1)
}
