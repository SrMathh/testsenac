import React from "react";
import axios from "axios";
import './Card.css';

interface Props {
    name?: string;
    image?: string;
}

async function GetPokemon() {
    const url: string = "https://pokeapi.co/ap1/v2/";

    const oi = await axios.get(
        url,
        {
            headers: {
                Accept: "application/json",

            }
        }
    ).then(
        function (response) {
            var pokeName: Object = response.data.pokemon

           var logConsole = Object.keys(pokeName).map((key) => {
                var pokeNameMap;
                pokeNameMap = pokeName[key as keyof typeof pokeName]
                return pokeNameMap
            })
            console.log(response)
        }
    );
    // return console.log(data) 
}

function Card(props: Props) {
    return (
        <h1>
            Teste
        </h1>
    )

}
GetPokemon()

export default Card;