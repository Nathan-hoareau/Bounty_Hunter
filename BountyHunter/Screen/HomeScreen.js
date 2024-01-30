import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, ImageBackground } from 'react-native';

export const TitleComp = ({name}) => {
    const navigation = useNavigation()

    return (
        <View style={{backgroundColor:'#111111', paddingBottom: 10, borderBlockColor: "#ffffff"}}>
            <Text style={style.titleComp.textContainer}>{name}</Text>
            <TouchableOpacity
                style={style.titleComp.buttonContainer}
            >
                <Text>View all</Text>
            </TouchableOpacity>
        </View>
    )
}

{/* <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent:'center'}}>
    <Text style={{flex:.8}}>Login</Text>
    <Image source={require('../../common/arrow.png')} resizeMode='contain' style={{flex:.2 }} />
</TouchableOpacity> */}

export const ContentComp = ({name, border, logo, onPress}) => {
    return (
        <TouchableOpacity style={{backgroundColor: '#222', borderWidth: 1, borderColor: '#ffffff'}}
            onPress={onPress}>
            <View style={{flexDirection: 'row'}}>
                <ImageBackground source={border} style={{width: 100, height: 100}}>
                    <ImageBackground source={logo} style={{width: 50, height: 50, top: '25%', left: '25%'}}>
                        <Image source={border} style={{width: 100, height: 100, top: '-50%', left: '-50%'}}/>
                    </ImageBackground>
                </ImageBackground>
                <Text style={{top: "10%"}}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export const Header = ({name}) => {
    return (
        <View style={{backgroundColor: '#222222', height: 100}}>
            <Text style={{top: '50%', left: '10%', fontSize: 25}}>{name}</Text>
            <TouchableOpacity style={{top: '25%', left: '90%'}}>
                <Image source={require('../assets/3_points.png')} style={{width: 20}}/>
            </TouchableOpacity>   
        </View>
    )
}

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Header name={'Home'}/>
            <ScrollView>
                <TitleComp name={'WALL OF FAME'}/>
                <View>
                    <ContentComp name={'Orange'} border={require('../assets/diamond_border.png')} logo={require('../assets/logo-Orange.png')} onPress={()=> navigation.navigate('Company', {name: 'Orange', border: require('../assets/diamond_border.png'), logo: require('../assets/logo-Orange.png'), rank: 'Diamond'})}/>
                    <ContentComp name={'SFR'} border={require('../assets/gold_border.png')} logo={require('../assets/logo-Sfr.png')} onPress={()=> navigation.navigate('Company', {name: 'SFR', border: require('../assets/gold_border.png'), logo: require('../assets/logo-Sfr.png'), rank: 'Diamond'})}/>
                    <ContentComp name={'Squirrel'} border={require('../assets/silver_border.png')} logo={require('../assets/logo-Squirrel.png')} onPress={()=> navigation.navigate('Company', {name: 'Squirrel', border: require('../assets/diamond_border.png'), logo: require('../assets/logo-Squirrel.png'), rank: 'Diamond'})}/>
                </View>
                <TitleComp name={'RECOMMANDATION'}/>
                <View>
                    <ContentComp name={'Facebook'} border={require('../assets/gold_border.png')} logo={require('../assets/logo-Facebook.png')} onPress={()=> navigation.navigate('Company', {name: 'Facebook', border: require('../assets/gold_border.png'), logo: require('../assets/logo-Facebook.png'), rank: 'Gold'})}/>
                    <ContentComp name={'Rolex'} border={require('../assets/diamond_border.png')} logo={require('../assets/logo-Rolex.png')} onPress={()=> navigation.navigate('Company', {name: 'Rolex', border: require('../assets/diamond_border.png'), logo: require('../assets/logo-Rolex.png'), rank: 'Diamond'})}/>
                    <ContentComp name={'UberEats'} border={require('../assets/silver_border.png')} logo={require('../assets/logo-Ubereats.png')} onPress={()=> navigation.navigate('Company', {name: 'UberEats', border: require('../assets/silver_border.png'), logo: require('../assets/logo-Ubereats.png'), rank: 'Silver'})}/>
                    <ContentComp name={'Google'} border={require('../assets/bronze_border.png')} logo={require('../assets/logo-Google.png')} onPress={()=> navigation.navigate('Company', {name: 'Google', border: require('../assets/bronze_border.png'), logo: require('../assets/logo-Google.png'), rank: 'Bronze'})}/>
                </View>
                <View style={{paddingBottom: 100}}>
                    <TitleComp name={'OFFERS'}/>
                    <ContentComp name={'Developer C++'} border={require('../assets/gold_border.png')} logo={require('../assets/logo-Discord.png')} onPress={()=> navigation.navigate('Company', {name: 'Discord', border: require('../assets/bronze_border.png'), logo: require('../assets/logo-Discord.png'), rank: 'Bronze'})}/>
                    <ContentComp name={'Developer AI'} border={require('../assets/bronze_border.png')} logo={require('../assets/logo-Tesla.png')} onPress={()=> navigation.navigate('Company', {name: 'Tesla', border: require('../assets/bronze_border.png'), logo: require('../assets/logo-Discord.png'), rank: 'Bronze'})}/>
                </View>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    titleComp: {
        buttonContainer: {
            evelation: 8,
            backgroundColor: '#555555',
            borderRadius: 5,
            right: "5%",
            alignSelf: 'flex-end',
        },
        textContainer: {
            top: "36%",
            left: "5%",
        },
    }
})

export default HomeScreen