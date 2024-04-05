import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ImageBackground } from "react-native";
import { s } from "./App.style";
import hotBackground from './assets/1.png'
import coldBackground from './assets/2.png'
import { Input } from "./components/Input/Input";
import { DisplayTemperature} from './components/DisplayTemperature/DisplayTemperature'
import { UNITS, getOppositeUnit, convertTemperatureTo, isIceTemperature } from './utils/temperature';
import { useEffect, useState } from "react";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";

export default function App() {

  const [inputValue, setInputValue] = useState(0)
  const [currentUnit, setCurrentUnit] = useState('°C')
  const [currentBackground, setCurrentBackground] = useState(coldBackground)
  const oppositeUnit = getOppositeUnit(currentUnit)

  useEffect(() => {
    if(isIceTemperature(inputValue, currentUnit)){
      setCurrentBackground(coldBackground)
    } else setCurrentBackground(hotBackground)
  }, [inputValue, currentUnit])
  

  const getConvertedTemperature = () => {
    if(isNaN(inputValue)){
      return ''
    } else {
      return convertTemperatureTo(inputValue, oppositeUnit).toFixed() 
    }
  }

    return (
  <ImageBackground style={s.backgroundImg} source={currentBackground}>

    <SafeAreaProvider>
      <SafeAreaView style={s.root}>
        <View style={s.workspace}>
          <DisplayTemperature temperature={getConvertedTemperature()} unit={oppositeUnit}/>
          <Input onChange={setInputValue} defaultValue={0} unit={currentUnit}/>
          <ButtonConvert onPress={() => {
            setCurrentUnit(oppositeUnit)
          }} unit={currentUnit} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    </ImageBackground>
  );
}
