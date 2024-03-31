import GradientText from '@/components/makedText/MaskedText'
import { useTheme } from '@/theme'
import { PRODUCT_FILTER } from '@/utils/Constants'
import { navigate } from '@/utils/RootNavigation'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Banner from './components/Banner'
import HeaderProduct from './components/HeaderProduct'
import LocationCard from './components/LocationCard'
import CustomButton from '@/components/customButton/CustomButton'
import CustomButtonGradient from '@/components/customButton/CustomButtonGradient'
import ProductMainCard from './components/ProductMainCard'

const ProductDetails = () => {
    const { layout, colors, gutters, fonts } = useTheme()
    // const nav
    const arr = [1, 2, 3,]
    return (
        <View>
            <HeaderProduct
                onPressFilter={() => navigate(PRODUCT_FILTER)}
            />
            <ScrollView>
                <View style={[gutters.marginBottom_40]}>
                    <Text style={[fonts.size_16, { color: colors.gray600 }, gutters.paddingHorizontal_16,,fonts.bold, gutters.marginTop_16, gutters.marginBottom_10]}>Showing
                        <Text style={[{ color: colors.danger500 }, fonts.bold]}> 200</Text> results in Dubai </Text>
                    <View style={{ backgroundColor: colors.gray200 }}>
                        {
                            arr.map((item, index) => (
                                <ProductMainCard index={index}  key={index} />
                            ))
                        }
                    </View>
                </View>
            </ScrollView>


        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({})