import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, Slider } from 'react-native';
import BallIcon from './src/ball.svg';
import AvatarIcon from './src/avatar.svg';
import MessageIcon from './src/heart.svg';

const { width } = Dimensions.get('window');
const iconSize = width * 0.3;

const colors = [
  'rgb(0, 0, 0)', // black
	'rgb(255, 159, 64)', // orange
	'brown',
	'rgb(255, 99, 132)', // pink
	'rgb(54, 162, 235)', // blue
	'rgb(0, 100, 192)', // green
	'rgb(255, 206, 86)', // yellow
	'rgb(153, 102, 255)', // purple
];

export default function App() {
  const [index, setIndex] = useState(1);
  const primaryColor = colors[index - 1];
  const secondaryColor = colors[index % colors.length];
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <BallIcon width={iconSize} height={iconSize} fill={primaryColor} />
      </View>

      <View style={styles.row}>
        <AvatarIcon
          width={iconSize}
          height={iconSize}
          fill={primaryColor}
          fillSecondary={secondaryColor}
        />
      </View>

      <View style={styles.row}>
        <MessageIcon
          width={iconSize}
          height={iconSize}
          fill={primaryColor}
          fillSecondary={secondaryColor}
        />
      </View>

      <Slider
        step={1}
        minimumValue={1}
        maximumValue={colors.length}
        onValueChange={setIndex}
        style={styles.slider}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  row: {
    paddingTop: 20
  },
  slider: {
    marginTop: 30,
    width: '90%'
  }
});
