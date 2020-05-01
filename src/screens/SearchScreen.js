import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, error] = useResults();
    console.log(results)


    const filterResultsByPrice = (price) => {
        return results.filter( result => {
            return result.price === price
        })
    }


    return(
        <View>
            <SearchBar term={term} 
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => searchApi(term)}
            />
            {error ? <Text>{error}</Text> : null}
            <Text>We found {results.length}</Text>
            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
            <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>
        </View>
    )
}

const syles = StyleSheet.create({})

export default SearchScreen;