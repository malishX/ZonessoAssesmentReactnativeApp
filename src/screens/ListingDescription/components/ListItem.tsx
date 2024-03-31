import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/theme'
import LineBreak from '@/components/CustomLineBreak/LineBreak'

const ListItem = ({
    item,
    value
}: {
    item: any,
    value: any
}) => {
    const { layout, colors, fonts, gutters } = useTheme()
    return (
        <>
        <View style={[layout.row,gutters.marginVertical_10]}>
            <View style={[{width:'50%'}]}>
                <Text style={[fonts.black,fonts.size_14]}>{item}</Text>
            </View>
            <View style={[{width:'50%'}]}>
                <Text style={[fonts.black,fonts.size_14]}>{value}</Text>
            </View>
        </View>
        <LineBreak/>
        </>
    )
}

export default ListItem

const styles = StyleSheet.create({})