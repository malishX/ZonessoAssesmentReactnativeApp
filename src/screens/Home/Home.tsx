import Header from '@/components/header/Header'
import { useTheme } from '@/theme'
import Boats from '@/theme/assets/images/boats.png'
import CarRecovery from '@/theme/assets/images/car_recovery.png'
import CarService from '@/theme/assets/images/carservice.png'
import CarWash from '@/theme/assets/images/carwash.png'
import MotorBike from '@/theme/assets/images/motorbikes.png'
import Motors from '@/theme/assets/images/motors.png'
import NumberPlates from '@/theme/assets/images/numberofplates.png'
import Partsandaccessories from '@/theme/assets/images/partsandaccessories.png'
import Showrooms from '@/theme/assets/images/showrooms.png'
import Slide from '@/theme/assets/images/slide.png'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ShowRoomsComponents from './components/ShowRoom/ShowRoomsComponents'
import TopSales from './components/TopSales/TopSales'
import TypeCard from './components/TypeCard'


const Home = () => {
	const action_list = [{ name: "Motors", image: Motors }, { name: 'Motorbikes', image: MotorBike },
	{ name: 'Showrooms', image: Showrooms }, { name: 'Parts & Accessories', image: Partsandaccessories },
	{ name: "Number Plates", image: NumberPlates }, { name: 'Car Service', image: CarService },
	{ name: 'Car Wash', image: CarWash }, { name: 'Car Recovery', image: CarRecovery }, { name: 'Boats', image: Boats }
	]
	const { layout, colors, gutters } = useTheme()
	return (
		<View>
			<Header/>
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={[layout.fill, gutters.marginHorizontal_14,]}>

				{/* action posts */}
				<View style={[layout.row, layout.flexWrap, layout.justifyContentBetween]}>
					{action_list.map((item, index) => {
						return (
							<TypeCard name={item.name} image={item.image} key={index} />
						)
					})}
				</View>
				{/* banner post */}
				<View style={[gutters.marginTop_24,]}>
				<Image source={Slide} resizeMode='contain' style={[{ width: '100%', }]} />
			</View>
			</View>
			
			<View style={{}}>
				<ShowRoomsComponents />
			</View>
			<View style={{}}>
				<TopSales />
			</View>

		</ScrollView>
		</View>
	)
}

export default Home

const styles = StyleSheet.create({})