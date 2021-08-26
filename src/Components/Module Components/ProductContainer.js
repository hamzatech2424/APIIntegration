import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native' 




const ProductContainer = ({PropData,del}) => {
    return(

        <View style={{backgroundColor:'#93B5C6',height:250,width:200,margin:2,justifyContent:'space-between',alignItems:'center'}}>

        <View style={{width:'90%',height:'60%'}}>
             <Image resizeMode={'center'} source={{uri:PropData.image}} style={{width:'100%',height:'100%'}} />
        </View>
        <View style={{width:'90%',height:'30%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'white'}} numberOfLines={1}>Title:{PropData.title}</Text>
            <Text style={{color:'orange'}}>Price:${PropData.price}</Text>

            <TouchableOpacity
            onPress={()=>{del(PropData.id)}}
             style={{backgroundColor:'red',width:'80%',height:20,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'white'}}>Delete</Text>
            </TouchableOpacity>

        </View>

    </View>

    )
}

export default ProductContainer