import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/theme'
import TopSalesCard from './TopSalesCard'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { PRODUCT_DETAILS } from '@/utils/Constants'

const TopSales = () => {
  const { layout, colors, gutters, fonts } = useTheme()
  const card_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const navigation = useNavigation()
  return (
    <View style={[gutters.marginVertical_24]}>
      <View style={[layout.row, layout.justifyContentBetween, gutters.marginHorizontal_24]}>
        <Text style={[{ fontSize: 16, }, fonts.bold, fonts.textblack]}>Top Sales</Text>
        <Text onPress={() => { navigation.navigate(PRODUCT_DETAILS as never) }} style={[{ color: colors.danger500 }]}>View all</Text>
      </View>
      <View style={{ width: '100%' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[gutters.marginTop_10,
          //  gutters.paddingHorizontal_24
        ]}>
          {card_arr.map((item, index) => {
            return <TopSalesCard onPress={() => { navigation.navigate(PRODUCT_DETAILS as never) }} index={index} key={index} />
          })}
        </ScrollView>
      </View>

    </View>
  )
}

export default TopSales

const styles = StyleSheet.create({})