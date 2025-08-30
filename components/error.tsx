import { TriangleAlert } from "lucide-react-native"
import { View, Text } from "react-native"

export const Error = () => {
  return (
    <View className="flex-1 bg-[#f43f5e] items-center justify-center">
        <TriangleAlert color={"white"} size={100}/>
      <Text className="text-white text-2xl font-bold">No Internet Connection</Text>
      <Text className="text-white mt-2 ">Please check your connection and try again</Text>
    </View>
  )
}