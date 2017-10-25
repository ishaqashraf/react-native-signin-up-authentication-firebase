import React, { Component } from 'react';
import {
Text,
View
} from 'react-native';
import firebase from 'firebase';
import { Header,Button,Spinner,CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
 state = {
     loggedIn:null
 };
    componentWillMount()
    {
    firebase.initializeApp({
    apiKey: "AIzaSyBUeJD10guvan-_MCMoGdjgT1HKy7c46Ks",
    authDomain: "authentication-1f52d.firebaseapp.com",
    databaseURL: "https://authentication-1f52d.firebaseio.com",
    projectId: "authentication-1f52d",
    storageBucket: "authentication-1f52d.appspot.com",
    messagingSenderId: "489470991204"
    });

    firebase.auth().onAuthStateChanged((user) => {
        if(user){
            this.setState({ loggedIn:true});
        }else
        {
            this.setState({ loggedIn:false});
        }
    });
   }

   renderContent(){
    switch(this.state.loggedIn){
        case true:
          return (;,d,c;c,c,,,,vv ,vc vc ,vc ,vc.cv . /messagingSenderId';cxmlvmlvcm

            ds;,v,v
         <CardSection>
           <Button onPress={() => firebase.auth().signOut()}>
             Log Out
           </Button>
         </CardSection>
          );
          
        case false:
          return <LoginForm />;
        default:
          <Spinner size="large" />;

    }
}

    render(){
     return(
         <View>
             <Header headerText={'Login'}/>
             {this.renderContent()}
         </View>

     );
  }

}

export default App;