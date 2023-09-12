import React from "react";
import './Navbar.css';
import Cidades from '../utils/cities'
import axios from "axios";
import { textSpanEnd } from "typescript";

interface Props {
    item1: string;
    item2: number;
    ok?: boolean;
}

async function AxiosTeste() {

    const { data } = await axios.get(
        'https://pokeapi.co/ap1/v2/',
        {
            headers: {
                Accept: "application/json"
            }
        }
    );
    const pokemonNames = data.results.map(
        (pokemon: { name: string }) => pokemon.name
    );
    return console.log(pokemonNames);
}

AxiosTeste();


function Navbar(props: Props) {
    return (
        <div>
            {props.item1}
            {props.item2}
            {
                Object.keys(Cidades()).map((key) => {
                    return (
                        <h1 key={key}>{Cidades()[key as keyof typeof Cidades]}</h1>
                    );
                })
            }
        </div>
    );

}

export default Navbar;

//GET - TRAZ DADOS
//POST- ENVIA DADOS DO PC
// PUT (UPDATE)
//DELETE
//Create(POST)
//Read (GET)
//