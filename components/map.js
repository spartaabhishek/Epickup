import React from 'react'
import MapView,{Marker} from 'react-native-maps';
import { StyleSheet, Text, TextInput, View, Dimensions,Button, Keyboard, Modal } from 'react-native';
import * as Location from 'expo-location';
import Untitled from '../driverDetails/src/screens/Untitled'
export default class MapComponent extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        latitude: 20,
        longitude: 30,
        set_dest: false,
        dest_latitude: -1,
        dest_longitude: -1,
        text: "",
        city:"",
        errorMsg : false,
        modalVisible: false
    }
    this.getLocation = this.getLocation.bind(this)
  }
 

  componentDidMount(){
    this.getLocation()
  }

  async getLocation(){
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      this.setState({
        errorMsg : true
      })
    }
    else{
      let location = await Location.getCurrentPositionAsync({});
      console.log(location)
      // console.log(location.coords.latitude)
      this.setState({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      });
    }
  }
  
  retryOnerror(){
    this.setState({
      
      errorMsg: false
    })
  }
  updateCity(c){
    this.setState({
      city:c
    })
  }

  updateText(t){
    this.setState({
      text:t
    })
  }

  renderModal(){
    this.setState({
      modalVisible: true
    })
  }

  closeModal(){
    this.setState({
      modalVisible: false
    })
  }
  

  async getData(){
    Keyboard.dismiss()
    if(this.state.text!=""){
    await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.text},${this.state.city},india.json?access_token=pk.eyJ1Ijoic3BhcnRhYWJoaXNoZWsiLCJhIjoiY2tnYW5rYnQ5MDh2YTJ0czVpamJwamowdCJ9.yMjF3RjImdw0Gof8FPRM4A&limit=1`)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      if(data.hasOwnProperty('features')){
      this.setState({
        set_dest: true,
        dest_latitude: (data.features[0].bbox[3]+data.features[0].bbox[1])/2,
        dest_longitude: data.features[0].bbox[2]
      })
      }
    })
   }
   else{
     this.setState({
       set_dest:false
     })
   }
  }
  
  render() {
    return (
      <View style={styles.container}>
     
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        >
        <Untitled city={this.state.city} street={this.state.text} close={()=>this.closeModal()}></Untitled>
        
          {/*<View style={styles.modalView}>
              <Button title="close" />
              <Text>Total Cost: 120</Text>
              
    </View>*/}
      </Modal>
 
      <MapView style={styles.mapStyle} 
        region={{
          latitude:this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: 1,
          longitudeDelta: 1
        }} 
      >
        <Marker coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }} />
        {this.state.set_dest?<Marker coordinate={{ latitude: this.state.dest_latitude, longitude: this.state.dest_longitude }}/>:null}
      </MapView>
        <View style={styles.search}>
          <TextInput placeholder="City" styles={styles.input} value={this.state.city} onChangeText={(city)=>this.updateCity(city)}></TextInput>
          <TextInput placeholder="destination" styles={styles.input} value={this.state.text} onChangeText={(text)=>this.updateText(text)}></TextInput>
            <Button title="search" onPress={()=>this.getData()}></Button>
            {this.state.set_dest?<Button title="Book" onPress={()=>this.renderModal()} style={{...styles.input,position:'absolute',bottom:'25%',elevation:2}}/>:null}
        </View>
        
       {/* this.state.errorMsg?<Button title="retry" onPress={()=>this.retryOnerror()}></Button>:"" */}
      
      </View>
    );
  }}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  search:{
    top:Dimensions.get('window').width/2,
    elevation:2,
    position:'absolute',
    width:'80%',
    justifyContent:"space-around",
    flexDirection: "column",
    color:'black',
    backgroundColor:'white',
  },
  input:{
    width: '60%',
    height: '4%',
    textAlign:'center',
  },

  modalView:{
    height:360,
    top:'10%',
    width:'100%',
    borderTopRightRadius: 200,
    borderTopLeftRadius: 200,
  }
  
});