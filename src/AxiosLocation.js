import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Content from './content.js'
import SearchBox from './SearchBox';

const AxiosLocation = () => {
    let random = Math.floor(Math.random() * 108);
    const [query, setQuery] = useState(random);
    const [data, setData] = useState();
    const [dataLocation, setDataLocation] = useState();

    console.log(query);

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/location/${query}/`)
            .then((dataApi) => {
                let arrCharacters = [];
                let arrResidents = dataApi.data.residents;
                let arrLocation = dataApi.data;
                for (let index = 0; index < 10; index++) {
                    arrCharacters.push(arrResidents[index])
                }

                setData(arrCharacters);
                setDataLocation(arrLocation);

            });

    }, [query]);



    const handleSearch = (value, setSearchTerm) => {
        if (value != undefined) {
            setQuery(value);
            setSearchTerm("");
        };
      };

    return (
        <div>
            <SearchBox handleSearchTerm={handleSearch}/>
            {data === undefined && dataLocation === undefined ? 'Error5' : <Content dat={data} dataLoca={dataLocation} />}
        </div>

    )

}

export default AxiosLocation;