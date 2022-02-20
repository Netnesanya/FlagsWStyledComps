import React, {useEffect, useState} from 'react';
import axios from "axios";
import Controls from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";
import {ALL_COUNTRIES} from "../urls";
import {useNavigate} from 'react-router-dom'

const HomePage = ({countries, setCountries}) => {
    const [filteredCountries, setFilteredCountries] = useState(countries)
    const navigate = useNavigate()
    const handleSearch = (search, region) => {
        let data = [...countries]

        if (region) {
            data = data.filter(el => el.region.includes(region))
        }

        if (search) {
            data = data.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
        }

        setFilteredCountries(data)
    }

    useEffect(() => {
        if (!countries.length) {
        axios.get(ALL_COUNTRIES)
            .then(({data}) => setCountries(data))
            debugger
    }}, [])
    return (
        <div>
            <Controls onSearch={handleSearch}/>
            <List>
                {filteredCountries.map(el => {
                    const countryInfo = {
                        flag: el.flags.svg,
                        name: el.name,
                        info: [
                            {
                                title: 'Region',
                                description: el.region,
                            },
                            {
                                title: 'Population',
                                description: el.population.toLocaleString(),
                            },
                            {
                                title: 'Capital',
                                description: el.capital,
                            },

                        ]
                    }

                    return (
                        <Card key={el.name} {...countryInfo} onClick={() => navigate(`/country/${el.name}`)}  />
                    )
                })
                }
            </List>
        </div>
    );
};

export default HomePage;