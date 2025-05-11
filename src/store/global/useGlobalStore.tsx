import { create } from 'zustand';
import {getGlobal} from '../../actions';
import {IGlobal} from '../../interface';

export interface IAuthState {
  loadGlobal: boolean;
  successGlobal: boolean;
  getGlobal: () => Promise<void>;
  global: IGlobal | null;
}

export const useGlobalStore = create<IAuthState>()((set, _get) => ({
  loadGlobal: false,
  successGlobal: false,
  global: null,
  getGlobal: async () => {
    set({
      loadGlobal: true,
    });
    try {
      const response = await getGlobal();
      set({
        loadGlobal: false,
        successGlobal: true,
        global: response[0]
      });
    }
    catch (error) {
      set({
        loadGlobal: false
      });
    }
  },
}));
