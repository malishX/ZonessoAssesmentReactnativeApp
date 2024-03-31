import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/theme'
import CustomButton from '../customButton/CustomButton'
import CrossIcon from '@/theme/assets/images/filters/cross_icon.png'

const CustomTags = () => {
    const { layout, colors, fonts, gutters } = useTheme()
    return (
        <View style={[{ borderRadius: 15, borderWidth: 1, borderColor: colors.danger500,marginRight:5, flexWrap: 'wrap', padding:5,backgroundColor:colors.danger100}, layout.row,layout.alignItemsCenter, layout.justifyContentCenter]}>
            <Text style={[{color:colors.danger500,paddingRight:4},fonts.size_14]}>Avantedor</Text>
            <Image source={CrossIcon} />
        </View>
    )
}

export default CustomTags

const styles = StyleSheet.create({})