import type { StackScreenProps } from '@react-navigation/stack';

export type ApplicationStackParamList = {
	Welcome: undefined;
	Tabs: undefined;
	Product_Filter: undefined;
	Chat_Room: undefined;
	Listing_Description:undefined;
};

export type ApplicationScreenProps =
	StackScreenProps<ApplicationStackParamList>;
