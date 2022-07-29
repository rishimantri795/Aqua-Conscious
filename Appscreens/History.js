import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, TextInput } from "react-native";
import Wusage from '../assets/weekly-usage.png';
import Apoints from '../assets/aqua-points.png';
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

const History = ({ navigation }) => {

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
                <Text style={styles.mainHead}>History</Text>   
            </View>

            <View style={styles.mainBg}>
                    <View style={styles.historyTable}>
                        <View style={styles.colTable}>
                            <Image
                                    style={{ width: 48, height: 48 }}
                                    source={Wusage}
                                />
                            <Text style={styles.textHead}>Date</Text>
                        </View>
                        <View style={styles.colTable}>
                            <Image
                                    style={{ width: 48, height: 48 }}
                                    source={Apoints}
                            />
                            <Text style={styles.textHead}>Amount used  {"\n"}
                                (in gallons)</Text> 
                        </View>
                    </View>


                    <View style={styles.historyTabledata}>
                        <View style={styles.colTable}>                            
                            <Text style={styles.tableDate}>06/23/2022</Text>
                        </View>
                        <View style={styles.colTable}>                           
                            <Text style={styles.tableAmount}>760</Text>
                        </View>
                    </View>

                    <View style={styles.historyTabledata}>
                        <View style={styles.colTable}>
                            <Text style={styles.tableDate}>06/16/2022</Text>
                        </View>
                        <View style={styles.colTable}>
                            <Text style={styles.tableAmount}>770</Text>
                        </View>
                    </View>

                    <View style={styles.historyTabledata}>
                        <View style={styles.colTable}>
                            <Text style={styles.tableDate}>06/09/2022</Text>
                        </View>
                        <View style={styles.colTable}>
                            <Text style={styles.tableAmount}>780</Text>
                        </View>
                    </View>

                    <View style={styles.historyTabledata}>
                        <View style={styles.colTable}>
                            <Text style={styles.tableDate}>06/02/2022</Text>
                        </View>
                        <View style={styles.colTable}>
                            <Text style={styles.tableAmount}>790</Text>
                        </View>
                    </View>

                    <View style={styles.historyTabledata}>
                        <View style={styles.colTable}>
                            <Text style={styles.tableDate}>05/26/2022</Text>
                        </View>
                        <View style={styles.colTable}>
                            <Text style={styles.tableAmount}>800</Text>
                        </View>
                    </View>

                    <View style={styles.historyTabledata}>
                        <View style={styles.colTable}>
                            <Text style={styles.tableDate}>05/19/2022</Text>
                        </View>
                        <View style={styles.colTable}>
                            <Text style={styles.tableAmount}>810</Text>
                        </View>
                    </View>

                    <View style={styles.historyTabledata}>
                        <View style={styles.colTable}>
                            <Text style={styles.tableDate}>05/12/2022</Text>
                        </View>
                        <View style={styles.colTable}>
                            <Text style={styles.tableAmount}>820</Text>
                        </View>
                    </View>

                    <View style={styles.historyTabledata}>
                        <View style={styles.colTable}>
                            <Text style={styles.tableDate}>05/05/2022</Text>
                        </View>
                        <View style={styles.colTable}>
                            <Text style={styles.tableAmount}>830</Text>
                        </View>
                    </View>

                    <View style={styles.historyTabledata}>
                        <View style={styles.colTable}>
                            <Text style={styles.tableDate}>04/28/2022</Text>
                        </View>
                        <View style={styles.colTable}>
                            <Text style={styles.tableAmount}>840</Text>
                        </View>
                    </View>

                    <View style={styles.historyTabledata}>
                        <View style={styles.colTable}>
                            <Text style={styles.tableDate}>04/21/2022</Text>
                        </View>
                        <View style={styles.colTable}>
                            <Text style={styles.tableAmount}>850</Text>
                        </View>
                    </View>

                    <View style={styles.historyTabledata}>
                        <View style={styles.colTable}>
                            <Text style={styles.tableDate}>04/14/2022</Text>
                        </View>
                        <View style={styles.colTable}>
                            <Text style={styles.tableAmount}>860</Text>
                        </View>
                    </View>

                    <View style={styles.historyTabledata}>
                        <View style={styles.colTable}>
                            <Text style={styles.tableDate}>04/7/2022</Text>
                        </View>
                        <View style={styles.colTable}>
                            <Text style={styles.tableAmount}>870</Text>
                        </View>
                    </View>

                    <View style={styles.historyTabledata}>
                        <View style={styles.colTable}>
                            <Text style={styles.tableDate}>03/31/2022</Text>
                        </View>
                        <View style={styles.colTable}>
                            <Text style={styles.tableAmount}>880</Text>
                        </View>
                    </View>

                    <View style={styles.historyTabledata}>
                        <View style={styles.colTable}>
                            <Text style={styles.tableDate}>03/24/2022</Text>
                        </View>
                        <View style={styles.colTable}>
                            <Text style={styles.tableAmount}>890</Text>
                        </View>
                    </View>

                    <View style={styles.historyTabledata}>
                            <View style={styles.colTable}>
                                <Text style={styles.tableDate}>03/17/2022</Text>
                            </View>
                            <View style={styles.colTable}>
                                <Text style={styles.tableAmount}>900</Text>
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
        paddingTop: 90,
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
    historyTable: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        paddingBottom: 24,
    },
    colTable: {
        width: '50%',
    },
    textHead: {
        color: '#888888',
        fontFamily: 'Montserrat_400Regular',
        fontSize: 16,
        paddingTop: 8,
    },
    mainTabledata: {        
        paddingTop: 90,
    },
    historyTabledata: {      
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start', 
        paddingTop: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#DDDDDD',
    },
    tableDate: {
        color: '#484848',
        fontFamily: 'Montserrat_400Regular',
        fontSize: 16,
    },
    tableAmount: {
        color: '#0D4D60',
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 16,
    },
});

export default History;