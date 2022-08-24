import { StyleSheet, Text, View, Button, Image, Dimensions, Modal, Pressable, ViewPagerAndroidBase, Platform, ScrollView } from 'react-native';
import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
const I1 = require('./images/A.png')
const I2 = require('./images/AquaConscious_Logo.jpg')
const I3 = require('./images/health.png')
const I4 = require('./images/lg.png')
const I5 = require('./images/lightning.png')
const logo = require('./images/A.png')


const win = Dimensions.get('window');
const psp = Platform.OS === 'ios' ? '36%' : '30.3%'

import {
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat'

{/* Visible or invisible variables/constants*/}

const V1 = true
const V2 = true
const V3 = true
const V4 = true
const V5 = true
const V6 = true
const V7 = true
const V8 = true
const V9 = true
const V10 = true

const V1I = I1
const V2I = I2
const V3I = I3
const V4I = I4
const V5I = I5
const V6I = logo
const V7I = logo
const V8I = logo
const V9I = logo
const V10I = logo

const V1P = 1000
const V2P = 20
const V3P = 453
const V4P = 2642
const V5P = 2456
const V6P = 656
const V7P = 345
const V8P = 7556
const V9P = 35
const V10P = 55


const V1Text = '$2 starbucks gift card';
const V2Text = '$11 Amazon gift card';
const V3Text = '$12 Amazon gift card';
const V4Text = '$13 Amazon gift card';
const V5Text = '$14 Amazon gift card';
const V6Text = '$15 Amazon gift card';
const V7Text = '$16 Amazon gift card';
const V8Text = '$17 Amazon gift card';
const V9Text = '$18 Amazon gift card';
const V10Text = '$19 Amazon gift card';

const variables = [V1, V2, V3, V4, V5, V6, V7, V8, V9, V10];

const activeVariables = [];



const Rewards = () => {

  const [modalHelp, setModelHelp] = useState(false);
  const [APText, setAPText] = useState(1000);


  const [modalV1, setModalV1] = useState(false);
  const [modalV2, setModalV2] = useState(false);
  const [modalV3, setModalV3] = useState(false);
  const [modalV4, setModalV4] = useState(false);
  const [modalV5, setModalV5] = useState(false);



  var bodyText = 'you have ' + APText + ' Aqua points';

  let [fontsLoad] = useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
})  


 
  return (

    <ScrollView style={styles.container}>





      {/* Modal Seperator because I feel like its going to get complicated*/}
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalHelp}
        onRequestClose={() => {
          setModelHelp(!modalHelp);
        }}
      > 

          <LinearGradient colors = {['#d9d7d7','#b8b8b8']} style= {styles.mainModalStyle}>

          <Pressable style={styles.mainPS} onPress = {()=>{setModelHelp(!modalHelp)}}>
            <Text style={{fontFamily: 'Montserrat_600SemiBold', fontSize: ((win.height+win.width+win.width)/75),}}>  X  </Text>
          </Pressable>

          <View  style={{flex: 9}}>
          
          </View>

          </LinearGradient>
        

      </Modal>




  {/* Modal Seperator because I feel like its going to get complicated*/}
 
 
 
  <Modal
        animationType="slide"
        transparent={true}
        visible={modalV1}
        onRequestClose={() => {
          setModalV1(!modalV1);
        }}
      > 

          <LinearGradient colors = {['#fcd7b6','#debda0']} style= {styles.mainModalStyle}>

          <Pressable style={styles.mainPS} onPress = {()=>{setModalV1(!modalV1)}}>
            <Text style={{fontFamily: 'Montserrat_600SemiBold', fontSize: ((win.height+win.width+win.width)/75),}}>  X  </Text>
          </Pressable>

          <View  style={{flex: 11}}>

            <LinearGradient colors = {['#fcd7b6', '#debda0']} style = {styles.lGModalStyle}>

              <Text style= {styles.smallTextB}> 
                are you sure you would like to purchase a {V1Text} for {V1P} AP.
              </Text>

              <View style={{ backgroundColor:'white', height:1, opacity: 0.8, marginTop: 15, marginBottom: 30,}}/>

              <Text style= {styles.smallerTextB}> 
                Terms and Conditions Apply
              </Text>

              <LinearGradient colors={['#b8ffb8', '#65c765']} style={styles.boxSmallest}>


                 <Pressable style={styles.boxSmall} onPress={() => {setModalV1(true)}}>
                  <Text style = {styles.smallTextSP2}>
                   Click Here to purchase
                  </Text>
                </Pressable>

              </LinearGradient>

<Image source={V1I} style= {styles.modalImageFormat}/>


            </LinearGradient>
          </View>

          </LinearGradient>
        

      </Modal>
  {/* Modal Seperator because I feel like its going to get complicated*/}
   
 
 
  <Modal
        animationType="slide"
        transparent={true}
        visible={modalV2}
        onRequestClose={() => {
          setModalV2(!modalV2);
        }}
      > 

          <LinearGradient colors = {['#fcd7b6','#debda0']} style= {styles.mainModalStyle}>

          <Pressable style={styles.mainPS} onPress = {()=>{setModalV2(!modalV2)}}>
            <Text style={{fontFamily: 'Montserrat_600SemiBold', fontSize: ((win.height+win.width+win.width)/75),}}>  X  </Text>
          </Pressable>

          <View  style={{flex: 11}}>

            <LinearGradient colors = {['#fcd7b6', '#debda0']} style = {styles.lGModalStyle}>

              <Text style= {styles.smallTextB}> 
                are you sure you would like to purchase a {V2Text} for {V2P} AP.
              </Text>

              <View style={{ backgroundColor:'white', height:1, opacity: 0.8, marginTop: 15, marginBottom: 30,}}/>

              <Text style= {styles.smallerTextB}> 
                Terms and Conditions Apply
              </Text>

              <LinearGradient colors={['#b8ffb8', '#65c765']} style={styles.boxSmallest}>


                 <Pressable style={styles.boxSmall} onPress={() => {setModalV1(true)}}>
                  <Text style = {styles.smallTextSP2}>
                   Click Here to purchase
                  </Text>
                </Pressable>

              </LinearGradient>

<Image source={V2I} style= {styles.modalImageFormat}/>


            </LinearGradient>
          </View>

          </LinearGradient>
        

      </Modal>
  {/* Modal Seperator because I feel like its going to get complicated*/}

   
 
 
  <Modal
        animationType="slide"
        transparent={true}
        visible={modalV3}
        onRequestClose={() => {
          setModalV3(!modalV3);
        }}
      > 

          <LinearGradient colors = {['#fcd7b6','#debda0']} style= {styles.mainModalStyle}>

          <Pressable style={styles.mainPS} onPress = {()=>{setModalV3(!modalV3)}}>
            <Text style={{fontFamily: 'Montserrat_600SemiBold', fontSize: ((win.height+win.width+win.width)/75),}}>  X  </Text>
          </Pressable>

          <View  style={{flex: 11}}>

            <LinearGradient colors = {['#fcd7b6', '#debda0']} style = {styles.lGModalStyle}>

              <Text style= {styles.smallTextB}> 
                are you sure you would like to purchase a {V3Text} for {V3P} AP.
              </Text>

              <View style={{ backgroundColor:'white', height:1, opacity: 0.8, marginTop: 15, marginBottom: 30,}}/>

              <Text style= {styles.smallerTextB}> 
                Terms and Conditions Apply
              </Text>

              <LinearGradient colors={['#b8ffb8', '#65c765']} style={styles.boxSmallest}>


                 <Pressable style={styles.boxSmall} onPress={() => {setModalV1(true)}}>
                  <Text style = {styles.smallTextSP2}>
                   Click Here to purchase
                  </Text>
                </Pressable>

              </LinearGradient>

<Image source={V3I} style= {styles.modalImageFormat}/>


            </LinearGradient>
          </View>

          </LinearGradient>
        

      </Modal>
  {/* Modal Seperator because I feel like its going to get complicated*/}

   
 
 
  <Modal
        animationType="slide"
        transparent={true}
        visible={modalV4}
        onRequestClose={() => {
          setModalV4(!modalV4);
        }}
      > 

          <LinearGradient colors = {['#fcd7b6','#debda0']} style= {styles.mainModalStyle}>

          <Pressable style={styles.mainPS} onPress = {()=>{setModalV4(!modalV4)}}>
            <Text style={{fontFamily: 'Montserrat_600SemiBold', fontSize: ((win.height+win.width+win.width)/75),}}>  X  </Text>
          </Pressable>

          <View  style={{flex: 11}}>

            <LinearGradient colors = {['#fcd7b6', '#debda0']} style = {styles.lGModalStyle}>

              <Text style= {styles.smallTextB}> 
                are you sure you would like to purchase a {V4Text} for {V4P} AP.
              </Text>

              <View style={{ backgroundColor:'white', height:1, opacity: 0.8, marginTop: 15, marginBottom: 30,}}/>

              <Text style= {styles.smallerTextB}> 
                Terms and Conditions Apply
              </Text>

              <LinearGradient colors={['#b8ffb8', '#65c765']} style={styles.boxSmallest}>


                 <Pressable style={styles.boxSmall} onPress={() => {setModalV1(true)}}>
                  <Text style = {styles.smallTextSP2}>
                   Click Here to purchase
                  </Text>
                </Pressable>

              </LinearGradient>

<Image source={V4I} style= {styles.modalImageFormat}/>


            </LinearGradient>
          </View>

          </LinearGradient>
        

      </Modal>
  {/* Modal Seperator because I feel like its going to get complicated*/}

   
 
 
  <Modal
        animationType="slide"
        transparent={true}
        visible={modalV5}
        onRequestClose={() => {
          setModalV5(!modalV5);
        }}
      > 

          <LinearGradient colors = {['#fcd7b6','#debda0']} style= {styles.mainModalStyle}>

          <Pressable style={styles.mainPS} onPress = {()=>{setModalV5(!modalV5)}}>
            <Text style={{fontFamily: 'Montserrat_600SemiBold', fontSize: ((win.height+win.width+win.width)/75),}}>  X  </Text>
          </Pressable>

          <View  style={{flex: 11}}>

            <LinearGradient colors = {['#fcd7b6', '#debda0']} style = {styles.lGModalStyle}>

              <Text style= {styles.smallTextB}> 
                are you sure you would like to purchase a {V5Text} for {V5P} AP.
              </Text>

              <View style={{ backgroundColor:'white', height:1, opacity: 0.8, marginTop: 15, marginBottom: 30,}}/>

              <Text style= {styles.smallerTextB}> 
                Terms and Conditions Apply
              </Text>

              <LinearGradient colors={['#b8ffb8', '#65c765']} style={styles.boxSmallest}>


                 <Pressable style={styles.boxSmall} onPress={() => {setModalV1(true)}}>
                  <Text style = {styles.smallTextSP2}>
                   Click Here to purchase
                  </Text>
                </Pressable>

              </LinearGradient>

<Image source={V5I} style= {styles.modalImageFormat}/>


            </LinearGradient>
          </View>

          </LinearGradient>
        

      </Modal>
  {/* Modal Seperator because I feel like its going to get complicated*/}
  






{/* Top Bar */}
      <LinearGradient colors = {['#1EB5C6','#445BCC']}style = {styles.bottomBar}>  
      <View style={styles.topBar}>

        <Text style={styles.smallText}>
            Home
        </Text>

        <Text style={styles.smallText}>
            Rewards
        </Text>

        <Pressable style = {styles.qmPressable} onPress={() => {setModelHelp(true)}}>
          <Text style={styles.smallTextSP}>
              ?
          </Text>
        </Pressable>

      </View>

      <View style={{ backgroundColor: 'white', height: 1, opacity: 0.8}}/>

      <View style = {styles.bottomBar}>

        <View style={styles.boxFormat}>
          <Text style={styles.smallTextNM}>
              {bodyText}
          </Text>
        </View>




{/* Seperator because I got annoyed*/}

        <LinearGradient colors={['#e3e3e3', '#b8b8b8']} style={styles.boxBig}>

{/* This changes per reward */}
          <Image source={V1I} style= {{borderColor: '#ffffff', opacity: 1, resizeMode: 'contain', width:'20%'}}/>

        <View style={styles.boxSmall}>
          <Text style = {styles.smallTextSP2}>

            {V1Text} for {V1P} Aqua Points{/* This changes per reward */}

          </Text>
        </View>

        </LinearGradient>


        <LinearGradient colors={['#b8ffb8', '#65c765']} style={styles.boxSmallest}>

{/* This changes per reward */}
        <Pressable style={styles.boxSmall} onPress={() => {setModalV1(true)}}>
          <Text style = {styles.smallTextSP2}>
            Click Here to purchase
          </Text>
        </Pressable>

        </LinearGradient>

{/* Seperator because I got annoyed*/}

        <LinearGradient colors={['#e3e3e3', '#b8b8b8']} style={styles.boxBig}>

{/* This changes per reward */}
          <Image source={V2I} style= {{borderColor: '#ffffff', opacity: 1, resizeMode: 'contain', width:'20%'}}/>

        <View style={styles.boxSmall}>
          <Text style = {styles.smallTextSP2}>

            {V2Text} for {V2P} Aqua Points{/* This changes per reward */}

          </Text>
        </View>

        </LinearGradient>


        <LinearGradient colors={['#b8ffb8', '#65c765']} style={styles.boxSmallest}>

{/* This changes per reward */}
        <Pressable style={styles.boxSmall} onPress={() => {setModalV2(true)}}>
          <Text style = {styles.smallTextSP2}>
            Click Here to purchase
          </Text>
        </Pressable>

        </LinearGradient>

{/* Seperator because I got annoyed*/}

        <LinearGradient colors={['#e3e3e3', '#b8b8b8']} style={styles.boxBig}>

{/* This changes per reward */}
          <Image source={V3I} style= {{borderColor: '#ffffff', opacity: 1, resizeMode: 'contain', width:'20%'}}/>

        <View style={styles.boxSmall}>
          <Text style = {styles.smallTextSP2}>

            {V3Text} for {V3P} Aqua Points{/* This changes per reward */}

          </Text>
        </View>

        </LinearGradient>


        <LinearGradient colors={['#b8ffb8', '#65c765']} style={styles.boxSmallest}>

{/* This changes per reward */}
        <Pressable style={styles.boxSmall} onPress={() => {setModalV3(true)}}>
          <Text style = {styles.smallTextSP2}>
            Click Here to purchase
          </Text>
        </Pressable>

        </LinearGradient>

{/* Seperator because I got annoyed*/}

        <LinearGradient colors={['#e3e3e3', '#b8b8b8']} style={styles.boxBig}>

{/* This changes per reward */}
          <Image source={V4I} style= {{borderColor: '#ffffff', opacity: 1, resizeMode: 'contain', width:'20%'}}/>

        <View style={styles.boxSmall}>
          <Text style = {styles.smallTextSP2}>

            {V4Text} for {V4P} Aqua Points{/* This changes per reward */}

          </Text>
        </View>

        </LinearGradient>


        <LinearGradient colors={['#b8ffb8', '#65c765']} style={styles.boxSmallest}>

{/* This changes per reward */}
        <Pressable style={styles.boxSmall} onPress={() => {setModalV4(true)}}>
          <Text style = {styles.smallTextSP2}>
            Click Here to purchase
          </Text>
        </Pressable>

        </LinearGradient>

{/* Seperator because I got annoyed*/}

        <LinearGradient colors={['#e3e3e3', '#b8b8b8']} style={styles.boxBig}>

{/* This changes per reward */}
          <Image source={V5I} style= {{borderColor: '#ffffff', opacity: 1, resizeMode: 'contain', width:'20%'}}/>

        <View style={styles.boxSmall}>
          <Text style = {styles.smallTextSP2}>

            {V5Text} for {V5P} Aqua Points{/* This changes per reward */}

          </Text>
        </View>

        </LinearGradient>


        <LinearGradient colors={['#b8ffb8', '#65c765']} style={styles.boxSmallest}>

{/* This changes per reward */}
        <Pressable style={styles.boxSmall} onPress={() => {setModalV5(true)}}>
          <Text style = {styles.smallTextSP2}>
            Click Here to purchase
          </Text>
        </Pressable>

        </LinearGradient>

{/* Seperator because I got annoyed*/}

     

       </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  topBar: {
    flex: 1.5,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    textAlign:'center',
    alignItems: 'flex-end',
  },
  bottomBar: {
    flex:10,
  },
  smallText: {
    fontSize: ((win.height+win.width+win.width)/75),
    opacity: 1,
    marginBottom: 15,
    marginTop: '13%',
    fontFamily: 'Montserrat_600SemiBold',
    flex: 1,
    color:'white',
    textAlign: 'center',
  },
  smallTextNM: {
    fontSize: ((win.height+win.width+win.width)/75),
    opacity: 1,
    color:'white',
    fontFamily: 'Montserrat_300Light',
    textAlign:'center'
  },
    smallTextSP: {
    fontSize: ((win.height+win.width+win.width)/75),
    opacity: 1,
    color:'white',
    fontFamily: 'Montserrat_600SemiBold',
    textAlign:'center'
  },
    smallTextSP2: {
    fontSize: ((win.height+win.width+win.width)/75),
    opacity: 1,
    color:'black',
    fontFamily: 'Montserrat_600SemiBold',
  },
  boxFormat: {
    marginHorizontal: 20,
    padding:20,
    alignItems: 'center',
  },
  boxBig: {
    height: 150,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 20,
    padding:12,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection:'row',
    opacity: 0.6,
  },
    boxSmall: {
    height: '80%',
    borderRadius: 20,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    opacity: 0.6,
    flex: 1,
  },
      boxSmallest: {
    height: 40,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    opacity: 1,
  },
  smallTextB: {
    fontSize: ((win.height+win.width+win.width)/75),
    opacity: 1,
    marginVertical: 15,
    fontFamily: 'Montserrat_600SemiBold',
    color:'black',
    textAlign: 'center',
  },
    smallerTextB: {
    fontSize: ((win.height+win.width+win.width)/120),
    opacity: 0.5,
    marginVertical: 15,
    fontFamily: 'Montserrat_600SemiBold',
    color:'black',
    textAlign: 'center',
  },
  lGModalStyle: {
    marginVertical: 15,
    textAlign: 'center',
    marginHorizontal: 15,
    borderRadius: 15,
    flex: 1,
  },
  mainModalStyle: {
    height: win.height, 
    marginTop: psp, 
    marginHorizontal: '5%', 
    flexDirection: 'column', 
    borderRadius: 20,
  },
  mainPS: {
    justifyContent: 'center', 
    alignItems: 'center',
    flex: 1 , 
    marginVertical: '4%', 
    marginHorizontal: '4%', 
    backgroundColor: 'red',
    borderRadius: 15,
  },
  modalImageFormat: {
   borderColor: '#ffffff', opacity: 1, resizeMode: 'contain', width:'30%', flex: 3, marginHorizontal: '35%', marginBottom: '50%'
  },
  qmPressable: {
    flex: 1, alignItems:'center', marginBottom: 15, marginTop:'13%',
  },



});
export default Rewards