import { useState } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './foryourestaurants.style'
import { COLORS,SIZES, images } from '../../../constants'
import fetchRisto from '../../../hook/fetchRisto'
import ForYouRestaurantCard from '../../common/cards/foryou/ForYouRestaurantCard'

const ForYouRestaurants = () => {
    const router = useRouter();
    // const { data, isLoading, error } = fetchRisto('searchRestaurants', {
    //     locationId: '187849',
    //     page: '1',
    // })
    const isLoading = false;
    const error = false;
    // creo un mini dataset perchè ho finito le call all'api
    const data = [
        {
            "restaurantId": 1,
            "establishmentTypeAndCuisineTags": ["INDIAN"],
            "name": "Ristorante Indiano Aangan",
            "parentGeoName": "Viale Monza 90, 20127 Milano",
            "averageRating": 8.9 / 2,
            "Number_of_Reviews": null,
            "Average_Price": 23.0,
            "squareImgUrl": images.rest1
        },
        {
            "restaurantId": 2,
            "establishmentTypeAndCuisineTags": ["FUSION"],
            "name": "Yummy Asian Fusion Cuisine",
            "parentGeoName": "Via Garigliano, 6, 20159, Milano",
            "averageRating": 8.9 / 2,
            "Number_of_Reviews": "1,649 reviews",
            "Average_Price": 25.0,
            "squareImgUrl": images.rest2
        },
        {
            "restaurantId": 3,
            "establishmentTypeAndCuisineTags": ["MILANESE", 'ITALIANO'],
            "name": "Officina del Riso Marghera",
            "parentGeoName": "Via Marghera, 29, 20149, Milano",
            "averageRating": 8.9 / 2,
            "Number_of_Reviews": "10,015 reviews",
            "Average_Price": 30.0,
            "squareImgUrl": images.rest3
        },
        {
            "restaurantId": 4,
            "establishmentTypeAndCuisineTags": ["Unknown"],
            "name": "Dinky",
            "parentGeoName": "Viale Brianza, 36, I-20127, Milano",
            "averageRating": 8.9 / 2,
            "Number_of_Reviews": "1,704 reviews",
            "Average_Price": 25.0,
            "squareImgUrl": images.rest4
        },
        {
            "restaurantId": 5,
            "establishmentTypeAndCuisineTags": ["ITALIAN"],
            "name": "Gaina Miscugli e Bolle",
            "parentGeoName": "Via Bartolomeo Eustachi, 25, 20129, Milano",
            "averageRating": 9.0 / 2,
            "Number_of_Reviews": "149 reviews",
            "Average_Price": 18.0,
            "squareImgUrl": images.rest5
        }
    ];
    
  return (
    <View>
        <View>
            <Text style={styles.headerTitle}>Consigliati per te</Text>
        </View>
      {
        isLoading ? (
        <ActivityIndicator 
            size="large" 
            color={COLORS.primary} />
        ) :
        error ? (
        <Text>Something went wrong</Text> 
        ) :
        <FlatList 
            data={ data }
            renderItem={({item}) => (
                <ForYouRestaurantCard item={ item } selectedRestaurant={item.restaurantId}/>
            )}
            keyExtractor={item => item?.restaurantsId}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
        />
      }
    </View>
  )
}

export default ForYouRestaurants