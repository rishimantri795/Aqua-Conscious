import React from 'react';
import { View, Text, ImageBackground, Image, Pressable } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import Login from '../../screen/Login';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = (props)  => {

    const navigation = useNavigation();
    
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#1EB5C6'}}>
                <ImageBackground
                    source={require('../../assets/bg.png')}
                    style={{ padding: 20, alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/user.jpg')}
                        style={{
                            height: 80, width: 80, borderRadius: 40, marginBottom: 10, borderColor: '#ffffff',
                            borderWidth: 2 }}
                    />
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 18,
                        }}>
                        John Doe
                    </Text>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props}/>
                </View>
        </DrawerContentScrollView>
        <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                
                <Pressable
                    style={{ paddingVertical: 15 }}
                    title={`Go to ${Login}`}
                    onPress={() => navigation.navigate('Login')} 
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text
                            style={{
                                fontSize: 15,
                                marginLeft: 15,
                            }}>
                            Sign Out
                        </Text>
                    </View>
                </Pressable>

        </View>
        </View>
    );
};

export default CustomDrawer;