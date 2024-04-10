import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function Details() {
  const pokemon = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>Numero: {pokemon.Numero}</Text>
      <Text>Nome: {pokemon.Nome}</Text>
      <Image source={{ uri: pokemon.Imagem }} style={styles.image}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 240,
    height: 240,
  }
})