import {AxiosHttpClient} from '../../config/adapters/http.adapter';
import {HttpClient} from '../../config/interface/httpClient.ts';
import {HandleApiError} from '../../functions';

export class GlobalService {
    private static httpClient: HttpClient = new AxiosHttpClient();

    async getGlobal(): Promise<any> {
        try {
            return await GlobalService.httpClient.get<any>('global/');
        } catch (error) {
            HandleApiError(error);
        }
    }
}
