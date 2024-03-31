import { useTheme } from '@/theme'
import { Down_Arrow_Icon, Search_Icon_1 } from '@/theme/assets/Svgs/Icons'
import Location from '@/theme/assets/images/header/Location.png'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Header = () => {
    const { layout, colors, fonts, gutters } = useTheme()
    return (
        <View style={[layout.row, layout.justifyContentBetween, gutters.marginHorizontal_16, gutters.marginTop_10, gutters.marginBottom_16]}>
            <View style={[layout.row, layout.alignItemsCenter]}>
                <Image source={Location} />
                <Text style={[gutters.marginHorizontal_10, { color: colors.black }]}>Dubai</Text>
                <Down_Arrow_Icon />
            </View>
            <View>
                <Search_Icon_1 />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})