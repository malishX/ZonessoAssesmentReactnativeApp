import CustomButton from '@/components/customButton/CustomButton'
import CustomButtonGradient from '@/components/customButton/CustomButtonGradient'
import GradientText from '@/components/makedText/MaskedText'
import { useTheme } from '@/theme'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Banner from './Banner'
import LocationCard from './LocationCard'

const ProductMainCard = ({
    index
}: { index: number }) => {
    const { layout, colors, gutters, fonts } = useTheme()
    return (

        <View style={[gutters.marginBottom_10, { backgroundColor: colors.white }, gutters.paddingHorizontal_16, gutters.paddingVertical_10]}>
            <Banner index={index} />
            <Text style={[{ color: colors.red500, }, gutters.marginTop_12]}>
                <GradientText style={[fonts.bold, fonts.size_16]}>AED 99,000</GradientText>
            </Text>
            <Text style={[{ color: colors.gray800, fontWeight: '600', marginTop: 5 }, fonts.size_16]}>
                Lamborghini Aventador
            </Text>
            <Text style={[{ color: colors.gray600, fontWeight: '400', marginTop: 5 }, fonts.size_12]}>
                AVENTADOR S | INTERIOR CARBON | TWO TONE INTERIOR
            </Text>
            <Text style={[{ color: colors.gray600, fontWeight: '600', marginTop: 5 }, fonts.size_10]} >
                Year: <Text style={[{ fontWeight: '400' }]}>2024</Text>
            </Text>

            {/* location Card */}
            <LocationCard />
            <View style={[layout.row, layout.justifyContentAround]}>
                <CustomButton
                    title="Chat"
                    // type="secondary"
                    onPress={() => { }}
                    style={[gutters.marginTop_16, { borderWidth: 1, borderColor: colors.danger500, width: '48%', }]} type={''} disabled={false} isLoading={false} textStyle={undefined} IconLeft={undefined} styleText={undefined} customHeight={0} />
                <CustomButtonGradient
                    title="Call"
                    onPress={() => { }}
                    style={[gutters.marginTop_16, { width: '48%', }]} textStyle={undefined} />

            </View>
        </View>

    )
}

export default ProductMainCard

const styles = StyleSheet.create({})