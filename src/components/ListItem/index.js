import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

const ListItem = (props) => {
  console.log(props);
  
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={styles.listItem}>
        <Image resizeMode='cover' source={props.placeImage} style={styles.listImage}/>
        <Text>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});

export default ListItem;
