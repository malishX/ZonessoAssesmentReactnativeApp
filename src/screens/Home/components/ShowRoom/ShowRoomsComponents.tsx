import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/theme'
import ShowRoomCard from './ShowRoomCard'
import { ScrollView } from 'react-native-gesture-handler'

const ShowRoomsComponents = () => {
    const { layout, colors, gutters, fonts } = useTheme()
    const card_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <View style={[gutters.marginVertical_24]}>
            <View style={[layout.row, layout.justifyContentBetween, gutters.marginHorizontal_24]}>
                <Text style={[{ fontSize: 16, }, fonts.bold, fonts.textblack]}>Top Showrooms</Text>
                <Text  onPress={()=>{console.log("pressed View all")}} style={[{ color: colors.danger500 }]}>View all</Text>
            </View>
            <View style={{width:'100%'}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[gutters.marginTop_10,
                    //  gutters.paddingHorizontal_24
                     ]}>
                    {card_arr.map((item, index) => {
                        return <ShowRoomCard onPress={()=>{console.log("6789")}} index={index} key={index} />
                    })}
                </ScrollView>
            </View>
            
        </View>
    )
}

export default ShowRoomsComponents

const styles = StyleSheet.create({})