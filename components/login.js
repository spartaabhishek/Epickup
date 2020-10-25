import React, { Component,useState,useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import db from '../firebase'
// import Divider from "../components/Divider";
import Signup from './signup'

async function checkUser(email,password){

  const users =await db.collection('login')
  const snapshot = await users.where("email","==",email).get()
  console.log("hello")
  if(snapshot.empty){
    console.log('invalid')
    return false
  }
  let result = false
  console.log(snapshot)
  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
    if(doc.data().password==password){
      result=true
    }
  });
  if(result){
    console.log('passwd correct')
    return true
  }
  return false
}


 function LoginPage(props){
  const [email,updateEmail]=useState("")
  const [passwd,updatePasswd]=useState("")
  return(
    <View style={styles.rect}>
      <StatusBar hidden />
      <View style={styles.textColumn}>
        <Text style={styles.text}>Log in to Epickup.</Text>
        <View style={styles.rect2}>
         
          <View style={styles.iconFiller}></View>
          <View style={styles.rect3}>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                onPress={() => props.signup()}
                style={styles.button}
              >
                <Text style={styles.text2}>Sign up</Text>
              </TouchableOpacity>
              <EntypoIcon
                name="dots-three-vertical"
                style={styles.icon2}
              ></EntypoIcon>
            </View>
          </View>
        </View>
        <View style={styles.text3Stack}>
          <Text style={styles.text3}>
            Email
          </Text>
          <TextInput placeholder="" style={styles.textInput2} onChangeText={(x)=>updateEmail(x)}></TextInput>
        </View>
        <Text style={styles.text4}>Password</Text>
        <TextInput
          placeholder=""
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={(x)=>updatePasswd(x)}
        ></TextInput>
        <Text style={styles.text5}>Forgotten your password?</Text>
      </View>
      <View style={styles.textColumnFiller}></View>
      <View style={styles.rect4}>
        
        <TouchableOpacity
          onPress={async ()=>(await checkUser(email,passwd)?props.login():false)}
          style={styles.button2}
        >
          <Text style={styles.text6}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
function Login(props) {
  const [signup,visibility]=useState(false)
  return(
  <>
  {signup?<Signup login={props.login}/>:<LoginPage signup={()=>visibility(true)} login={props.login}/>}
  </>
  )
}

export default Login;

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "#141f28"
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    lineHeight: 50,
    marginTop: 108,
    marginLeft: 17
  },
  rect2: {
    height: 98,
    backgroundColor: "#1c2a38",
    flexDirection: "row",
    marginTop: -158
  },
  icon: {
    color: "rgba(29,161,242,1)",
    fontSize: 40,
    marginLeft: 161,
    alignSelf: "center"
  },
  iconFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rect3: {
    width: 124,
    height: 50,
    flexDirection: "row",
    alignSelf: "center"
  },
  button: {
    width: 85,
    height: 50,
    justifyContent: "center"
  },
  text2: {
    width: 66,
    height: 50,
    color: "#1da1f2",
    fontSize: 18,
    lineHeight: 50,
    alignSelf: "center"
  },
  icon2: {
    color: "#1da1f2",
    fontSize: 25,
    marginTop: 13
  },
  buttonRow: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    marginRight: 14
  },
  text3: {
    top: 0,
    left: 1,
    color: "rgba(123,139,151,1)",
    position: "absolute",
    fontSize: 16,
    lineHeight: 20
  },
  textInput2: {
    top: 19,
    left: 0,
    width: 325,
    height: 42,
    color: "#1da1f2",
    position: "absolute",
    borderColor: "#1da1f2",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 18,
    lineHeight: 20
  },
  text3Stack: {
    width: 326,
    height: 61,
    marginTop: 84,
    marginLeft: 17
  },
  text4: {
    color: "rgba(123,139,151,1)",
    fontSize: 18,
    lineHeight: 20,
    marginTop: 37,
    marginLeft: 17
  },
  textInput: {
    width: 325,
    height: 42,
    color: "#1da1f2",
    borderColor: "rgba(123,139,151,1)",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 18,
    lineHeight: 20,
    marginLeft: 17
  },
  text5: {
    color: "#7b8b97",
    fontSize: 18,
    lineHeight: 20,
    marginTop: 42,
    marginLeft: 79
  },
  textColumn: {},
  textColumnFiller: {
    flex: 1
  },
  rect4: {
    height: 83
  },
  divider: {
    width: 360,
    height: 1
  },
  button2: {
    width: 109,
    height: 50,
    backgroundColor: "#1da1f2",
    borderRadius: 100,
    justifyContent: "center",
    marginTop: 13,
    marginLeft: 240
  },
  text6: {
    color: "#ffffff",
    fontSize: 24,
    lineHeight: 20,
    alignSelf: "center"
  }
});


