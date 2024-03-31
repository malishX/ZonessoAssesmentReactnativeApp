import { useTheme } from '@/theme'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import HeaderFilter from './components/HeaderFilter'
import CustomListItem from '@/components/CustomListItem/CustomListItem'
import CustomRangeSlider from './components/CustomRangeSlider'
import Kayword from './components/Kayword'
import CustomCheckbox from '@/components/checkBox/CustomCheckBox'
import CustomButtonGradient from '@/components/customButton/CustomButtonGradient'

const ProductFilter = () => {
    const { layout, colors, fonts, gutters } = useTheme()
    return (
        <View style={{ flex: 1 }}>
            <HeaderFilter onPressFilter={() => { }} />
            <View style={[{ flex: 1 }]}>
                <ScrollView>
                    <CustomListItem
                        style={[gutters.marginTop_16, gutters.marginHorizontal_16]}
                        title='City'
                        value='Dubai'

                    />
                    <CustomListItem
                        style={[gutters.marginTop_16, gutters.marginHorizontal_16]}
                        title='Category'
                        value='Motores'

                    />
                    <View style={[gutters.marginHorizontal_16]}>
                        <CustomRangeSlider unit='AED' min={0} max={10000} heading='Price (AED)' style={{}} />
                    </View>
                    <Kayword />
                    <View style={[gutters.marginHorizontal_16]}>
                        <CustomRangeSlider unit='' min={1990} max={2024} heading='year' style={{}} />
                    </View>
                    <View style={[layout.row, layout.justifyContentBetween, gutters.marginHorizontal_16, gutters.marginTop_16]}>
                        <Text style={[fonts.bold, fonts.size_16, fonts.gray800]}>Show ads by verified users</Text>
                        <CustomCheckbox
                            value={false}
                            onValueChange={(value) => { console.log(value) }}
                        />
                    </View>
                </ScrollView>
            </View>
            <CustomButtonGradient
                title='Show 200 Results'
                style={[gutters.marginVertical_16, gutters.marginHorizontal_12,]} onPress={() => { }} textStyle={undefined} />
        </View>
    )
}

export default ProductFilter

const styles = StyleSheet.create({})