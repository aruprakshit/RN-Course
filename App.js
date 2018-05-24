import React from 'react';
import { connect } from "react-redux";

import {
  StyleSheet,
  View,
} from 'react-native';

import PlaceList from './src/components/PlaceList';
import PlaceInput from './src/components/PlaceInput';
import placeImage from './src/assets/cat.jpg'; 
import PlaceDetail from './src/components/PlaceDetail';
import { 
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from './src/store/actions';

class App extends React.Component {
  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key);
  }

  placeAddedHandler = (placeName) => {
    this.props.onAddPlace(placeName)
  };

  placeDeleteHandler = () => {
    this.props.onDeletePlace()
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeleteHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const mapStateToProps = (state) => {
  console.log(state);
  
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
};

const mapDispatchToProps = (dispatch) => ({
  onAddPlace: (name) => dispatch(addPlace(name)),
  onDeletePlace: () => dispatch(deletePlace()),
  onSelectPlace: (key) => dispatch(selectPlace(key)),
  onDeselectPlace: () => dispatch(deselectPlace())
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
