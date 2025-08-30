import { StatusBar } from 'expo-status-bar';
import './global.css';
import { Loading } from 'components/loading';
import { useEffect, useState } from 'react';
import { Weather } from 'components/weather';
import { Error } from 'components/error';
import { Alert } from 'react-native';
import * as Location from "expo-location" 
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import { updateCheck } from 'components/update';

type WeatherType = "Thunderstorm" | "Drizzle" | "Rain" | "Snow" | "Clear" | "Clouds"

interface weatherType {
  weather:[{ main:WeatherType }],
  main:{ temp: number },
  name:string
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [weather, setWeather] = useState<weatherType>()
  const [isConnected, setIsConnected] = useState(true)   
  const API_KEY = "af0b71bd8b74105dbb7cda9499d327da"
  
  useEffect(() => {
    updateCheck()
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected ?? false)
    })
    getLocation()
    return () => unsubscribe()
  }, [])

  const getWeather = async (latitude:number, longitude:number) => {
    try {
      const response = (await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      )).data
      setWeather(response)
      setLoading(false)
    } catch (error) {
      Alert.alert("Error in get weather")
    }
  }

  const setWeatherQuery = async (query:string) => {
    try {
      setLoading(true)
      const response = (await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
      )).data
      setWeather(response)
      setLoading(false)
    } catch (error) {
       setLoading(true)
      const response = (await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=toshkent&appid=${API_KEY}&units=metric`
      )).data
      setWeather(response)
      setLoading(false)
      Alert.alert("Error in search weather")
    }
  }

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied")
        return
      }
      const { coords } = await Location.getCurrentPositionAsync({})
      getWeather(coords.latitude, coords.longitude)
    } catch (error) {
      Alert.alert("Error in get your location, reenter this app")
    }
  }

  return (
    <>
      {!isConnected ? (
        <Error />  
      ) : loading ? (
        <Loading />
      ) : (
        <Weather
          weather={weather?.weather[0].main || "Clear"}
          temp={weather?.main.temp || 0}
          name={weather?.name || ""}
          setWeatherQuery={setWeatherQuery}
        />
      )}
      <StatusBar style="auto" />
    </>
  )
}
