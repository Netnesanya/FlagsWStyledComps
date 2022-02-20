import React from 'react';
import {useParams} from "react-router-dom";

const Details = () => {
    let params = useParams()
    console.log(params)
    return (
        <div>
            Details {params.name}
        </div>
    );
};

export default Details;