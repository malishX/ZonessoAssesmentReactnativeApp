import { useTheme } from '@/theme'
import Toyota_Pic from '@/theme/assets/images/dummy_home/Toyota_Pic.png'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const LocationCard = () => {
    const { layout, colors, fonts, gutters } = useTheme()
    return (
        <View style={[gutters.marginTop_16,layout.row]}>
            <Image style={[{ width: 48, height: 48, borderRadius: 4 }]} source={Toyota_Pic} />
            <View style={[gutters.marginLeft_10]}>
                <Text style={[fonts.size_10,fonts.bold,{color:colors.gray600}]}>Location:<Text style={[{fontWeight:'300'}]}> Deira, Dubai, United Arab Emirates</Text></Text>
                <Text style={[fonts.size_10,fonts.bold,{color:colors.gray600}]}>Posted on:<Text style={[{fontWeight:'300'}]}> 14/3/24</Text></Text>
                <Text style={[fonts.size_10,fonts.bold,{color:colors.gray600}]}>Posted By:<Text style={[{fontWeight:'300'}]}>  Toyota Motors</Text></Text>
          
            </View>
        </View>
    )
}

export default LocationCard

const styles = StyleSheet.create({})