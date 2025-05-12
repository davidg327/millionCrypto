import { create } from 'zustand';
import {getCryptos, getMarkets} from '../../actions';
import {ICrypto, IMarket} from '../../interface';

export interface ICryptoState {
  loadCryptos: boolean
  successCryptos: boolean;
  loadMarkets: boolean;
  successMarkets: boolean;
  start: number;
  cryptos: ICrypto[] | [];
  getCryptos: (init: number) => Promise<void>;
  getMarkets: (id: string) => Promise<void>;
  markets: IMarket[] | [];
  cleanMarkets: () => void;
}

export const useCryptoStore = create<ICryptoState>()((set, _get) => ({
  loadCryptos: false,
  successCryptos: false,
  loadMarkets: false,
  successMarkets: false,
  start: 0,
  cryptos: [],
  markets: [],
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
  getMarkets: async (id: string) => {
    set({
      markets: [],
      loadMarkets: true
    });
    try {
      const markets = await getMarkets(id);
      set({
        loadMarkets: false,
        successMarkets: true,
        markets: markets,
      });
    }
    catch (error) {
      set({
        loadMarkets: false
      });
    }
  },
  cleanMarkets: () => {
    set({
      markets: [],
      successMarkets: false
    });
  },
}));
