import CustomTouchableOpacity from '@/components/touchableOpacity/CustomTouchableOpacity'
import { useTheme } from '@/theme'
import Lamborghini_Pic from '@/theme/assets/images/dummy_home/Lamborghini_Pic.png'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'


const ShowRoomCard = ({
    index,
    onPress
}: {
    index: number,
    onPress: () => void
}) => {
    const { layout, colors, fonts, gutters } = useTheme()
    return (
        <CustomTouchableOpacity onPress={onPress} style={[index == 0 && gutters.marginLeft_24, gutters.marginRight_10, index == 9 && gutters.marginRight_14]}>
            <Image style={[{ width: 182, height: 120, borderRadius: 8 }]} source={Lamborghini_Pic} />
            <View style={[gutters.marginTop_10]}>
                <Text style={[{ color: colors.danger500, }, fonts.bold]}>AED 99,000</Text>
                <Text style={[{ color: colors.gray400, fontWeight: '400', marginTop:3}, fonts.size_11]}>Lamborghini . Avantador . V1</Text>
                <View style={[layout.row,layout.justifyContentBetween,{marginTop:5}]}>
                    <Text style={[fonts.size_10,{color:colors.gray200}]}>2023. 0 km</Text>
                    <Text style={[fonts.size_10,{color:colors.gray200}]}>1.2km away</Text>
                </View>
            </View>
        </CustomTouchableOpacity>
    )
}

export default ShowRoomCard

const styles = StyleSheet.create({})