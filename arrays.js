// var variable = [] is just a list
// dictionaries are the same a usual
// tuples don't exist. Put [] around any "tuple" in a dictionary
// accessing information from a dictionary is normal except for keys, use for loop
// You can also access items like (pokemon.Pokemon) and it will still print the items
// You can also enter functions into the dictionary

let text_change = document.getElementById("changable")


let pokemon = {
    "Pokemon": ["Diglett", "Steelix", "Pikachu"], 
    "Typing": ["ground","steel", "electric"], 
    "Movesets": [
        ["Sand attack", "Mud-slap"], 
        ["Shear force", "Crunch"], 
        ["Iron Tail", "Thunderbolt"]
    ]
};

function find_pokemon (name) {
    let value = 0;
    for (let i = 0; i < pokemon["Pokemon"].length; i++) {
        if (pokemon["Pokemon"][i] == name) {
            console.log("It worked");
            value = i;
        } else {
            console.log("sadge");
        }
    }

    console.log(pokemon["Pokemon"][value], pokemon["Typing"][value], pokemon["Movesets"][value])

    let text = pokemon["Pokemon"][value] + " is an " + pokemon["Typing"][value] + " type pokemon with the moves " + pokemon["Movesets"][value]

    text_change.innerHTML = text
    
}   

find_pokemon("Pikachu")
