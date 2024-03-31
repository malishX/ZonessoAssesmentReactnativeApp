import CustomTouchableOpacity from '@/components/touchableOpacity/CustomTouchableOpacity'
import { useTheme } from '@/theme'
import { Back_Icon } from '@/theme/assets/Svgs/Icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HeaderFilter = ({
    onPressFilter
}: {
    onPressFilter: () => void
}) => {
    const { layout, colors, fonts, gutters } = useTheme()
    const navigation = useNavigation()
    return (
        <View style={[layout.row, layout.justifyContentBetween, gutters.marginHorizontal_16, gutters.marginTop_10, gutters.marginBottom_16,layout.alignItemsCenter]}>
            <View style={[layout.row, layout.alignItemsCenter]}>
                <CustomTouchableOpacity onPress={() => navigation.goBack()}>
                    <Back_Icon />
                </CustomTouchableOpacity>
                
            </View>
            <Text style={[{color:colors.gray600,},fonts.size_24,fonts.bold]}>
                Filter
            </Text>
            <View style={[layout.row]}>
                <CustomTouchableOpacity onPress={onPressFilter} style={[gutters.paddingHorizontal_10]}>
                <Text style={[{color:colors.danger500}]}>Reset</Text>
                </CustomTouchableOpacity>
            </View>
        </View>
    )
}

export default HeaderFilter

const styles = StyleSheet.create({})