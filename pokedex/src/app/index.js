import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import { pokemons } from '../data/pokemons';

export default function Home() {
  const renderPokemon = ({ item }) => (
    <Card key={item.Numero} pokemon={item} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Pokédex" />
      <FlatList
        data={pokemons}
        style={styles.cards}
        keyExtractor={(pokemon) => pokemon.Numero.toString() }
        renderItem={renderPokemon}
        contentContainerStyle={{ paddingBottom: 20}}
      >
      </FlatList>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  cards: {
    padding: 20,
    marginBottom: 30,
    paddingBottom: 20,
  }
});
