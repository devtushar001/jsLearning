/*function loadData() {
  let _xml = new XMLHttpRequest();

  _xml.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    } else if (this.readyState === 4 && this.status === 404) {
      document.getElementById("demo").innerHTML = "File Not Found";
    }
  };
  _xml.open("GET", "/19. Classes/readme.txt", true);
  _xml.send();
}
*/

// fetch =

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((Response) => Response.json())
//   .then((data) => console.log(data.id))
//   .catch((error) => console.error(error));

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((Response) => {
//     if (!Response.ok) {
//       throw new Error("could not fetch resourse");
//     }
//     return Response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

async function fetchData() {
  try {
    let _pokemonname = document.getElementById("_x").value.toLowerCase();
    console.log(_pokemonname);
    // console.log(_pokemonname);
    let _name;
    if (_pokemonname === "") {
      _name = "pikachu";
      // console.log(_pokemonname);
    } else {
      _name = _pokemonname;
    }
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${_name}`);
    if (!response.ok) {
      throw new Error("could not fetch");
    }
    const data = await response.json();
    // console.log(data);
    const pokemonSprite = data.sprites.front_default;
    // console.log(pokemonSprite);
    const _img = document.getElementById("_y");
    _img.src = pokemonSprite;
    _img.style.display = "block";
    document.getElementById("_x").value = "";
  } catch (error) {
    console.log(error);
  }
}

fetchData();
let _button = document.getElementById("_x");
_button.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    fetchData();
  }
});
