import { AsyncStorage } from 'react-native';

export const setItem = (key, value) => {
  return AsyncStorage.setItem(key, value);
}

export const getTtem = (key) => {
  return AsyncStorage.getItem(key);
}

export const removeItem = (key) => {
  return AsyncStorage.removeItem(key);
}