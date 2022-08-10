import * as React from 'react';
import { StyleSheet,View,rectangle, Button,TouchableOpacity, SafeAreaView, Text, Alert, ScrollView } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';


function HomeScreen() {
    return (
      
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
     
       <GradientButton text="Blue Marine" width='90%' blueMarine impact 
       onPressAction={() => alert('You pressed me!')}
       />
      <GradientButton
        style={{ marginVertical: 8 }}
        text="Gradient Button #1"
        textSyle={{ fontSize: 20 }}      
        gradientBegin="#874f00"
        gradientEnd="#f5ba57"
        gradientDirection="diagonal"
        height={60}
        width={300}
        radius={15}
        impact
        impactStyle='Light'
        onPressAction={() => alert('You pressed me!')}
      />
    </View>
    
    );
  }