import {CryptoService} from '../../service';

const cryptoService = new CryptoService();

export const getCryptos = async (start: number) => {
  try {
    return await cryptoService.getCryptos(start);
  } catch (error) {
    throw error;
  }
};
