import React from 'react'
import { View, Text, TouchableOpacity, Image} from 'react-native'

import styles from './foryourestaurantcard.style'
import { icons } from '../../../../constants'

const ForYouRestaurantCard
 = ({ item, selectedRestaurant}) => {
  return (
    <TouchableOpacity 
        style={styles.container(selectedRestaurant, item)}
        onPress={()=>{}}
    >
        <TouchableOpacity style={styles.logoContainer(selectedRestaurant, item)}>
            <Image source={ item.squareImgUrl } resizeMode='contain' style={styles.logoImage}/>
        </TouchableOpacity>
        <View style={{justifyContent: 'space-between', display: 'flex',flexDirection: "row"}}>
            <Text style={styles.restaurantName(selectedRestaurant, item)} numberOfLines={1}>
                {item.name}
            </Text>
            <Text>
                <Image 
                source={icons.star}
                style={styles.starIcon}/>
                {item.averageRating}
            </Text> 
        </View>
        <View style={{display:'flex', flexDirection:'row', text:'align-center'}}>
            <Image source={icons.location} resizeMode='contain' style={styles.starIcon}/>
            <Text style={styles.location}>{item.parentGeoName}</Text>    
        </View>
        <View>
            <Text numberOfLines={1}>{item.establishmentTypeAndCuisineTags.map(type => (
                <Text>{type} </Text>
            ))}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ForYouRestaurantCard
