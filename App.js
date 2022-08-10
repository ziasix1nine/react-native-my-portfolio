import React,{useEffect,useRef} from 'react';
import { StyleSheet,View,Image,Linking,TouchableHighlight, Button,TouchableOpacity, SafeAreaView, Text, Alert, ScrollView } from 'react-native';
import ImagedCarouselCard from "react-native-imaged-carousel-card";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import GradientButton from 'react-native-gradient-buttons';
import ContactSVG from './assets/Contact.svg';
import SkillsScreen from './assets/SkillsScreen.svg';
import AnimationFile from './assets/Contact.js';
import Skills from './assets/Skills.json';
import Star from './assets/Star.js';
import LottieView from 'lottie-react-native';

function HomeScreen() {

  return (
    <ScrollView style={{backgroundColor:'#FFFFFF' }}>
    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center'}}>

<View style={{ flexDirection: "row",padding:15,marginTop:35, }}>

<TouchableHighlight
          style={[styles.profileImgContainer, { borderColor: '#0096FF', borderWidth:3 }]}
        >
    <Image source={{ uri:"https://cdn.dribbble.com/users/3669316/avatars/normal/1c8cf48a65d659eaaac7099fcf96c017.jpg?1622990539" }} style={styles.profileImg} />
</TouchableHighlight>
<View style={{ justifyContent: 'center', alignItems: 'left' }}>
<Text style={styles.header}>
      MD Ziauddin
    </Text>
    <View style={{ flexDirection: "row",justifyContent: 'center', alignItems: 'center' }}>
    <MaterialCommunityIcons name='target' color={'#0096FF'} size={22}/>
    <Text style={styles.subheader}>
      Front-End Software Engineer
    </Text>
    </View>
    </View>
</View>


<View style={{padding:8}}>
<View style={{ flexDirection: "row",justifyContent: 'left', alignItems: 'center',marginLeft:-3}}>
    <MaterialCommunityIcons name='star'  color={'#ffc900'} size={25}/>
    <Text style={styles.highlights}>
       Highlights
    </Text>
    </View>

    <View style={{ flexDirection: "row",justifyContent: 'left', alignItems: 'center' }}>
    <MaterialCommunityIcons name='check-circle' color={'#32CD32'} size={20}/>
    <Text style={styles.points}>
    9 years of total experience as a Designer and Developer (Office job + Remote job)
    </Text>
    </View>
    
    <View style={{ flexDirection: "row",justifyContent: 'left', alignItems: 'center' }}>
    <MaterialCommunityIcons name='check-circle' color={'#32CD32'} size={20}/>
    <Text style={styles.points}>
    4 years of full-time experience as a Software engineer and Designer
    </Text>
    </View>

    <View style={{ flexDirection: "row",justifyContent: 'left', alignItems: 'center' }}>
    <MaterialCommunityIcons name='check-circle' color={'#32CD32'} size={20}/>
    <Text style={styles.points}>
    Designer and Developer of DOB (Drivers on Booking) ride sharing app in Malaysia
    </Text>
    </View>

    <View style={{ flexDirection: "row",justifyContent: 'left', alignItems: 'center' }}>
    <MaterialCommunityIcons name='check-circle' color={'#32CD32'} size={20}/>
    <Text style={styles.points}>
    3 times award winning contestant on freelancer
    </Text>
    </View>

    <View style={{ flexDirection: "row",justifyContent: 'left', alignItems: 'center' }}>
    <MaterialCommunityIcons name='check-circle' color={'#32CD32'} size={20}/>
    <Text style={styles.points}>
    Experienced with cross-platform Mobile App Development (Android and ios app)
    </Text>
    </View>

    <View style={{ flexDirection: "row",justifyContent: 'left', alignItems: 'center' }}>
    <MaterialCommunityIcons name='check-circle' color={'#32CD32'} size={20}/>
    <Text style={styles.points}>
    Experienced with UI/UX Design and Front End Development
    </Text>
    </View>

    <View style={{ flexDirection: "row",justifyContent: 'left', alignItems: 'center' }}>
    <MaterialCommunityIcons name='check-circle' color={'#32CD32'} size={20}/>
    <Text style={styles.points}>
    Experienced with Graphics Design and Video Animation
    </Text>
    </View>

    <Text style={{padding:15,justifyContent:'center',textAlign:'justify',color:'gray'}}>
    Well proven analytical, communication and decision making skill with a ability to learn fast, 
innovate and problem solve under pressure
    </Text>

</View>

</View>
  </ScrollView>
  );
}


function PortFolio() {
  return (
    <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
     <SafeAreaView style={{backgroundColor:'#FFFFFF' }}>
     <Text style={{padding:25,fontWeight:'bold', fontSize:22,justifyContent:'center',textAlign:'center', alignItems:'center', marginTop:15}}>
     Some of My Recent Work! </Text>
     <ScrollView horizontal={true} style={{backgroundColor:'#FFFFFF' }}>

        <View
          style={{
            flexDirection: 'row',
            
            alignItems: "center",
            justifyContent: "center"
          }}
        >


          
      <View style={{ marginRight: 32,marginLeft:23 }}>
          <ImagedCarouselCard
            text='Admin Portal (Angular JS)'
            height={320}
            width={330}
            shadowColor="#051934"
            source={{
              uri:
                "https://cdn.dribbble.com/users/3669316/screenshots/16087815/media/ec6a630c7e4f0b4b89c7d3218580ee85.png"
            }}
          />
           </View>


          <View style={{ marginRight: 32,marginLeft:23 }}>
          <ImagedCarouselCard
            text='Web UI/UX'
            height={320}
            width={330}
            shadowColor="#051934"
            source={{
              uri:
                "https://cdn.dribbble.com/users/3669316/screenshots/15123880/media/1e1b9eca4ada1657de9e87a08d4db9bc.jpg"
            }}
          />
           </View>

           <View style={{ marginRight: 32,marginLeft:23 }}>
          <ImagedCarouselCard
            text='Desktop UI/UX'
            height={320}
            width={330}
            shadowColor="#051934"
            source={{
              uri:
                "https://cdn.dribbble.com/users/3669316/screenshots/11398932/media/197f1a38d5ec0066c942d67a3e5f56bc.png"
            }}
          />
           </View>


          <View style={{ marginRight: 32 }}>
            <ImagedCarouselCard
             text='Mobile App UI/UX'
             height={320}
             width={330}
              shadowColor="#051934"
              source={{
                uri:
                  "https://cdn.dribbble.com/users/3669316/screenshots/11355979/media/38314d7b7a91ae4e4033dffa929e6fd0.png"
              }}
            />
          </View>

          
          <View style={{ marginRight: 32 }}>
            <ImagedCarouselCard
             text='Mobile UI/UX'
             height={320}
             width={330}
              shadowColor="#051934"
              source={{
                uri:
                  "https://cdn.dribbble.com/users/3669316/screenshots/14893510/media/140f2ba89533b7b4c6971aaeb0e18875.jpg"
              }}
            />
          </View>

          
          <View style={{ marginRight: 32 }}>
            <ImagedCarouselCard
              text='Web UI/UX'
              height={320}
              width={330}
              shadowColor="#051934"
              source={{
                uri:
                  "https://cdn.dribbble.com/users/3669316/screenshots/14902343/media/0c1e3af6ac5907cafe7ffe93c0527829.jpg"
              }}
            />
          </View>

          <View style={{ marginRight: 32 }}>
            <ImagedCarouselCard
              text='Mobile UI/UX'
              height={320}
              width={330}
              shadowColor="#051934"
              source={{
                uri:
                  "https://cdn.dribbble.com/users/3669316/screenshots/11820445/media/de29dfd71273be4f252ad7f2571f2102.png"
              }}
            />
          </View>
          
        </View>
       </ScrollView>
       <View>

<Text style={{fontSize:16,justifyContent:'center',textAlign:'center', alignItems:'center',marginBottom:45,marginTop:15,color:'lightgray'}}>
     Slide left for more  </Text>
</View>
      </SafeAreaView>
    </View>
  );
}




function UserInterface() {
  return (
    <View style={styles.animationContainer}>
     <Text style={{fontSize:16,justifyContent:'center',textAlign:'center', alignItems:'center',marginBottom:45,marginTop:15,color:'lightgray'}}>
     This page is under Developement  </Text>
      </View>
  
  

    
  );
}



function Contact() {
  return (
    <ScrollView style={{backgroundColor:'#FFFFFF'}}>
    <SafeAreaView style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
          
         {/* <ContactSVG height={330} width={400}/> */}

         <AnimationFile></AnimationFile>
         
<View style={{ flexDirection: "row", alignItems: 'space-between' }}>


<MaterialCommunityIcons name='linkedin' color={'#0096FF'}  size={50} style={{marginRight:35}} onPress={() => Linking.openURL('https://www.linkedin.com/in/vmzia/')}></MaterialCommunityIcons>

<MaterialCommunityIcons name='facebook' color={'#0096FF'} size={50} style={{marginRight:35}} onPress={() => Linking.openURL('https://www.facebook.com/VmZia/')}></MaterialCommunityIcons>
<MaterialCommunityIcons name='github' color={'#0096FF'} size={50} onPress={() => Linking.openURL('https://github.com/ziasix1nine')}></MaterialCommunityIcons>

</View>

<GradientButton  style={{ marginVertical: 8,marginTop:35 }}
     tabBarIcon='check'
      text="WhatsApp"
      textSyle={{ fontSize: 20 }}      
      gradientBegin="#874f00"
      gradientEnd="#f5ba57"
      gradientDirection="diagonal"
      height={60}
      width={300}
      radius={15}
      impact
      blueMarine impact
      impactStyle='Light'
      onPressAction={() => Linking.openURL('https://api.whatsapp.com/send?phone=601131469930&text=Hi')}
    />
    
    <GradientButton
      style={{ marginVertical: 8 }}
      text="Call Now"
      textSyle={{ fontSize: 20 }}      
      gradientBegin="#874f00"
      gradientEnd="#f5ba57"
      gradientDirection="diagonal"
      height={60}
      width={300}
      radius={15}
      impact
      impactStyle='Light'
      blueViolet impact
      marginBottom={10}
      onPressAction={() => {Linking.openURL('tel:+601131469930');}}
    />


    </SafeAreaView>

    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>


      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarLabel:'Home',
        tabBarIcon:({color})=>(
          <MaterialCommunityIcons name='account-outline' color={color} size={26}/>
        
        ),
      }}
      
      />
       <Tab.Screen name="Portfolio"  component={PortFolio}
        options={{
          tabBarLabel:'Portfolio',
          tabBarIcon:({color})=>(
            <MaterialCommunityIcons name='briefcase-outline' color={color} size={26}/>
          
          ),
        }} />
        <Tab.Screen name="Skills"  component={UserInterface}
         options={{
          tabBarLabel:'Skills',
          tabBarIcon:({color})=>(
            <MaterialCommunityIcons name='lightbulb-outline' color={color} size={26}/>
          
          ),
        }} />
      <Tab.Screen name="Settings" component={Contact}
       options={{
        tabBarLabel:'Contact',
        backgroundColor:'#0096FF',
        tabBarIcon:({color})=>(
          <MaterialCommunityIcons name='chat-outline' color={color} size={26}/>
        
        ),
      }} />
    </Tab.Navigator>
  );
}



const styles = StyleSheet.create({



  profileImgContainer: {
    width: 100,
    height: 100,
    marginHorizontal:6,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red"
  },
  profileImg: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },

  header:{
    marginLeft:3,
    fontSize:16,
    fontWeight:'bold',
    textAlign: 'center',
    marginVertical: 4,
    
  },

  highlights:{
    
    fontSize:16,
    fontWeight:'bold',
    textAlign: 'left',
    flexDirection:'column',
    justifyContent:'flex-start',
    padding:5
  },


  subheader:{
    marginLeft:3,
    fontSize:12,
    textAlign: 'left',
    alignContent:'center',
    textAlignVertical:'center',
  
  },

  points:{
    marginLeft:3,
    fontSize:12,
    textAlign: 'left',
    padding:5
  
  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
    marginTop:45,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
