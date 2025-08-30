import { Text, View,StyleSheet, } from 'react-native'
import AnimatedLoader from "react-native-animated-loader";

export const Loading = () => {

  return (
    <View className='flex-1 flex items-center justify-center '>
       <View className='flex-1'>
          <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("../assets/loading.json")}
        animationStyle={styles.lottie}
        speed={1}
      >
      </AnimatedLoader>
       </View>
       <View className='flex-1  w-full flex items-center justify-end pb-20'>
      <Text className='font-semibold text-sm'>It will be take a few moments, please wait!</Text>
       </View>

    </View>
  )
}

const styles = StyleSheet.create({
  lottie: {
    width: 300,
    height: 300
  }
});
