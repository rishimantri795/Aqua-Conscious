import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
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

    <LinearGradient
    colors={['rgba(96, 247, 255, 0.8)', 'rgba(2, 100, 105, 0.8)']} style = {styles.Border}>
    <TextInput style = {styles.item} placeholder = 'First Name - Last Name'/>
    </LinearGradient>

    <Text style = {styles.texsml}>Number of people in your house</Text>

    <LinearGradient
    colors={['rgba(96, 247, 255, 0.8)', 'rgba(2, 100, 105, 0.8)']} style = {styles.Border}>
    <TextInput style = {styles.item} placeholder = 'Type Here'/>
    </LinearGradient>

    <Text style = {styles.texsml}>Water Provider</Text>

    <LinearGradient
    colors={['rgba(96, 247, 255, 0.8)', 'rgba(2, 100, 105, 0.8)']} style = {styles.Border}>
    <TextInput style = {styles.item} placeholder = 'Name of company'/>
    </LinearGradient>

    <Text style = {styles.texsml}>Zipcode</Text>

    <LinearGradient
    colors={['rgba(96, 247, 255, 0.8)', 'rgba(2, 100, 105, 0.8)']} style = {styles.Border}>
    <TextInput style = {styles.item} placeholder = 'XXXXXX'/>
    </LinearGradient>

    <View  style={styles.separator}/>

    <Text style = {styles.texsml}>Email address</Text>

    <LinearGradient
    colors={['rgba(96, 247, 255, 0.8)', 'rgba(2, 100, 105, 0.8)']} style = {styles.Border}>
    <TextInput style = {styles.item} placeholder = 'exampleEmail@example.com'/>
    </LinearGradient>

    <Text style = {styles.texsml}>Password</Text>

    <LinearGradient
    colors={['rgba(96, 247, 255, 0.8)', 'rgba(2, 100, 105, 0.8)']} style = {styles.Border}>
    <TextInput style = {styles.item} placeholder = 'PassWord1234$#AB'/>
    </LinearGradient>

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
  Border: {
    borderRadius: 15,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginHorizontal: win.width/10,
  },
  item: {
    borderRadius: 15,
    padding: 20,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
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
    height: win.height,
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
