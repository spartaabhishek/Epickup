import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import DriverDetails from "../components/DriverDetails";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import Icon from "react-native-vector-icons/FontAwesome";


function Untitled(props) {

  
  return (
       
          <View style={styles.driverDetailsStack}>
            <DriverDetails style={styles.driverDetails}></DriverDetails>
            <MaterialButtonViolet
              style={styles.materialButtonViolet}
              
            ></MaterialButtonViolet>
            <Icon name="phone" style={styles.icon}></Icon>
            <Text style={styles.loremIpsum3}></Text>
            <Text style={styles.loremIpsum5}>Abhishek Soni</Text>
            <Text style={styles.loremIpsum6}>3.5</Text>
            <Text style={styles.georgeTown}>{props.street + ", "+props.city}</Text>
            <View style={styles.rect2}></View>
            <Text style={styles.loremIpsum7}></Text>
            <Text style={styles.loremIpsum8}>3km, 30min</Text>
            <Text style={styles.loremIpsum9}>₹ 200</Text>
            <View style={styles.reject}>
            <Button title="Reject" onPress={()=>props.close()}/>
            </View>
            <Image
              source={require("../assets/images/download.jpg")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </View>
         
  
  );
}

const styles = StyleSheet.create({
  container: {
    width:360,
    height:197,
    top:'50%',
    backgroundColor: "rgba(157,140,140,1)"
  },
  group2: {
    width: 360,
    height: 197,
    
  },
  group: {
    width: 360,
    height: 197
  },
  driverDetails: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 197,
    width: 360
  },
  materialButtonViolet: {
    height: 36,
    width: 100,
    position: "absolute",
    left: 234,
    top: 139,
    borderRadius: 58
  },
  icon: {
    top: 27,
    left: 292,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 38
  },
  loremIpsum3: {
    top: 57,
    left: 98,
    position: "absolute",
    
    color: "#121212"
  },
  loremIpsum5: {
    top: 23,
    left: 98,
    position: "absolute",
   
    color: "#121212"
  },
  loremIpsum6: {
    top: 46,
    left: 98,
    position: "absolute",
    
    color: "rgba(42,201,13,1)"
  },
  georgeTown: {
    top: 84,
    left: 26,
    position: "absolute",
    
    color: "#121212"
  },
  rect2: {
    top: 127,
    left: 71,
    width: 230,
    height: 1,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  loremIpsum7: {
    top: 111,
    left: 18,
    position: "absolute",
  
    color: "#121212"
  },
  loremIpsum8: {
    top: 102,
    left: 26,
    position: "absolute",
   
    color: "#121212",
    fontSize: 12
  },
  loremIpsum9: {
    top: 87,
    left: 276,
    position: "absolute",
   
    color: "#121212",
    fontSize: 20
  },
  reject: {
    position: "absolute",
    left: 20,
    top: 139,
    borderRadius: 58,
    width:100,
    color: "#3F51B5",
  },
  image: {
    top: 17,
    left: 18,
    width: 60,
    height: 60,
    position: "absolute",
    borderRadius: 100
  },
  driverDetailsStack: {
    width: 360,
    height: 197,
    
  },
  accept:{
    borderRadius:200,
    backgroundColor:"green",
    width:"80%",
    height:"40%",
    justifyContent:"center",
    alignItems:"center"
  },
  ride:{
    fontSize: 50,
}
});

export default Untitled;
