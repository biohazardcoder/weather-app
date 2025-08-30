import * as Updates from "expo-updates";

export const updateCheck = async () => {
  const update = await Updates.checkForUpdateAsync();
  if (update.isAvailable) {
    await Updates.fetchUpdateAsync();
    await Updates.reloadAsync(); 
  }
};