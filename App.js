import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {TextInput, Dimensions } from "react-native-web";
import { LinearGradient } from 'expo-linear-gradient';

const win = Dimensions.get('window');

const Flex = () => {
  return (
 
    <View style={styles.container}>

     
<LinearGradient
  colors={['rgba(1,30,243,0.8)', 'transparent']}
  style={styles.background}>

    <Text style = {styles.tex}>Sign Up - Aqua Concious</Text>
    <Text style = {styles.texsml}>Name</Text>

    <TextInput style = {styles.item} placeholder = 'First Name - Last Name'/>

    <Text style = {styles.texsml}>Number of people in your house</Text>

    <TextInput style = {styles.item} placeholder = 'Type Here'/>

    <Text style = {styles.texsml}>Water Provider</Text>

    <TextInput style = {styles.item} placeholder = 'Name of company'/>

    <Text style = {styles.texsml}>Zipcode</Text>

    <TextInput style = {styles.item} placeholder = 'XXXXXX'/>

    <View  style={styles.separator}/>

    <Text style = {styles.texsml}>Email address</Text>

    <TextInput style = {styles.item} placeholder = 'exampleEmail@example.com'/>

    <Text style = {styles.texsml}>Password</Text>

    <TextInput style = {styles.item} placeholder = 'PassWord1234$#AB'/>

<View style={styles.buttonFormat}>
    <Button
      color= 'black'
      title = 'Sign Up'
     />
</View>
</LinearGradient>
 


  
 
    
  </View>
 
    );
};

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    flexDirection: 'row',
  },

  item: {
    borderRadius: 15,
    padding: 20,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    backgroundColor: 'rgba(190, 237,239, 0.8)', 
    marginHorizontal: win.width/10,
  },
  tex: {
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 34,
    color: 'white',
  },
  texsml: {
    borderRadius: 8,
    padding: 5,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 15,
    width: 300,
    color:'white',
    marginHorizontal: win.width/10,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: win.height/2,
  },
  buttonFormat: {
    borderRadius: 15,
    padding: 20,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    backgroundColor: 'black', 
    marginHorizontal: win.width/10,
    marginVertical: 20,
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: win.width/8,
  },
});

export default Flex;
