import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Animated } from "react-native";
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
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

const Leaderboard = () => {

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
            <View style={styles.mainSec}>

                <View style={styles.headerText}>
                    <Text style={styles.mainHead}>Leaderboard</Text>
                </View>

                <View style={styles.rankBox}>

                    <View style={styles.rankTwo}>
                        <View style={styles.mainbox}>
                            <View style={styles.rankTwoboxbg1}>
                                <Image style={styles.rankImg}
                                    source={require('../assets/rank.png')}
                                />
                                <View style={styles.squareBox2} />
                            </View>
                            <View style={styles.rankTwoboxbg2} />
                        </View>
                    </View>

                    <View style={styles.rankOne}>
                        <View style={styles.mainbox}>
                                <View style={styles.boxBg1}>
                                <Image style={styles.rankImg}
                                    source={require('../assets/rank.png')}
                                />
                                    <View style={styles.squareBox} />
                                </View>  
                                <View style={styles.boxBg2} />                         
                        </View>
                    </View>  

                    <View style={styles.rankThree}>
                        <View style={styles.mainbox}>
                            <View style={styles.rankThreeboxbg1}>
                                <Image style={styles.rankImg}
                                    source={require('../assets/rank.png')}
                                />
                                <View style={styles.squareBox3} />
                            </View>
                            <View style={styles.rankThreeboxbg2} />
                        </View>
                    </View> 

                </View>

                <View style={styles.mainBg}>    

                    <View style={styles.leadTabledata}>   
                        <LinearGradient colors={['#C06B07', '#E8B022']} start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} style={styles.rank}>      
                        </LinearGradient>               
                        <View style={styles.colTableone}>
                            <Image
                                style={styles.userrankImg}
                                source={require('../assets/user.jpg')}
                            />
                        </View>
                        <View style={styles.colTabletwo}>
                            <Text style={styles.tableRank}>1st</Text>
                            <Text style={styles.tableName}>The Jacksons</Text>
                        </View>
                        <View style={styles.colTablethree}>
                            <Text style={styles.tableAmount}>760</Text>
                        </View>                        
                    </View>

                    <View style={styles.leadTabledata}>
                        <LinearGradient colors={['#797979', '#CACACA']} start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} style={styles.rank}>
                        </LinearGradient>
                        <View style={styles.colTableone}>
                            <Image
                                style={styles.userrankImg}
                                source={require('../assets/user.jpg')}
                            />
                        </View>
                        <View style={styles.colTabletwo}>
                            <Text style={styles.tableRank}>2nd</Text>
                            <Text style={styles.tableName}>The Patels</Text>
                        </View>
                        <View style={styles.colTablethree}>
                            <Text style={styles.tableAmount}>678</Text>
                        </View>
                    </View>     

                    <View style={styles.leadTabledata}>
                        <LinearGradient colors={['#73260D', '#A45E0C']} start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} style={styles.rank}>
                        </LinearGradient>
                        <View style={styles.colTableone}>
                            <Image
                                style={styles.userrankImg}
                                source={require('../assets/user.jpg')}
                            />
                        </View>
                        <View style={styles.colTabletwo}>
                            <Text style={styles.tableRank}>3rd</Text>
                            <Text style={styles.tableName}>The Carlsons</Text>
                        </View>
                        <View style={styles.colTablethree}>
                            <Text style={styles.tableAmount}>504</Text>
                        </View>
                    </View>
                    
                    <View style={styles.leadTabledata}>
                        <View style={styles.colTableone}>
                            <Image
                                style={styles.userrankImg}
                                source={require('../assets/user.jpg')}
                            />
                        </View>
                        <View style={[styles.colTabletwo, styles.alignTex]}>
                            <Text style={styles.tableName}>The Mantris (You)</Text>
                        </View>
                        <View style={[styles.colTablethree, styles.alignTex2]}>
                            <Text style={styles.tableAmount}>476</Text>
                        </View>
                    </View>

                    <View style={styles.leadTabledata}>
                        <View style={styles.colTableone}>
                            <Image
                                style={styles.userrankImg}
                                source={require('../assets/user.jpg')}
                            />
                        </View>
                        <View style={[styles.colTabletwo, styles.alignTex]}>
                            <Text style={styles.tableName}>The Witts</Text>
                        </View>
                        <View style={[styles.colTablethree, styles.alignTex2]}>
                            <Text style={styles.tableAmount}>395</Text>
                        </View>
                    </View>

                </View>

            </View>
        </ScrollView>
        </ScreenTemplate>
    );
}

const styles = StyleSheet.create({
    mainSec: {
        paddingTop: 60,
    },
    headerText: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'none',
    },
    textContainer: {
        padding: 24,
    },
    mainHead: {
        fontSize: 18,
        fontFamily: 'Montserrat_700Bold',
        color: '#ffffff',
        paddingBottom: 25,
    },
    mainBg: {
        borderWidth: 1,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: '#ffffff',
        backgroundColor: 'white',
        padding: 24,
    },
    colTableone: {
        width: '20%',
    },
    colTabletwo: {
        width: '50%',
    },
    colTablethree: {
        width: '30%',
        justifyContent: 'space-around'
    },
    leadTabledata: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: '#c9edfb',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    tableRank: {
        color: '#ffffff',
        fontFamily: 'Montserrat_500Medium',
        fontSize: 16,
    },
    tableName: {
        color: '#0D4D60',
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 16,
    },
    tableAmount: {
        textAlign: 'right',
        color: '#0D4D60',
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 24,
    },
    userrankImg: {
        width: 48,
        height: 48,
        borderRadius: 50,
        borderColor: '#ffffff',
        borderWidth: 2,
    },
    rank: {
       zIndex: -1,
       position: 'absolute',
       width: '50%',
       height: 64,
       borderTopLeftRadius: 8,
       borderTopRightRadius: 8,
       borderBottomLeftRadius: 8,
       borderBottomRightRadius: 80,
    },
    alignTex: {
        alignContent: 'center',
        justifyContent: 'center',
    },
    alignTex2: {
        justifyContent: 'center',
    },
    rankBox: {
        flex: 1,
        paddingTop: 160,
        flexDirection: 'row',
        flexWrap: "wrap",
        alignItems: 'flex-end',
        justifyContent: 'center',        
    },
    mainbox: {
        flexDirection: 'row',
        flexWrap: "wrap",        
    },
    boxBg1: {
        width: 50,
        height: 190,
        backgroundColor: "#c7caba",
    },
    squareBox: {
        width: 70,
        height: 70,
        zIndex: 1,
        marginTop: -35,
        marginLeft: 15,
        backgroundColor: "#f6e5bb",
        transform: [{ rotate: "45deg" }],
    },
    rankImg:{
        width: 64, 
        height: 64,
        borderRadius: 50,
        borderColor: '#ffffff',
        borderWidth: 2,
        position: 'absolute',
        top: -60,
        left: 18,
        zIndex: 2,
    },
    boxBg2: {
        width: 50,
        height: 190,
        zIndex: -1,
        backgroundColor: "#e4dbbb",
    },
    rankTwoboxbg1: {
        width: 50,
        height: 150,
        backgroundColor: "#acaab5",
    },
    squareBox2: {
        width: 70,
        height: 70,
        zIndex: 1,
        marginTop: -35,
        marginLeft: 15,
        backgroundColor: "#d6c1b1",
        transform: [{ rotate: "45deg" }],
    },
    rankTwoboxbg2: {
        width: 50,
        height: 150,
        zIndex: -1,
        backgroundColor: "#c8bbb5",
    },
    rankThreeboxbg1: {
        width: 50,
        height: 100,
        backgroundColor: "#bfd0e7",
    },
    squareBox3: {
        width: 70,
        height: 70,
        zIndex: 1,
        marginTop: -35,
        marginLeft: 15,
        backgroundColor: "#e8e8e8",
        transform: [{ rotate: "45deg" }],
    },
    rankThreeboxbg2: {
        width: 50,
        height: 100,
        zIndex: -1,
        backgroundColor: "#d7dfe8",
    },
});

export default Leaderboard;