import React from "react";
import './Rodape.css'

interface Props {
    int1: string;
    int2: string;
    int3: string;
    int4: string;
    int5: string;
}

function Rodape(props: Props) {
    return (
        <div>
            <div>
                {props.int1}
                {props.int2}
                {props.int3}
            </div>
            <div>
                {props.int4}
                {props.int5}
            </div>
        </div>
    )
}

export default Rodape