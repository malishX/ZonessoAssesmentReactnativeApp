import CustomTouchableOpacity from '@/components/touchableOpacity/CustomTouchableOpacity'
import { useTheme } from '@/theme'
import { Back_Icon, Down_Arrow_Icon, Filter_Icon_Black, Heart_Icon_Black, Search_Icon_1 } from '@/theme/assets/Svgs/Icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HeaderProduct = ({
    onPressFilter
}: {
    onPressFilter: () => void
}) => {
    const { layout, colors, fonts, gutters } = useTheme()
    const navigation = useNavigation()
    return (
        <View style={[layout.row, layout.justifyContentBetween, gutters.marginHorizontal_16, gutters.marginTop_10, gutters.marginBottom_16]}>
            <View style={[layout.row, layout.alignItemsCenter]}>
                <CustomTouchableOpacity onPress={() => navigation.goBack()}>
                    <Back_Icon />
                </CustomTouchableOpacity>
                <Text style={[gutters.marginHorizontal_10, { color: colors.black }]}>Dubai</Text>
                <Down_Arrow_Icon />
            </View>
            <View style={[layout.row]}>
                <Search_Icon_1 />
                <CustomTouchableOpacity onPress={onPressFilter} style={[gutters.paddingHorizontal_10]}>
                    <Filter_Icon_Black />
                </CustomTouchableOpacity>
                <Heart_Icon_Black />
            </View>
        </View>
    )
}

export default HeaderProduct

const styles = StyleSheet.create({})