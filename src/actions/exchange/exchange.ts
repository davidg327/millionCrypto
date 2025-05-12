import {ExchangeService} from '../../service';

const exchangeService = new ExchangeService();

export const getExchanges = async () => {
  try {
    return await exchangeService.getExchanges();
  } catch (error) {
    throw error;
  }
};

export const getInfoExchange = async (id: string) => {
  try {
    return await exchangeService.getInfoExchange(id);
  } catch (error) {
    throw error;
  }
};
