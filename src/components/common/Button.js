import React,{ Component } from 'react';
import {
Text,
TouchableOpacity
} from 'react-native';


const Button = ({onPress,children}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>
                {children}
            </Text>  
        </TouchableOpacity>
              
    );
};

const styles = {
    textStyle:{
     alignSelf:'center',
     color:'#29C9DC',
     fontSize:16,
     fontWeight:'600'
    },
    buttonStyle:{
     flex:1,
     alignSelf:'stretch',
     backgroundColor:'#808080',
     borderRadius:5,
     borderWidth:1,
     borderColor:'#29C9DC',
     marginLeft:5,
     marginRight:5,
     padding:10

    }

}


export { Button };