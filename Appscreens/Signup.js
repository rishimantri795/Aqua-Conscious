import React, { useState } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, TextInput, Pressable, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
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

const Signup = ({ navigation }) => {

    const [userName, setUserName] = useState("");
    const [noPeople, setNoPeople] = useState();
    const [waterProvider, setWaterProvider] = useState();
    const [userZipcode, setUserZipcode] = useState();
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const submit = () => {
        return Alert.alert();
    }

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
        <View style={styles.mainSignup}>
            <Image
                style={styles.logo}
                source={Logo}
            />
            <Text style={styles.signuptext}>Sign Up - Aqua Conscious</Text>           
        <View style={styles.containerPadd}>
            <View>
                <Text style={styles.labelsStyle}>Name</Text>
                <TextInput
                            style={styles.inputStyle} name="name" value={userName} autoCapitalize="none" autoCorrect={false}
                    placeholder="First name - Last name"
                            onChangeText={actualData => setUserName(actualData)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelsStyle}>No of people in resident house</Text>
                <TextInput
                    style={styles.inputStyle} name="people" value={noPeople} autoCapitalize="none" autoCorrect={false}
                    placeholder="Type here"
                            onChangeText={actualData => setNoPeople(actualData)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelsStyle}>Water provider</Text>
                        <Picker name="provider" style={styles.inputStyle}
                            selectedValue={waterProvider}
                            
                            onValueChange={(itemValue, itemIndex) =>
                                setWaterProvider(itemValue)
                            }>
                            <Picker.Item label="Charlotte Mecklenburg Utilities" value="Charlotte Mecklenburg Utilities" />
                            <Picker.Item label="Charlotte Mecklenburg Utilities2" value="Charlotte Mecklenburg Utilities2" />
                            <Picker.Item label="Charlotte Mecklenburg Utilities3" value="Charlotte Mecklenburg Utilities3" />
                            <Picker.Item label="Charlotte Mecklenburg Utilities4" value="Charlotte Mecklenburg Utilities24" />
                        </Picker>
            </View>

            <View style={styles.inputContainer}>
                    <Text style={styles.labelsStyle}>Zipcode</Text>
                <TextInput name="zipcode"
                    style={styles.inputStyle} value={userZipcode} autoCapitalize="none" autoCorrect={false}
                    placeholder="XXXXXX"
                    onChangeText={actualData => setUserZipcode(actualData)}
                />
            </View>

            <View style={styles.inputContainer}>
                    <Text style={styles.labelsStyle}>Email Address</Text>
                <TextInput name="email"
                    style={styles.inputStyle} value={userEmail} autoCapitalize="none" autoCorrect={false}
                        placeholder="johndoe123@gmail.com"
                     onChangeText={actualData => setUserEmail(actualData)}
                />
            </View>

            <View style={styles.inputContainer}>
                    <Text style={styles.labelsStyle}>Password</Text>
                <TextInput
                            style={styles.inputStyle} name="password" value={password} autoCapitalize="none" autoCorrect={false} secureTextEntry={true}
                        placeholder="*********"
                        onChangeText={actualData => setPassword(actualData)}
                />
            </View>

            <View style={styles.inputContainer}>
                    <Text style={styles.labelsStyle}>Confirm Password</Text>
                <TextInput
                            style={styles.inputStyle} name="cpassword" value={confirmPassword} autoCapitalize="none" autoCorrect={false}
                    placeholder="*********"
                            onChangeText={actualData => setConfirmPassword(actualData)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Pressable
                        style={styles.signupButton}
                                onPress={() => navigation.navigate('Dashboard')}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>

                <Text style={styles.loginText}>Already have an account?</Text>

                <Pressable
                                style={styles.loginButton}
                                onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.buttonText}>Login</Text>
                </Pressable>
            </View>  

        </View>    

        </View>
        </ScrollView>  
        </ScreenTemplate>
    );
}

const styles = StyleSheet.create({
    mainSignup: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 90,
    },
    logo: {
        marginBottom: 15,
        width: 56,
        height: 56,
    },
    signuptext: {        
       textAlign: 'center',
       color: 'white',
       fontSize: 20,
       paddingBottom: 20,
       fontWeight: 'bold',
       fontFamily: 'Montserrat_400Regular',
    },
    containerPadd: {
        alignSelf: 'stretch',
        padding: 24,
    },
    inputContainer: {
        paddingTop: 24,        
    },
    labelsStyle: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 16,
        fontStyle: 'normal',
        color: '#ffffff',
        paddingBottom: 8,
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
        textAlignVertical: 'center'
    },
    signupButton: {
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
    loginText: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 16,
        fontStyle: 'normal',
        color: '#ffffff',
        paddingTop: 30,
        paddingBottom: 15,
        textAlign: 'center',
    },
    loginButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 32,
        borderRadius: 32,
        elevation: 3,
        backgroundColor: '#181818',
    },
});

export default Signup;