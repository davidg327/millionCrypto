import {create} from 'zustand';
import {getExchanges, getInfoExchange} from '../../actions';
import {IExchange, IPairs} from "../../interface";

export interface IExchangeState {
  loadExchange: boolean
  successExchange: boolean;
  exchanges: IExchange[] | [];
  getExchanges: () => Promise<void>;
  loadPairs: boolean
  successPairs: boolean;
  pairs: IPairs[] | [];
  getInfoExchange: (id: string) => Promise<void>;
  cleanPairs: () => void;
}

export const useExchangeStore = create<IExchangeState>()((set, _get) => ({
  loadExchange: false,
  successExchange: false,
  loadPairs: false,
  successPairs: false,
  exchanges: [],
  pairs: [],
  getExchanges: async () => {
    set({
      loadExchange: true
    });
    try {
      const response = await getExchanges();
      const orderResponse = Object.values(response).map((response: any) => {
        return {
          id: response.id,
          name: response.name,
          url: response.url,
          country: response.country || 'No conocido'
        }
      })
      set({
        loadExchange: false,
        successExchange: true,
        exchanges: orderResponse
      });
    }
    catch (error) {
      set({
        loadExchange: false
      });
    }
  },
  getInfoExchange: async (id: string) => {
    set({
      loadPairs: true,
      pairs: []
    });
    try {
      const response = await getInfoExchange(id);
      console.log(response, 'aca que paso');
      set({
        loadPairs: false,
        successPairs: true,
        pairs: response.pairs,
      });
    }
    catch (error) {
      set({
        loadPairs: false
      });
    }
  },
  cleanPairs: () => {
    set({
      successPairs: false,
      pairs: [],
    });
  }
}));
