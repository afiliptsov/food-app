import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results,setResults] = useState([]);
    const [error,setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try{
        const response = await yelp.get('/search',{
            params:{
                limit: 50,
                term: searchTerm,
                location: 'Boston'
            }
        });
        setResults(response.data.businesses)
        }catch (e){
            setErrorMessage('Something Went wrong')
        }
    }


    return(
        <View>
            <SearchBar term={term} 
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => searchApi(term)}
            />
            {error ? <Text>{error}</Text> : null}
            <Text>We found {results.length}</Text>
        </View>
    )
}

const syles = StyleSheet.create({})

export default SearchScreen;