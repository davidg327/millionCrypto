import {GlobalService} from '../../service';

const globalService = new GlobalService();

export const getGlobal = async () => {
  try {
    return await globalService.getGlobal();
  } catch (error) {
    throw error;
  }
};
