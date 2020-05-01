import {useEffect, useState} from 'react';
import yelp from '../api/yelp'



export default () => {
    const [results, setResults] = useState([]);
    const [error, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log("I am here")
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Boston'
                }
            });
            setResults(response.data.businesses)
        } catch (e) {
            setErrorMessage('Something Went wrong')
        }
    }

    useEffect(() => {
        searchApi('pasta')
    }, []);

    return [searchApi, results, error]
}