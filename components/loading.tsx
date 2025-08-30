import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import AnimatedLoader from "react-native-animated-loader";

export const Loading = () => {

  return (
    <View className='flex-1 flex items-center justify-center'>
         <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("../assets/loading.json")}
        animationStyle={styles.lottie}
        speed={1}
      >
      </AnimatedLoader>
      <Text className='mt-20 font-semibold text-2xl animate-pulse duration-200'>Loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  lottie: {
    width: 300,
    height: 300
  }
});
