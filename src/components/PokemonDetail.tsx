import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {PokemonFull, Type} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

const PokemonDetail = ({pokemon}: Props) => {
  console.log(
    'animated',
    pokemon.sprites.versions?.['generation-v']['black-white'].animated
      ?.front_default,
  );
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        ...StyleSheet.absoluteFillObject, //para que tome todo el elemnto hasta las partes de los bordes
      }}>
      <View
        style={{
          ...styles.container,
          marginTop: 370,
        }}>
        <Text style={styles.title}>Types</Text>
        {/* TYPES */}
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text
              key={type.name}
              style={{...styles.regularText, marginRight: 10}}>
              {type.name}
            </Text>
          ))}
        </View>
        {/* Peso */}
        <Text style={styles.title}>Peso</Text>
        <Text style={styles.regularText}>{pokemon.weight}kg</Text>
      </View>

      {/* Sprites */}
      <View style={styles.container}>
        <Text style={styles.title}>Sprites</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={
            pokemon.sprites.versions?.['generation-v']['black-white'].animated
              ?.front_default
          }
          style={styles.basicSprites}
        />
        <FadeInImage
          uri={
            pokemon.sprites.versions?.['generation-v']['black-white'].animated
              ?.back_default
          }
          style={styles.basicSprites}
        />
        <FadeInImage
          uri={
            pokemon.sprites.versions?.['generation-v']['black-white'].animated
              ?.front_shiny
          }
          style={styles.basicSprites}
        />
        <FadeInImage
          uri={
            pokemon.sprites.versions?.['generation-v']['black-white'].animated
              ?.back_shiny
          }
          style={styles.basicSprites}
        />
      </ScrollView>

      {/* Habilidades */}

      <View style={styles.container}>
        <Text style={styles.title}>Habilidades base</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text
              key={ability.name}
              style={{...styles.regularText, marginRight: 10}}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>
      {/* Movimientos */}
      <View style={styles.container}>
        <Text style={styles.title}>Movimientos</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {pokemon.moves.map(({move}) => (
            <Text
              key={move.name}
              style={{...styles.regularText, marginRight: 10}}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>
      {/* stats */}
      <View style={styles.container}>
        <Text style={styles.title}>Stats</Text>
        <View>
          {pokemon.stats.map((stat, index) => (
            <View key={stat.stat.name + index} style={{flexDirection: 'row'}}>
              <Text
                key={stat.stat.name}
                style={{...styles.regularText, marginRight: 10, width: 150}}>
                {stat.stat.name}
              </Text>
              <Text style={{...styles.regularText, fontWeight: 'bold'}}>
                {stat.base_stat}
              </Text>
            </View>
          ))}
        </View>
        {/* Sprite final */}
        <View
          style={{
            marginBottom: 30,
            alignItems: 'center',
          }}>
          <FadeInImage
            uri={
              pokemon.sprites.versions?.['generation-v']['black-white'].animated
                ?.front_default
            }
            style={styles.basicSprites}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default PokemonDetail;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 19,
  },
  basicSprites: {
    width: 60,
    height: 60,
    marginHorizontal: 20,
    marginTop: 10,
  },
});
