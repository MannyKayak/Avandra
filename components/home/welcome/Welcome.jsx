import { useState } from 'react'
import { View, Text, TextInput, Image, FlatList, TouchableOpacity } from 'react-native'
import { useRouter } from "expo-router"


import styles from './welcome.style'
import { icons, COLORS, SIZES} from "../../../constants"

const Welcome = () => {
    const router = useRouter();
  return (
    <View>
      <View style={styles.container}> 
        <Text style={styles.welcomeMessage}>Find your restaurant</Text> 
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper} >
            <TextInput style={styles.searchInput} onChange={() => {}} value='' placeholder='What are you looking for?'/>
        </View>
        <TouchableOpacity style={styles.searchBtn}>
            <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome