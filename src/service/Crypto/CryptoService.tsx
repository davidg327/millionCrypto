import {AxiosHttpClient} from '../../config/adapters/http.adapter';
import {HttpClient} from '../../config/interface/httpClient.ts';
import {HandleApiError} from '../../functions';

export class CryptoService {
    private static httpClient: HttpClient = new AxiosHttpClient();

    async getCryptos(start: number): Promise<any> {
        try {
            return await CryptoService.httpClient.get<any>(`tickers/?start=${start}&limit=20`);
        } catch (error) {
            HandleApiError(error);
        }
    }

    async getMarket(id: string): Promise<any> {
        try {
            return await CryptoService.httpClient.get<any>(`coin/markets/?id=${id}`);
        } catch (error) {
            HandleApiError(error);
        }
    }
}
