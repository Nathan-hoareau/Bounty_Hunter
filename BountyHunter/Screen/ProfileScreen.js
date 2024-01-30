import { Button, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { ContentComp, Header } from './HomeScreen';
import { Container, Row, Col } from 'react-bootstrap';

export const ProfileContentComp = ({name, border, logo, rank}) => {
    return (
        <View style={{flexDirection: 'row', backgroundColor: '#222', borderWidth: 1, borderColor: '#ffffff'}}>
            <ImageBackground source={border} style={{width: 100, height: 100}}>
                <ImageBackground source={logo} style={{width: 50, height: 50, top: '27%', left: '25%'}}>
                    <Image source={border} style={{width: 100, height: 100, top: '-57%', left: '-50%'}}/>
                </ImageBackground>
            </ImageBackground>
            <View>
                <Text style={{top: "30%"}}>{name}</Text>
                <Text style={{top: "40%"}}>Rank: {rank}</Text>
            </View>
        </View>
    )
}

const ContactComp = ({name, adr, tel}) => {
    return (
        <View style={{borderWidth: 1, borderColor: "#ffffff"}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{left: "5%", padding: 5}}>Contact  </Text>
                <TouchableOpacity
                    style={{
                        evelation: 8,
                        backgroundColor: '#555555',
                        borderRadius: 5,
                        left: "900%",
                    }}
                >
                    <Text style={{paddingTop: 2.5, paddingBottom: 2.5}}>  Edit  </Text>        
                </TouchableOpacity>
            </View>
            <View style={{left: "10%"}}>
                <Text style={{padding: 2.5}}>Name:      {name}</Text>
                <Text style={{padding: 2.5}}>Adresse:   {adr}</Text>
                <Text style={{padding: 2.5}}>Phone:     {tel}</Text>
            </View>
        </View>
    )
}

export const AboutProfileComp = ({name}) => {
    return (
        <View style={{borderWidth: 1, borderColor: "#ffffff"}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{left: "5%", padding: 5}}>{name}</Text>
                <TouchableOpacity
                    style={{
                        evelation: 8,
                        backgroundColor: '#555555',
                        borderRadius: 5,
                        left: "900%",
                    }}
                >
                    <Text style={{paddingTop: 2.5, paddingBottom: 2.5}}>  Edit  </Text>        
                </TouchableOpacity>
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

const ContentSkill = ({name}) => {
    return (
        <View style={{borderRadius: 5, backgroundColor: "#555555", padding: 5}}>
            <Text>{name}</Text>
        </View>
    )
}

const SkillsComp =({}) => {
    return (
        <View style={{borderWidth: 1, borderColor: "#ffffff"}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{left: "5%", padding: 5}}>Skills       </Text>
                <TouchableOpacity
                    style={{
                        evelation: 8,
                        backgroundColor: '#555555',
                        borderRadius: 5,
                        left: "900%",
                    }}
                >
                    <Text style={{paddingTop: 2.5, paddingBottom: 2.5}}>  Edit  </Text>        
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', left: "17%", paddingTop: 10, width: 340}}>
                <ContentSkill name={'Langage C'}/>
                <ContentSkill name={'   C#   '}/>
                <ContentSkill name={'JAVA'}/>
            </View>
        </View>
    )
}

const ProfileScreen = ({navigation}) => {
    return (
        <View>
            <Header name={'Profile'}/>
            <ProfileContentComp name={'Said YASSIN'} rank={'Gold'} border={require('../assets/gold_border.png')} logo={require('../assets/profile.png')}/>
            <ContactComp name={'Said YASSIN'} adr={'said.yassin@epitech.eu'} tel={'+262 692 12 34 56'}/>
            <AboutProfileComp name={'About Me'}/>
            <SkillsComp/>
        </View>
    );
};

export default ProfileScreen