import { StyleSheet, Text, View, Button, Image, Dimensions, Modal, Pressable } from 'react-native';
import React, { useState } from "react";
const AQimg = require('./images/AquaConscious_Logo.jpg');
const Arrowimg = require('./images/arrow.png');
const downArrowImg = require('./images/downArrow.png')
import { LinearGradient } from 'expo-linear-gradient';
const X = require('./images/X.png')


//Microsoft, Public domain, via Wikimedia Commons
const settingsImg = require('./images/setting.png')

const win = Dimensions.get('window');


const Tips = () => {
  const [modalGV, setModalGV] = useState(false);
  const [modalKV, setModalKV] = useState(false);
  const [modalBV, setModalBV] = useState(false);
  const [modalPV, setModalPV] = useState(false);
  const [modalWV, setModalWV] = useState(false);
  const [modalSV, setModalSV] = useState(false);
  return (
    <View style={styles.container}>
        
      <LinearGradient style = {styles.Blank}
      colors = {["#9fe8ff","#00c1ff"]}
      >
        <View style = {{flexDirection:'row'}}>
        <Pressable onPress={() =>{ console.log('back button code goes here')}}>
        <Image style = {{flex: 1, resizeMode:'contain', height: win.height/7, width: win.width/7}} source = {Arrowimg}/>
        </Pressable>
          <Text style = {styles.TextL}>
            Tips to Save Water
          </Text>
          <Pressable onPress={()=> {console.log('setting button code goes here for navigation')}}>
          <Image style = {{flex: 1, resizeMode:'contain', height: win.height/7, width: win.width/7}} source = {settingsImg}/>
          </Pressable>

        </View>
      </LinearGradient>


      <View style = {styles.Middle}>

<View style = {styles.Space}/>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalGV}
        onRequestClose={() => {
          setModalGV(!modalGV);
        }}
      > 
        <LinearGradient  colors = {["#008080","#66cdaa"]} style = {styles.modalView}>

          <Pressable  onPress = {()=>{setModalGV(!modalGV)}}>
          <Image source={X}  style = {{flex: 1, resizeMode:'contain', height: win.height/10, width: win.width/10}}/>
          </Pressable>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
    tip1
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
    tip2
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
    tip3
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
    tip4
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
    tip5
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

</LinearGradient>

      </Modal>

        <LinearGradient 
        colors = {["#e5e5e5","#a4a4a4"]}
        style = {styles.Hiearchy}>
          <Pressable style = {{resizeMode: 'contain', flex:1.5}} onPress={() => setModalGV(true)}>
          <Image style = {{flex: 1, resizeMode:'contain', height: win.height/30, width: win.width/30}} source = {downArrowImg}/>
          </Pressable>
            <Text style = {styles.txt}>
              To Be Decided or Deleted
            </Text>

        </LinearGradient>

<View style = {styles.Space}/>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalKV}
        onRequestClose={() => {
          setModalKV(!modalKV);
        }}
      > 
        <LinearGradient  colors = {["#008080","#66cdaa"]} style = {styles.modalView}>

          <Pressable  onPress = {()=>{setModalKV(!modalKV)}}>
          <Image source={X}  style = {{flex: 1, resizeMode:'contain', height: win.height/10, width: win.width/10}}/>
          </Pressable>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
  Use a designated glass for water all day. This not only allows you to cut down on the number of glasses you wash, but it also saves some water.
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
  Use appropriate pot sizes when cooking. Don’t use big pots or pans unless you really need to because they need more cooking water to be used, wasting water.
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
  Reuse cooking water. Don’t let the leftover water from boiling pasta and veggies go to waste. Use it to water your garden or your plants rather than putting it down the drain.
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
  When doing the dishes, turn off the water whenever you can. This includes when you’re putting the dish in the dishwasher or when you’re scrubbing the dish with soap.
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
  Use your dishwasher ONLY when the load is full. This can save up to 1,000 gallons of water per month, and can help your electricity and water bill.
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

</LinearGradient>

      </Modal>

        <LinearGradient 
        colors = {["#e5e5e5","#a4a4a4"]}
        style = {styles.Hiearchy}>
            <Pressable style = {{resizeMode: 'contain', flex:1.5}} onPress = {() => setModalKV(true)}>
            <Image style = {{flex: 1, resizeMode:'contain', height: win.height/30, width: win.width/30}} source = {downArrowImg}/>
            </Pressable>
            <Text style = {styles.txt}>
              In the kithcen 
            </Text>

        </LinearGradient>

<View style = {styles.Space}/>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalBV}
        onRequestClose={() => {
          setModalBV(!modalBV);
        }}
      > 
        <LinearGradient  colors = {["#008080","#66cdaa"]} style = {styles.modalView}>

          <Pressable  onPress = {()=>{setModalBV(!modalBV)}}>
          <Image source={X}  style = {{flex: 1, resizeMode:'contain', height: win.height/10, width: win.width/10}}/>
          </Pressable>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
  Install water-saving shower heads. Newer models typically reduce the amount of water used by 50% but still provide you with an enjoyable showering experience.

  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
  Reduce shower time. The average person takes a 10 minute shower which if decreased by even a minute reduces water usage by 10% . Over time, the amount of water saved is significant!
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
  Install low-flow faucet aerators in your sinks. Normal faucets flow at up to 3 gallons per minute, while these low-flow faucets flow as low as 1.5 gallons per minute, saving water and money.
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
  Turn off your faucet whenever you can. This includes when you are brushing your teeth, shaving, gargling, or washing your face. You can also lower the pressure of the water and keep it at a minimum when using it.
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
  Check and fix leaks often. Small drips and leaks can lose you more than 20 gallons of water a day from a single source, without you even knowing it!
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

</LinearGradient>

      </Modal>

        <LinearGradient 
        colors = {["#e5e5e5","#a4a4a4"]}
        style = {styles.Hiearchy}>
            <Pressable style = {{resizeMode: 'contain', flex:1.5}} onPress = {() => setModalBV(true)}>
            <Image style = {{flex: 1, resizeMode:'contain', height: win.height/30, width: win.width/30}} source = {downArrowImg}/>
            </Pressable>
            <Text style = {styles.txt}>
              In the bathroom 
            </Text>

        </LinearGradient>

<View style = {styles.Space}/>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalPV}
        onRequestClose={() => {
          setModalPV(!modalPV);
        }}
      > 
        <LinearGradient  colors = {["#008080","#66cdaa"]} style = {styles.modalView}>

          <Pressable  onPress = {()=>{setModalPV(!modalPV)}}>
          <Image source={X}  style = {{flex: 1, resizeMode:'contain', height: win.height/10, width: win.width/10}}/>
          </Pressable>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
    tip8
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
    tip2
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
    tip3
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
    tip4
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
    tip5
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

</LinearGradient>

      </Modal>

        <LinearGradient 
        colors = {["#e5e5e5","#a4a4a4"]}
        style = {styles.Hiearchy}>
            <Pressable style = {{resizeMode: 'contain', flex:1.5}} onPress = {() => setModalPV(true)}>
            <Image style = {{flex: 1, resizeMode:'contain', height: win.height/30, width: win.width/30}} source = {downArrowImg}/>
            </Pressable>
            <Text style = {styles.txt}>
              To Be Decided
            </Text>

        </LinearGradient>

<View style = {styles.Space}/>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalWV}
        onRequestClose={() => {
          setModalWV(!modalWV);
        }}
      > 
        <LinearGradient  colors = {["#008080","#66cdaa"]} style = {styles.modalView}>

          <Pressable  onPress = {()=>{setModalWV(!modalWV)}}>
          <Image source={X}  style = {{flex: 1, resizeMode:'contain', height: win.height/10, width: win.width/10}}/>
          </Pressable>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
  Use a refillable water bottle- reusing a water bottle saves water used for manufacturing new plastic bottles
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
  Report any leaks you find to school staff- faucet leaks can waste hundreds of gallons of water if gone unnoticed. By reporting them they can be fixed before they become larger issues
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
  Start a club or organization in your school to help promote water conservation
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
  Create a composting system- compost soil helps retain water, meaning the landscape doesn't need to be watered as often
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
  Install water efficient products such as faucet aerators and watersense toilets and showers in the bathrooms
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

</LinearGradient>

      </Modal>

        <LinearGradient 
        colors = {["#e5e5e5","#a4a4a4"]}
        style = {styles.Hiearchy}>
            <Pressable style = {{resizeMode: 'contain', flex:1.5}} onPress = {() => setModalWV(true)}>
            <Image style = {{flex: 1, resizeMode:'contain', height: win.height/30, width: win.width/30}} source = {downArrowImg}/>
            </Pressable>
            <Text style = {styles.txt}>
              At work or school
            </Text>

        </LinearGradient>

<View style = {styles.Space}/>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalSV}
        onRequestClose={() => {
          setModalSV(!modalSV);
        }}
      > 
        <LinearGradient  colors = {["#008080","#66cdaa"]} style = {styles.modalView}>

          <Pressable  onPress = {()=>{setModalSV(!modalSV)}}>
          <Image source={X}  style = {{flex: 1, resizeMode:'contain', height: win.height/10, width: win.width/10}}/>
          </Pressable>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
  Reuse or repurpose products that you already have- repurposing an item that is considered single-use can ensure that the materials that go into the product are maximizing their potential and less materials are wasted as less products are bought.
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
  Think before you purchase a new item- it takes a lot of water to manufacture things like tech and clothing items that we often take for granted
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
  Consider buying second-hand items- buying a second-hand t-shirt can save up to 700 gallons of water rather than buying a new one
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
  Buy foods that are less water intensive-beef and other meats typically require more water to produce than their plant counterparts, so purchasing more vegetarian and vegan options can help reduce your water footprint
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

  <LinearGradient 
    colors = {["#e5e5e5","#a4a4a4"]}
    style = {styles.Hiearchy2}>
  <Text style = {styles.txt}>
  Donate old clothes and items that would likely end up thrown out- the theme here is to reduce the amount of water used when manufacturing new products as the people who recieve them, don't have to buy new clothes. 
  </Text>

  </LinearGradient>

  <View style = {styles.Space}/>

</LinearGradient>

      </Modal>

        <LinearGradient 
        colors = {["#e5e5e5","#a4a4a4"]}
        style = {styles.Hiearchy}>
            <Pressable style = {{resizeMode: 'contain', flex:1.5}} onPress = {() => setModalSV(true)}>
            <Image style = {{flex: 1, resizeMode:'contain', height: win.height/30, width: win.width/30}} source = {downArrowImg}/>
            </Pressable>
            <Text style = {styles.txt}>
              When shopping
            </Text>

        </LinearGradient>


<View style = {styles.Space}/>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flexDirection: 'column',
    flex: 1,

  },
  Blank: {
    flex: 1,
    backgroundColor: 'rgba(0,0,255,0.8)',
    width: win.width,
  },
  Middle: {
    flex: 6,
  },
  TextL: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: win.width/30,
    color: "#FFA500",
  },
  TextLSpecial: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: (win.width + win.height)/60,
    color: "#FFA500",
  },
  Hiearchy: {
    flex: 5,
    alignContent: 'center',
    alignItems: 'center',
    marginHorizontal: win.width/20,
    borderRadius: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    },
  Space: {
    flex: 1,
  },
  imageFormat: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent:'center',
    widht: win.width/30,
    height:win.widht/30,
    flexDirection:'row'
  },
  txt: {
    fontSize: (win.height + win.width)/85,
    flex:9,
    marginHorizontal: win.width/50
  },
  modalView: {
    alignContent: 'left',
    justifyContent: 'left',
    alignItems: 'left',

    height: win.height/7*5.8,
    marginHorizontal: win.width/20,
    resizeMode: 'contain',
    borderRadius: 20,
    marginTop: win.height/6.5,
    flexDirection: 'column'
  },
  Hiearchy2: {
    flex: 5,
    alignContent: 'center',
    alignItems: 'center',
    marginHorizontal: win.width/20,
    borderRadius: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    },

  
});
export default Tips