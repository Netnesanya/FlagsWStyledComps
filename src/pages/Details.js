import React from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import {IoArrowBack} from 'react-icons/io5'
import {SearchByCountry} from "../urls";
import {Button} from "../components/Button";
import Info from "../components/Info";


const Details = () => {
    const [country, setCountry] = useState(null)
    const navigate = useNavigate()
    const name = useParams()

    useEffect(() => {
        axios.get(SearchByCountry(name.name))
            .then(({data}) => {
                setCountry(data[0])
            })
    }, [name])

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack /> Back
            </Button>
            {country && (<Info {...country}/>)}

        </div>
    );
};

export default Details;