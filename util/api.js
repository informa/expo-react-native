import AsyncStorage from "@react-native-community/async-storage";

const STORAGE_KEY = "reactNativeTestApp:data";

const storeData = async ({ value, key }) => {
  try {
    const jsonValue = JSON.stringify({ [key]: value });
    await AsyncStorage.mergeItem(STORAGE_KEY, jsonValue);
  } catch (e) {
    // saving error
    console.log("error: ", e);
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log("error: ", e);
  }
};

const removeData = async (key) => {
  try {
    const data = JSON.parse(await AsyncStorage.getItem(STORAGE_KEY));
    data[key] = undefined;
    delete data[key];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    // saving error
    console.log("error: ", e);
  }
};

export { storeData, getData, removeData };
