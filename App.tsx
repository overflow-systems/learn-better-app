//? UTILS
import AppLoading from 'expo-app-loading';

//? ROUTES
import Routes from './resources/routes/Routes';

//? FONTS
import { useFonts } from '@expo-google-fonts/source-sans-pro';

//? CONFIG FILES
import Fonts from './config/Fonts';
import './config/Defaults';

export default function App() {
  let [fontsLoaded] = useFonts(Fonts);

  if(!fontsLoaded) return <AppLoading />

  return <Routes />;
}