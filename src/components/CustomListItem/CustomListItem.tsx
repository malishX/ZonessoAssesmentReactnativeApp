import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/theme'
import { Arrow_Right_Icon } from '@/theme/assets/Svgs/Icons'
import LineBreak from '../CustomLineBreak/LineBreak'

const CustomListItem = ({
    title,
    value,
    showArrow=true,
    style
}: {
    title: string,
    value: string,
    showArrow?: boolean,
    style: any
}) => {
    const { layout, colors, fonts, gutters } = useTheme()
    return (
        <>
        <View style={style}>
            <View style={[layout.row, layout.justifyContentBetween,gutters.marginBottom_16]}>
                <Text style={[{ color: colors.black, }, fonts.size_16, fonts.bold]}>{title}</Text>
                <View style={[layout.row, layout.alignItemsCenter]}>
                    <Text style={[{ color: colors.gray600, }, gutters.marginHorizontal_16]}>{value}</Text>
                  {showArrow &&  <Arrow_Right_Icon />}
                </View>
            </View>
            <LineBreak />
            </View>
        </>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})