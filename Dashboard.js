import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, Pressable, Dimensions } from "react-native";
import Logo from '../assets/logo.png';
import Reward from '../assets/reward.png';
import LBoard from '../assets/leader-board.png';
import Apoints from '../assets/aqua-points.png';
import Wusage from '../assets/weekly-usage.png';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import ScreenTemplate from '../ScreenTemplate';

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

const Dashboard = ({ navigation }) => {

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

    if (!fontsLoad) {
        return <AppLoading />;
    }

    return (
        <ScreenTemplate>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={styles.mainDashboard}>
            <View style={styles.dHeader}>
                <View style={styles.dHeaderitemright}>                           
                            <View style={{ alignItems: 'center'}}>
                            <Pressable
                                onPress={() => navigation.navigate('History')}
                            >
                                <Image
                                    style={{ width: 48, height: 48 }}
                                    source={LBoard}
                                />   
                            </Pressable>
                                <Text style={styles.menuText}>History</Text> 
                            </View>    
                            <View style={{ paddingLeft: 30,alignItems: 'center' }}>
                                <Pressable
                                    onPress={() => navigation.navigate('Leaderboard')}
                                >
                                    <Image
                                        style={{ width: 48, height: 48 }}
                                        source={Reward}
                                    />
                                </Pressable>
                                <Text style={styles.menuText}>Leaderboard</Text>
                            </View>                
                </View>  
            </View>  
            <View style={styles.welcomeBox}>
                <View style={styles.welcomeText}>
                    <Text style={styles.textName}>Hello John!</Text>
                    <Text style={styles.textInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At id morbi in aliquet sed condimentum.</Text>
                </View>    
            </View>  
            <View style={styles.graphBg}>
                <View style={styles.pointTable}>
                    <View style={styles.aquPoint}>
                        <Image
                                style={{ width: 48, height: 48 }}
                                source={Apoints}
                        />
                        <View style={styles.aquPointbox}>
                            <Text style={styles.textPoint}>99</Text>
                            <Text style={styles.aquTitle}>Aqua points</Text>
                        </View>
                    </View>
                    <View style={styles.weekUse}>
                        <Image
                                style={{ width: 48, height: 48 }}
                                source={Wusage}
                        />
                        <View style={styles.aquPointbox}>
                            <Text style={styles.textPoint}>432</Text>
                            <Text style={styles.aquTitle}>Weekly Usage</Text>
                        </View>
                    </View>
                </View> 

                <View style={styles.graphSec}>
                        <View style={styles.container}>
                           
                        </View>  
                </View>

                <View>
                    <Text style={styles.graphInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At id morbi in aliquet sed condimentum.</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Pressable
                        style={styles.SignupButton}
                                onPress={() => navigation.navigate('Input Reading')}
                       >
                        <Text style={styles.buttonText}>Input Your Water Usage</Text>
                    </Pressable>
                </View>

            </View>           
        </View>
     </ScrollView>
        </ScreenTemplate>
    );
};

const styles = StyleSheet.create({
    mainDashboard: {
        paddingTop: 0,
    },
    dHeader: {
        padding: 24,
    },
    dHeaderitemright:{
        paddingTop: 30,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeBox: {
        paddingTop: 20,
    },
    welcomeText: {
        padding: 24,
    },
    menuText: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 16,
        paddingTop: 8,
        color: '#ffffff',
    },
    textName: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 28,
        color: '#ffffff',
    },
    textInfo: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 16,
        color: '#ffffff',
        paddingTop: 16,
        lineHeight: 26,
    },
    graphBg: {
        borderWidth: 1,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: '#ffffff',
        backgroundColor: 'white', 
        padding: 24,
    },
    pointTable: {        
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        paddingBottom: 20,
    },
    aquPoint:{
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    weekUse: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    aquPointbox:{
        //paddingLeft: 10,
        //alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        flexShrink: 1
    },
    textPoint:{
        color: '#181818',
        fontSize: 40,
        fontFamily: 'Montserrat_500Medium',
    },
    aquTitle: {
        color: '#888888',
        fontSize: 16,
        fontFamily: 'Montserrat_500Medium',
    },
    graphInfo: {
        color: '#000000',
        fontSize: 16,
        fontFamily: 'Montserrat_400Regular',
        lineHeight: 20,
        paddingTop: 15,
        paddingBottom: 20,
    },
    SignupButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 32,
        borderRadius: 32,
        elevation: 3,
        backgroundColor: '#181818',
    },
    buttonText: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
    }
});

export default Dashboard;