import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MainPageComponent() {
    const [data, setData] = useState(0);

    useEffect(() => {
        const fetch = async () => {
            const result = await axios(
                'http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c',
            );
            console.log('result', result);
            setData(result.data);
        console.log('data', data)
        }
        fetch()
    }, [!data]);



    return (
        <React.Fragment>
            <p>content</p>
        </React.Fragment>
    );
}

export default MainPageComponent;