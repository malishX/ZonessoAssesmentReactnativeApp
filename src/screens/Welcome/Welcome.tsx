import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/theme'
import { isImageSourcePropType } from '@/types/guards/image';
import { SafeScreen } from '@/components/template';
// import Images from '@/theme/Images';

import Welcome_Background from '@/theme/assets/images/welcome_background.png';
import { ImageVariant } from '@/components/atoms';
import CustomButtonGradient from '@/components/customButton/CustomButtonGradient';
import CustomButton from '@/components/customButton/CustomButton';
import CustomSocialButton from '@/components/customButton/CustomSocialButton';
import { FacebookIcon, GmailIcon, MailIcon } from '@/theme/assets/Svgs/Icons';
import { navigate } from '@/utils/RootNavigation';



const Welcome = () => {
	const { colors, variant, layout, gutters, fonts, backgrounds, borders, navigationTheme, components } = useTheme()

	if (
		!isImageSourcePropType(Welcome_Background)
	) {
		throw new Error('Image source is not valid');
	}
	return (
		<SafeScreen
			style={[layout.alignItemsCenter]}
		>
			<ImageVariant
				source={Welcome_Background}
			/>

			<CustomButtonGradient
				title='Create new Account'
				onPress={() => navigate('Tabs')}
				style={[gutters.marginTop_14, { width: '90%' }]}
			/>
			<CustomButton
				title='Sign up as a Business'
				onPress={() => console.log('Sign up as a Business')}
				style={[gutters.marginTop_14, { width: '90%' }]} type={''} disabled={false} isLoading={false} textStyle={undefined} IconLeft={undefined} styleText={undefined} customHeight={0} />
			<CustomSocialButton
				label={'Continue with Google'}
				style={[{ width: '90%', }, gutters.marginTop_14,]}
				SvgPath={<GmailIcon />} ImagePath={undefined} onPress={undefined} secondImagePath={undefined} />
			<CustomSocialButton
				label={'Continue with Facebook'}
				style={[{ width: '90%', }, gutters.marginTop_14,]}
				SvgPath={<FacebookIcon />} ImagePath={undefined} onPress={undefined} secondImagePath={undefined} />
			<CustomSocialButton
				label={'Continue with Email'}
				style={[{ width: '90%', }, gutters.marginTop_14,]}
				SvgPath={<MailIcon />} ImagePath={undefined} onPress={undefined} secondImagePath={undefined} />

			<Text style={[fonts.size_12, { color: colors.black }, gutters.marginTop_16]}>By signing up, you agree to our
				<Text style={[{ color: colors.danger500 }, fonts.bold]}>Terms of Service</Text> & <Text style={[{ color: colors.danger500 }, fonts.bold]}>Privacy Policy</Text></Text>
			<Text style={[{ color: colors.danger500, textDecorationLine: 'underline' }, gutters.marginTop_24, fonts.bold]} >Sign up later</Text>
			<Text style={[fonts.size_12, { color: colors.black }, gutters.marginTop_16]}>Already have an account?
				<Text style={[{ color: colors.danger500 }, fonts.bold]}> Log in</Text> </Text>
		</SafeScreen>
	)
}

export default Welcome

const styles = StyleSheet.create({})