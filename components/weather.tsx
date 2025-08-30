
import {  Button, Text, TextInput, View,  } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Sun, CloudRain, CloudSnow, Cloud, CloudDrizzle, Zap } from "lucide-react-native"
import { JSX, useState } from 'react';


interface WeatherProps {
  weather: WeatherType 
  temp: number
  name: string
  setWeatherQuery: (city: string) => void
}
type WeatherType = "Thunderstorm" | "Drizzle" | "Rain" | "Snow" | "Clear" | "Clouds"

type Gradient = [string, string, ...string[]]

interface WeatherOptionType {
  icon: JSX.Element
  gradient: Gradient
  title: string
  desc: string
}
const weatherOptions: Record<WeatherType, WeatherOptionType> = {
  Thunderstorm: {
    icon: <Zap color="white" size={64} />,
    gradient: ["#6366f1", "#312e81"],
    title: "Did you see outside",
    desc: "Better stay inside"
  },
  Drizzle: {
    icon: <CloudDrizzle color="white" size={64} />,
    gradient: ["#60a5fa", "#3b82f6"], 
    title: "Light drizzle",
    desc: "Take a light jacket"
  },
  Rain: {
    icon: <CloudRain color="white" size={64} />,
    gradient: ["#93c5fd", "#60a5fa"], 
    title: "Rain Vibes",
    desc: "Don't forget umbrella ☔"
  },
  Snow: {
    icon: <CloudSnow color="white" size={64} />,
    gradient: ["#f5f5f4", "#404040"], 
    title: "Snowy Day",
    desc: "Stay warm and cozy"
  },
  Clear: {
    icon: <Sun color="white" size={64} />,
    gradient: ["#fde047", "#f59e0b"], 
    title: "Amazing weather",
    desc: "Perfect time for fun"
  },
  Clouds: {
    icon: <Cloud color="white" size={64} />,
    gradient: ["#d1d5db", "#9ca3af"],
    title: "Overcast",
    desc: "Might be a bit gloomy"
  }
}


export const Weather = ({ weather, name, temp,setWeatherQuery }: WeatherProps) => {
  const option = weatherOptions[weather]
    const [query, setQuery] = useState("")
  return (
    <LinearGradient colors={option.gradient} className="flex-1 items-center justify-center px-12">
      {option.icon}
      <Text className="text-white text-3xl mt-2">{temp}° | {name}</Text>
      <Text className="text-white mt-20 text-2xl text-left w-full">{option.title}</Text>
      <Text className="text-white w-full text-left font-semibold text-sm">{option.desc}</Text>
      <Text className="text-white w-full text-left font-semibold text-sm">www.biohazard.uz</Text>
        <View className="flex-row items-center mt-8">
      <TextInput
        placeholder="Enter city"
        value={query}
        onChangeText={text => setQuery(text)}
        placeholderTextColor="#888"
        className="flex-1 bg-white rounded-md px-4 py-2.5 border border-gray-300 mr-2 text-black"
      />
    <Button onPress={() => setWeatherQuery(query)} title="Search" color="#003838" />
    </View>
    </LinearGradient>
  )
}
