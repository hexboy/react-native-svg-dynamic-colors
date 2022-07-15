import React, { useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import BallIcon from './src/ball.svg';
import AvatarIcon from './src/avatar.svg';
import MessageIcon from './src/heart.svg';

const { width } = Dimensions.get('window');
const iconSize = width * 0.3;

const ColorBtn = ({
  color,
  onPress,
  selectedColor
}: {
  color: string;
  selectedColor: string;
  onPress: (color: string) => void;
}) => {
  const isSelected = color === selectedColor;
  return (
    <View style={[styles.btnCover, isSelected ? styles.selected : null]}>
      <TouchableOpacity
        style={[styles.colorBtn, { backgroundColor: color }]}
        onPress={() => onPress(color)}
      />
    </View>
  );
};

const colors = [
  'rgb(0, 0, 0)', // black
  'rgb(255, 159, 64)', // orange
  'brown',
  'rgb(255, 99, 132)', // pink
  'rgb(54, 162, 235)', // blue
  'rgb(0, 100, 192)', // green
  'rgb(255, 206, 86)', // yellow
  'rgb(153, 102, 255)' // purple
];

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

export default function App() {
  const [primaryColor, setPrimaryColor] = useState(colors[0]);
  const [secondaryColor, setSecondaryColor] = useState(colors[1]);

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <BallIcon width={iconSize} height={iconSize} fill={primaryColor} />
      </View>

      <View style={styles.icon}>
        <AvatarIcon
          width={iconSize}
          height={iconSize}
          fill={primaryColor}
          fillSecondary={secondaryColor}
        />
      </View>

      <View style={styles.icon}>
        <MessageIcon
          width={iconSize}
          height={iconSize}
          fill={primaryColor}
          fillSecondary={secondaryColor}
        />
      </View>

      <View style={styles.footer}>
        <Text>
          Primary color: <Text style={styles.bold}>{primaryColor}</Text>
        </Text>
        <View style={styles.btnRow}>
          {colors.map((color, index) => {
            return (
              <ColorBtn
                key={index}
                color={color}
                selectedColor={primaryColor}
                onPress={setPrimaryColor}
              />
            );
          })}
          <TouchableOpacity
            style={styles.randomBtn}
            onPress={() => setPrimaryColor(generateRandomColor())}
          >
            <Text>random</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text>
          Secondary color: <Text style={styles.bold}>{secondaryColor}</Text>
        </Text>
        <View style={styles.btnRow}>
          {colors.map((color, index) => {
            return (
              <ColorBtn
                key={index}
                color={color}
                selectedColor={secondaryColor}
                onPress={setSecondaryColor}
              />
            );
          })}
          <TouchableOpacity
            style={styles.randomBtn}
            onPress={() => setSecondaryColor(generateRandomColor())}
          >
            <Text>random</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  icon: {
    paddingTop: 20
  },
  footer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'flex-start'
  },
  btnRow: {
    paddingTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%'
  },
  colorBtn: {
    width: '100%',
    height: '100%',
    borderRadius: 15
  },
  btnCover: {
    padding: 2,
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 2
  },
  selected: {
    borderWidth: 2,
    borderRadius: 15
  },
  bold: {
    fontWeight: 'bold'
  },
  randomBtn: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 3
  }
});
