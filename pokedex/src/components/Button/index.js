import { StyleSheet, Text, View } from 'react-native'
import { darken } from 'polished'


export default function Button({ tipo }) {
	return (
		<View style={[styles.button, { backgroundColor: `${darken('0.2', tipo.Cor)}`} ]}>
			<Text style={styles.buttonText}>{ tipo.Nome }</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	button: {
		minWidth: 40,
		height: 25,
		paddingHorizontal: 10,
		borderRadius: 4,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 5,
		elevation: 8,
	},
	buttonText: {
		color: '#fff',
		fontSize: 14,
		fontWeight: 'bold'
	}
})