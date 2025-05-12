import {AxiosHttpClient} from '../../config/adapters/http.adapter';
import {HttpClient} from '../../config/interface/httpClient.ts';
import {HandleApiError} from '../../functions';

export class ExchangeService {
    private static httpClient: HttpClient = new AxiosHttpClient();

    async getExchanges(): Promise<any> {
        try {
            return await ExchangeService.httpClient.get<any>('exchanges/');
        } catch (error) {
            HandleApiError(error);
        }
    }

    async getInfoExchange(id: string): Promise<any> {
        try {
            return await ExchangeService.httpClient.get<any>(`exchange/?id=${id}`);
        } catch (error) {
            HandleApiError(error);
        }
    }

}
