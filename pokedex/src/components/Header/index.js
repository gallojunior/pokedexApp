import { Image, Text, View, Pressable } from 'react-native'
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

const imageSource = require('../../../assets/pokeball-transparent.jpg');

export default function Header(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.titleContainer}>
        {
          props.returnHome ?
            <Pressable onPress={() => router.back()}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={28}
                color="black"
                style={{ marginEnd: 20 }}
              />
            </Pressable>
            :
            <View />
        }
        <Text style={styles.title}>
          {props.title}
        </Text>
        {
          !props.returnHome ?
            <Text style={{ fontSize: 16, width: '100%' }}>
              Encontre seu pokemon favorito pela aqui.
            </Text>
            :
            <View />
        }
      </View>
    </View>
  )
}

