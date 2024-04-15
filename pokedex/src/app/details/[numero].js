import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import Header from '../../components/Header';

export default function Details() {
  const pokemon = useLocalSearchParams();
  return (
    <SafeAreaView style={styles.container}>
      <Header title={pokemon.Nome} returnHome={true} />
      <Image source={{ uri: pokemon.Imagem }} style={styles.image}></Image>
      <Text>Numero: {pokemon.Numero}</Text>
      <Text>Nome: {pokemon.Nome}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'column',
  },
  image: {
    width: 240,
    height: 240,
  }
})