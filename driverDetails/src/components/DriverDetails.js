import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function DriverDetails(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 360,
    height: 197,
    backgroundColor: "rgba(255,255,255,1)",
    
  }
});

export default DriverDetails;
