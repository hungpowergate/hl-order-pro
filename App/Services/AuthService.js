import { STORAGE_KEY } from '~/Constants/Config';
import { setItem, getTtem } from '~/Services/StorageService';

export const saveToken = (token) => {
  return setItem(STORAGE_KEY.TOKEN, token);
}

export const getToken = () => {
  return getTtem(STORAGE_KEY.TOKEN);
}

export const isLogined = async () => {
  try {
    const token = await getToken();
    if (token) {
      return true;
    }

    return false; 
  } catch (error) {
    return false;
  }  
}