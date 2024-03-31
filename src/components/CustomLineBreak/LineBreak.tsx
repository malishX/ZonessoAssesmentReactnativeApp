import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/theme'

const LineBreak = () => {
    const { layout, colors, fonts, gutters } = useTheme()
    return (
        <View style={[{ height: 2, width: '100%', backgroundColor: colors.gray200 }]} />
    )
}

export default LineBreak

const styles = StyleSheet.create({})