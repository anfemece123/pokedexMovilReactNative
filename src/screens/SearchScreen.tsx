import {View, Platform, Text, FlatList, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {styles} from '../theme/AppTheme';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';

const screenWidth = Dimensions.get('window').width;

const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFiltered([]);
    }
    if (isNaN(Number(term))) {
      setPokemonFiltered(
        simplePokemonList.filter(poke =>
          poke.name.toLowerCase().includes(term.toLowerCase()),
        ),
      );
    } else {
      const pokemonById = simplePokemonList.find(poke => poke.id === term);
      setPokemonFiltered(pokemonById ? [pokemonById] : []);
    }
  }, [term]);

  if (isFetching) {
    return <Loading />;
  }
  return (
    <View
      style={{
        flex: 1,

        marginHorizontal: 20,
      }}>
      <SearchInput
        onDebounce={value => setTerm(value)}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          top: Platform.OS === 'ios' ? top : top + 30,
        }}
      />
      <FlatList
        data={pokemonFiltered}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false} //quitar la barra de scroll vertical
        numColumns={2}
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              marginTop: Platform.OS === 'ios' ? top + 60 : top + 80,
              marginBottom: top + 20,
              // paddingBottom: 10,
              ...styles.globalMargin,
              color: 'black',
            }}>
            {term}
          </Text>
        }
        renderItem={({item}) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
};

export default SearchScreen;
