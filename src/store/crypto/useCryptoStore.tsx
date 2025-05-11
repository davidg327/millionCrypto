import { create } from 'zustand';
import {getCryptos} from '../../actions';
import {ICrypto} from '../../interface';

export interface ICryptoState {
  loadCryptos: boolean
  successCryptos: boolean;
  start: number;
  cryptos: ICrypto[] | [];
  getCryptos: (init: number) => Promise<void>
}

export const useCryptoStore = create<ICryptoState>()((set, _get) => ({
  loadCryptos: false,
  successCryptos: false,
  start: 0,
  cryptos: [],
  getCryptos: async (init: number) => {
    set({
      loadCryptos: true
    });
    try {
      const response = await getCryptos(init);

      set((state) => ({
        start: state.start + 20,
        loadCryptos: false,
        successCryptos: true,
        cryptos: state.cryptos.concat(response.data)
      }));
    }
    catch (error) {
      set({
        loadCryptos: false
      });
    }
  },
}));
