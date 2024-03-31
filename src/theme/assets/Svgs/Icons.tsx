import React from 'react';
import Svg, {
  Circle,
  Defs,
  Path,
  G,
  ClipPath,
  Rect,
  Line,
  Polygon,
  LinearGradient,
  Stop,
} from 'react-native-svg';
interface AppleProps {
  style?: any;
  stroke?: any;
  onPress?: any;
}
const FacebookIcon = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0_98_747)">
        <Path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#1877F2" />
        <Path d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z" fill="white" />
      </G>
      <Defs>
        <ClipPath id="clip0_98_747">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
const GmailIcon = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0_98_8)">
        <Path d="M23.766 12.2763C23.766 11.4605 23.6999 10.6404 23.5588 9.83789H12.24V14.4589H18.7217C18.4528 15.9492 17.5885 17.2676 16.323 18.1054V21.1037H20.19C22.4608 19.0137 23.766 15.9272 23.766 12.2763Z" fill="#4285F4" />
        <Path d="M12.24 24.0008C15.4764 24.0008 18.2058 22.9382 20.1944 21.1039L16.3274 18.1055C15.2516 18.8375 13.8626 19.252 12.2444 19.252C9.11376 19.252 6.45934 17.1399 5.50693 14.3003H1.51648V17.3912C3.55359 21.4434 7.70278 24.0008 12.24 24.0008Z" fill="#34A853" />
        <Path d="M5.50253 14.3002C4.99987 12.8099 4.99987 11.196 5.50253 9.70569V6.61475H1.51649C-0.18551 10.0055 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3002Z" fill="#FBBC04" />
        <Path d="M12.24 4.74966C13.9508 4.7232 15.6043 5.36697 16.8433 6.54867L20.2694 3.12262C18.1 1.0855 15.2207 -0.034466 12.24 0.000808666C7.70277 0.000808666 3.55359 2.55822 1.51648 6.61481L5.50252 9.70575C6.45052 6.86173 9.10935 4.74966 12.24 4.74966Z" fill="#EA4335" />
      </G>
      <Defs>
        <ClipPath id="clip0_98_8">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>

  );
};
const MailIcon = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>


  );
};
const Location_Icon = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 9.41667C0.25 4.62281 4.17493 0.75 9 0.75C13.8251 0.75 17.75 4.62281 17.75 9.41667C17.75 12.3982 16.0113 15.3409 14.1686 17.4829C13.236 18.5669 12.2463 19.482 11.3733 20.1328C10.9374 20.4577 10.5186 20.7258 10.1405 20.9162C9.78602 21.0947 9.38124 21.25 9 21.25C8.61876 21.25 8.21398 21.0947 7.85954 20.9162C7.48144 20.7258 7.06256 20.4577 6.62674 20.1328C5.75371 19.482 4.76395 18.5669 3.83144 17.4829C1.98872 15.3409 0.25 12.3982 0.25 9.41667ZM9 12C7.34315 12 6 10.6569 6 9C6 7.34315 7.34315 6 9 6C10.6569 6 12 7.34315 12 9C12 10.6569 10.6569 12 9 12Z" fill="url(#paint0_linear_98_14)" />
      <Defs>
        <LinearGradient id="paint0_linear_98_14" x1="0.25" y1="21.25" x2="17.75" y2="21.25" gradientUnits="userSpaceOnUse">
          <Stop stop-color="#F06100" />
          <Stop offset="0.25" stop-color="#F04900" />
          <Stop offset="0.5" stop-color="#F03000" />
          <Stop offset="0.75" stop-color="#F00030" />
          <Stop offset="1" stop-color="#F0006D" />
        </LinearGradient>
      </Defs>
    </Svg>

  );
};

const Search_Icon_1 = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM10.0866 7.3806C10.6932 7.12933 11.3434 7 12 7C12.2761 7 12.5 6.77614 12.5 6.5C12.5 6.22386 12.2761 6 12 6C11.2121 6 10.4319 6.15519 9.7039 6.45672C8.97595 6.75825 8.31451 7.20021 7.75736 7.75736C7.20021 8.31451 6.75825 8.97595 6.45672 9.7039C6.15519 10.4319 6 11.2121 6 12C6 12.2761 6.22386 12.5 6.5 12.5C6.77614 12.5 7 12.2761 7 12C7 11.3434 7.12933 10.6932 7.3806 10.0866C7.63188 9.47996 8.00017 8.92876 8.46447 8.46447C8.92876 8.00017 9.47995 7.63188 10.0866 7.3806Z" fill="#7E869E" fill-opacity="0.25" />
      <Path d="M20.5 20.5L17 17" stroke="#222222" stroke-linecap="round" />
      <Circle cx="11" cy="11" r="8" stroke="#222222" stroke-width="2" />
    </Svg>

  );
};
const Down_Arrow_Icon = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M2.80793 3.76953L0.760113 1.31215C0.325895 0.791086 0.69642 4.50124e-08 1.37469 7.46605e-08L4.62529 2.16749e-07C5.30356 2.46397e-07 5.67409 0.791086 5.23987 1.31215L3.19205 3.76953C3.0921 3.88947 2.90788 3.88947 2.80793 3.76953Z" fill="#222222" />
    </Svg>


  );
};
const Home_Icon_Red = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M6.66666 17.0127C6.66666 15.2024 6.66666 14.2972 7.0326 13.5016C7.39855 12.7059 8.08581 12.1168 9.46033 10.9387L10.7937 9.79582C13.2781 7.66632 14.5203 6.60156 16 6.60156C17.4797 6.60156 18.7219 7.66632 21.2063 9.79582L22.5397 10.9387C23.9142 12.1168 24.6014 12.7059 24.9674 13.5016C25.3333 14.2972 25.3333 15.2024 25.3333 17.0127V22.6666C25.3333 25.1807 25.3333 26.4378 24.5523 27.2189C23.7712 27.9999 22.5141 27.9999 20 27.9999H12C9.48583 27.9999 8.22875 27.9999 7.44771 27.2189C6.66666 26.4378 6.66666 25.1807 6.66666 22.6666V17.0127Z" stroke="#F04438" stroke-width="2" />
      <Path d="M19.3333 28V21C19.3333 20.4477 18.8856 20 18.3333 20H13.6667C13.1144 20 12.6667 20.4477 12.6667 21V28" stroke="#F04438" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>

  );
};
const Home_Icon_Black = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M6.66666 17.0127C6.66666 15.2024 6.66666 14.2972 7.0326 13.5016C7.39855 12.7059 8.08581 12.1168 9.46033 10.9387L10.7937 9.79582C13.2781 7.66632 14.5203 6.60156 16 6.60156C17.4797 6.60156 18.7219 7.66632 21.2063 9.79582L22.5397 10.9387C23.9142 12.1168 24.6014 12.7059 24.9674 13.5016C25.3333 14.2972 25.3333 15.2024 25.3333 17.0127V22.6666C25.3333 25.1807 25.3333 26.4378 24.5523 27.2189C23.7712 27.9999 22.5141 27.9999 20 27.9999H12C9.48583 27.9999 8.22875 27.9999 7.44771 27.2189C6.66666 26.4378 6.66666 25.1807 6.66666 22.6666V17.0127Z" stroke="#101828" stroke-width="2" />
      <Path d="M19.3333 28V21C19.3333 20.4477 18.8856 20 18.3333 20H13.6667C13.1144 20 12.6667 20.4477 12.6667 21V28" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>

  );
};
const Bell_Icon_Black = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M7.04785 7.96942C7.36219 5.14032 9.7535 3 12.6 3V3C15.4465 3 17.8378 5.14032 18.1522 7.96942L18.404 10.2356C18.4072 10.2645 18.4088 10.279 18.4104 10.2933C18.5394 11.4169 18.9051 12.5005 19.4836 13.4725C19.4909 13.4849 19.4984 13.4973 19.5134 13.5222L20.0914 14.4856C20.6159 15.3599 20.8782 15.797 20.8216 16.1559C20.7839 16.3946 20.661 16.6117 20.4757 16.7668C20.1971 17 19.6873 17 18.6678 17H6.53224C5.51269 17 5.00292 17 4.72434 16.7668C4.53898 16.6117 4.41609 16.3946 4.37842 16.1559C4.3218 15.797 4.58407 15.3599 5.10863 14.4856L5.68666 13.5222C5.70162 13.4973 5.70909 13.4849 5.71645 13.4725C6.29489 12.5005 6.66065 11.4169 6.78959 10.2933C6.79123 10.279 6.79284 10.2645 6.79605 10.2356L7.04785 7.96942Z" stroke="#101828" stroke-width="2" />
      <Path d="M8.60001 17C8.60001 17.5253 8.70347 18.0454 8.90449 18.5307C9.10551 19.016 9.40014 19.457 9.77158 19.8284C10.143 20.1999 10.584 20.4945 11.0693 20.6955C11.5546 20.8965 12.0747 21 12.6 21C13.1253 21 13.6454 20.8965 14.1307 20.6955C14.616 20.4945 15.057 20.1999 15.4284 19.8284C15.7999 19.457 16.0945 19.016 16.2955 18.5307C16.4965 18.0454 16.6 17.5253 16.6 17" stroke="#101828" stroke-width="2" stroke-linecap="round" />
    </Svg>
  );
};
const Bell_Icon_Red = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M7.04785 7.96942C7.36219 5.14032 9.7535 3 12.6 3V3C15.4465 3 17.8378 5.14032 18.1522 7.96942L18.404 10.2356C18.4072 10.2645 18.4088 10.279 18.4104 10.2933C18.5394 11.4169 18.9051 12.5005 19.4836 13.4725C19.4909 13.4849 19.4984 13.4973 19.5134 13.5222L20.0914 14.4856C20.6159 15.3599 20.8782 15.797 20.8216 16.1559C20.7839 16.3946 20.661 16.6117 20.4757 16.7668C20.1971 17 19.6873 17 18.6678 17H6.53224C5.51269 17 5.00292 17 4.72434 16.7668C4.53898 16.6117 4.41609 16.3946 4.37842 16.1559C4.3218 15.797 4.58407 15.3599 5.10863 14.4856L5.68666 13.5222C5.70162 13.4973 5.70909 13.4849 5.71645 13.4725C6.29489 12.5005 6.66065 11.4169 6.78959 10.2933C6.79123 10.279 6.79284 10.2645 6.79605 10.2356L7.04785 7.96942Z" stroke="#F04438" stroke-width="2" />
      <Path d="M8.60001 17C8.60001 17.5253 8.70347 18.0454 8.90449 18.5307C9.10551 19.016 9.40014 19.457 9.77158 19.8284C10.143 20.1999 10.584 20.4945 11.0693 20.6955C11.5546 20.8965 12.0747 21 12.6 21C13.1253 21 13.6454 20.8965 14.1307 20.6955C14.616 20.4945 15.057 20.1999 15.4284 19.8284C15.7999 19.457 16.0945 19.016 16.2955 18.5307C16.4965 18.0454 16.6 17.5253 16.6 17" stroke="#F04438" stroke-width="2" stroke-linecap="round" />
    </Svg>
  );
};
const Messsage_Icon_Red = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M21.2001 11.5C21.2035 12.8199 20.8951 14.1219 20.3001 15.3C19.5945 16.7118 18.5098 17.8992 17.1675 18.7293C15.8252 19.5594 14.2783 19.9994 12.7001 20C11.3802 20.0035 10.0782 19.6951 8.90007 19.1L3.20007 21L5.10007 15.3C4.505 14.1219 4.19663 12.8199 4.20007 11.5C4.20068 9.92179 4.64069 8.37488 5.47079 7.03258C6.3009 5.69028 7.48833 4.6056 8.90007 3.90003C10.0782 3.30496 11.3802 2.99659 12.7001 3.00003H13.2001C15.2844 3.11502 17.2531 3.99479 18.7292 5.47089C20.2053 6.94699 21.0851 8.91568 21.2001 11V11.5Z" stroke="#F04438" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>

  );
};
const Messsage_Icon_Black = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M21.2001 11.5C21.2035 12.8199 20.8951 14.1219 20.3001 15.3C19.5945 16.7118 18.5098 17.8992 17.1675 18.7293C15.8252 19.5594 14.2783 19.9994 12.7001 20C11.3802 20.0035 10.0782 19.6951 8.90007 19.1L3.20007 21L5.10007 15.3C4.505 14.1219 4.19663 12.8199 4.20007 11.5C4.20068 9.92179 4.64069 8.37488 5.47079 7.03258C6.3009 5.69028 7.48833 4.6056 8.90007 3.90003C10.0782 3.30496 11.3802 2.99659 12.7001 3.00003H13.2001C15.2844 3.11502 17.2531 3.99479 18.7292 5.47089C20.2053 6.94699 21.0851 8.91568 21.2001 11V11.5Z" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>

  );
};
const User_Icon_Black = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Circle cx="12.2001" cy="7" r="4" stroke="#101828" stroke-width="2" stroke-linecap="round" />
      <Path d="M5.53796 18.3206C6.19904 15.5269 8.9718 14 11.8427 14H12.5575C15.4283 14 18.2011 15.5269 18.8622 18.3206C18.9901 18.8611 19.0918 19.4268 19.149 20.0016C19.2037 20.5512 18.7524 21 18.2001 21H6.20007C5.64779 21 5.19649 20.5512 5.25118 20.0016C5.30838 19.4268 5.41004 18.8611 5.53796 18.3206Z" stroke="#101828" stroke-width="2" stroke-linecap="round" />
    </Svg>

  );
};
const User_Icon_Red = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Circle cx="12.2001" cy="7" r="4" stroke="#F04438" stroke-width="2" stroke-linecap="round" />
      <Path d="M5.53796 18.3206C6.19904 15.5269 8.9718 14 11.8427 14H12.5575C15.4283 14 18.2011 15.5269 18.8622 18.3206C18.9901 18.8611 19.0918 19.4268 19.149 20.0016C19.2037 20.5512 18.7524 21 18.2001 21H6.20007C5.64779 21 5.19649 20.5512 5.25118 20.0016C5.30838 19.4268 5.41004 18.8611 5.53796 18.3206Z" stroke="#F04438" stroke-width="2" stroke-linecap="round" />
    </Svg>

  );
};
const Add_Post_Icon_Red = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Circle cx="24.2" cy="24" r="18" fill="url(#paint0_linear_1_1481)" />
      <Path d="M24.2 30L24.2 18" stroke="white" stroke-width="2" stroke-linecap="square" />
      <Path d="M30.2 24L18.2 24" stroke="white" stroke-width="2" stroke-linecap="square" />
      <Defs>
        <LinearGradient id="paint0_linear_1_1481" x1="42.2" y1="6" x2="6.20001" y2="42" gradientUnits="userSpaceOnUse">
          <Stop stop-color="#FD312C" />
          <Stop offset="0.5" stop-color="#FD372F" />
          <Stop offset="1" stop-color="#FC573D" />
        </LinearGradient>
      </Defs>
    </Svg>

  );
};
const Back_Icon = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M2 9.125L1.19126 8.53683L0.763503 9.125L1.19126 9.71317L2 9.125ZM17 10.125C17.5523 10.125 18 9.67729 18 9.125C18 8.57272 17.5523 8.125 17 8.125V10.125ZM7.19126 0.286828L1.19126 8.53683L2.80874 9.71317L8.80874 1.46317L7.19126 0.286828ZM1.19126 9.71317L7.19126 17.9632L8.80874 16.7868L2.80874 8.53683L1.19126 9.71317ZM2 10.125H17V8.125H2V10.125Z" fill="#33363F" />
    </Svg>

  );
};
const Filter_Icon_Black = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="24" height="24" style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M5 12L5 4" stroke="#667085" stroke-width="2" stroke-linecap="round" />
      <Path d="M19 20L19 18" stroke="#667085" stroke-width="2" stroke-linecap="round" />
      <Path d="M5 20L5 16" stroke="#667085" stroke-width="2" stroke-linecap="round" />
      <Path d="M19 12L19 4" stroke="#667085" stroke-width="2" stroke-linecap="round" />
      <Path d="M12 7L12 4" stroke="#667085" stroke-width="2" stroke-linecap="round" />
      <Path d="M12 20L12 12" stroke="#667085" stroke-width="2" stroke-linecap="round" />
      <Circle cx="5" cy="14" r="2" stroke="#667085" stroke-width="2" stroke-linecap="round" />
      <Circle cx="12" cy="9" r="2" stroke="#667085" stroke-width="2" stroke-linecap="round" />
      <Circle cx="19" cy="15" r="2" stroke="#667085" stroke-width="2" stroke-linecap="round" />
    </Svg>

  );
};
const Heart_Icon_Black = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M20.84 4.60987C20.3292 4.09888 19.7228 3.69352 19.0554 3.41696C18.3879 3.14039 17.6725 2.99805 16.95 2.99805C16.2275 2.99805 15.5121 3.14039 14.8446 3.41696C14.1772 3.69352 13.5708 4.09888 13.06 4.60987L12 5.66987L10.94 4.60987C9.9083 3.57818 8.50903 2.99858 7.05 2.99858C5.59096 2.99858 4.19169 3.57818 3.16 4.60987C2.1283 5.64156 1.54871 7.04084 1.54871 8.49987C1.54871 9.95891 2.1283 11.3582 3.16 12.3899L4.22 13.4499L12 21.2299L19.78 13.4499L20.84 12.3899C21.351 11.8791 21.7563 11.2727 22.0329 10.6052C22.3095 9.93777 22.4518 9.22236 22.4518 8.49987C22.4518 7.77738 22.3095 7.06198 22.0329 6.39452C21.7563 5.72706 21.351 5.12063 20.84 4.60987V4.60987Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>

  );
};
const Heart_Icon_White = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M20.84 4.60987C20.3292 4.09888 19.7228 3.69352 19.0554 3.41696C18.3879 3.14039 17.6725 2.99805 16.95 2.99805C16.2275 2.99805 15.5121 3.14039 14.8446 3.41696C14.1772 3.69352 13.5708 4.09888 13.06 4.60987L12 5.66987L10.94 4.60987C9.9083 3.57818 8.50903 2.99858 7.05 2.99858C5.59096 2.99858 4.19169 3.57818 3.16 4.60987C2.1283 5.64156 1.54871 7.04084 1.54871 8.49987C1.54871 9.95891 2.1283 11.3582 3.16 12.3899L4.22 13.4499L12 21.2299L19.78 13.4499L20.84 12.3899C21.351 11.8791 21.7563 11.2727 22.0329 10.6052C22.3095 9.93777 22.4518 9.22236 22.4518 8.49987C22.4518 7.77738 22.3095 7.06198 22.0329 6.39452C21.7563 5.72706 21.351 5.12063 20.84 4.60987V4.60987Z" stroke="#FFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>

  );
};
const Share_Icon_White = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5ZM9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12ZM21 19C21 20.6569 19.6569 22 18 22C16.3431 22 15 20.6569 15 19C15 17.3431 16.3431 16 18 16C19.6569 16 21 17.3431 21 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
};
const Arrow_Right_Icon = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M1 13L7 7L1 1" stroke="#475467" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
};
const Search_Icon_2 = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Circle cx="11" cy="11" r="7" stroke="#98A2B3" stroke-width="2" />
      <Path d="M20 20L17 17" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" />
    </Svg>
  );
};
const Tick_Icon_black = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z" /></Svg>
  );
};
const Mail_Icon_2 = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Circle cx="20" cy="20" r="20" fill="#FECDCA" />
      <Path d="M12 17.4721C12 16.2693 12 15.6679 12.2987 15.1846C12.5974 14.7013 13.1353 14.4323 14.2111 13.8944L18.2111 11.8944C19.089 11.4555 19.5279 11.2361 20 11.2361C20.4721 11.2361 20.911 11.4555 21.7889 11.8944L25.7889 13.8944C26.8647 14.4323 27.4026 14.7013 27.7013 15.1846C28 15.6679 28 16.2693 28 17.4721V23C28 24.8856 28 25.8284 27.4142 26.4142C26.8284 27 25.8856 27 24 27H16C14.1144 27 13.1716 27 12.5858 26.4142C12 25.8284 12 24.8856 12 23V17.4721Z" stroke="#222222" stroke-width="2" />
      <Path d="M14.4142 20.4142L12 18V25C12 26.1046 12.8954 27 14 27H26C27.1046 27 28 26.1046 28 25V18L25.5858 20.4142C25.2107 20.7893 24.702 21 24.1716 21H15.8284C15.298 21 14.7893 20.7893 14.4142 20.4142Z" fill="#7E869E" fill-opacity="0.25" stroke="#222222" stroke-width="2" stroke-linecap="round" />
    </Svg>
  );
};
const Call_Icon_2 = ({ style, stroke, onPress }: AppleProps) => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle cx="20" cy="20" r="20" fill="#FECDCA"/>
    <Path d="M25.7071 21.7071L28.3552 24.3552C28.7113 24.7113 28.7113 25.2887 28.3552 25.6448C26.43 27.57 23.3821 27.7866 21.204 26.153L19.6286 24.9714C17.885 23.6638 16.3362 22.115 15.0286 20.3714L13.847 18.796C12.2134 16.6179 12.43 13.57 14.3552 11.6448C14.7113 11.2887 15.2887 11.2887 15.6448 11.6448L18.2929 14.2929C18.6834 14.6834 18.6834 15.3166 18.2929 15.7071L17.2717 16.7283C17.1095 16.8905 17.0692 17.1385 17.1719 17.3437C18.3585 19.7171 20.2829 21.6415 22.6563 22.8281C22.8615 22.9308 23.1095 22.8905 23.2717 22.7283L24.2929 21.7071C24.6834 21.3166 25.3166 21.3166 25.7071 21.7071Z" stroke="#33363F" stroke-width="2"/>
    </Svg>
    
  );
};


export {
  FacebookIcon,
  GmailIcon,
  MailIcon,
  Location_Icon,
  Search_Icon_1,
  Down_Arrow_Icon,

  // bottom tabs icons
  Home_Icon_Red,
  Home_Icon_Black,
  Bell_Icon_Black,
  Bell_Icon_Red,
  Messsage_Icon_Red,
  Messsage_Icon_Black,
  User_Icon_Black,
  User_Icon_Red,
  Add_Post_Icon_Red,
  Back_Icon,
  Filter_Icon_Black,
  Heart_Icon_Black,
  Share_Icon_White,
  Heart_Icon_White,
  Arrow_Right_Icon,
  Search_Icon_2,
  Tick_Icon_black,
  Mail_Icon_2,
  Call_Icon_2,


};
