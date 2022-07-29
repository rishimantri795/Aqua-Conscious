import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, TextInput } from "react-native";
import Logo from '../assets/logo.png';
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

const Inputreading = ({ navigation }) => {

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
        <View style={styles.mainSec}>
            <View style={styles.headerLogo}>
                <Image
                    style={styles.logo}
                    source={Logo}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.mainHead}>Enter meter reading!</Text>
                <Text style={styles.infoMain}>Here is the process for you to input your weekly, monthly, or daily water usage</Text>

                <View style={styles.inputContainer}>                    
                    <TextInput name="email"
                        style={styles.inputStyle} autoCapitalize="none" autoCorrect={false}
                        placeholder="61453"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Pressable
                        style={styles.SignupButton}
                        onPress={() => navigation.navigate('History')}
                    >
                        <Text style={styles.buttonText}>Save</Text>
                    </Pressable>
                </View>
            </View>
        </View>
        </ScreenTemplate>
    );
}

const styles = StyleSheet.create({
    mainSec: {
        paddingTop: 90,
    },
    headerLogo: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginBottom: 15,
        width: 56,
        height: 56,
    },
    textContainer: {
        padding: 24,
    },
    mainHead: {
        fontSize: 28,
        fontFamily: 'Montserrat_700Bold',
        color: '#ffffff',
        paddingBottom: 16,
    },
    infoMain: {
        fontSize: 16,
        fontFamily: 'Montserrat_400Regular',
        color: '#ffffff',
        lineHeight: 22,
    },
    inputContainer: {
        paddingTop: 40,
    },
    inputStyle: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 16,
        color: '#000000',
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ffffff',
        backgroundColor: 'white',
        opacity: 0.4,
        lineHeight: 30,
        textAlign: 'center',
        textAlignVertical: 'center'
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
    },
});

export default Inputreading;