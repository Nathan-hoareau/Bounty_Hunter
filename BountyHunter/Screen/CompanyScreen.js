import { View, Image, Text } from "react-native"
import { Header } from "./HomeScreen"
import { AboutProfileComp, ConvertNameToImage, ProfileContentComp } from "./ProfileScreen"

const AboutCompany = ({name}) =>{
    return (
        <View style={{borderWidth: 1, borderColor: "#ffffff"}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{left: "5%", padding: 5}}>{name}</Text>
            </View>
            <View style={{left: "10%"}}>
                <Text style={{padding: 2.5}}>Lorem ipsum dolor sit amet, consectetur</Text>
                <Text style={{padding: 2.5}}>adipiscing elit. In fermentum tortor velit,</Text>
                <Text style={{padding: 2.5}}>sed mollis ante semper ac. Nullam elementum</Text>
                <Text style={{padding: 2.5}}>interdum eros amet urna vel libero pretium</Text>
                <Text style={{padding: 2.5}}>pulvinar ut eget mi.</Text>
            </View>
        </View>
    )
}

const CompanyScreen = ({navigation, route}) => {
    const name = route.params.name
    const rank = route.params.rank
    const logo = route.params.logo
    const border = route.params.border

    return (
        <View>
            <Header name={name}/>
            <ProfileContentComp name={name} rank={rank} logo={logo} border={border}/>
            <AboutCompany name={'Description'}/>
        </View>
    )
}

export default CompanyScreen