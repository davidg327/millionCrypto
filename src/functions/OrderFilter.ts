import {ICrypto} from '../interface';

export const sortData = (
    data: ICrypto[],
    orderRankAsc: boolean,
    orderRankDesc: boolean,
    orderPriceAsc: boolean,
    orderPriceDesc: boolean,
    ) => {
    return [...data].sort((a, b) => {
        const rankA = a.rank;
        const rankB = b.rank;
        const priceA = Number(a.price_usd);
        const priceB = Number(b.price_usd);

        let result = 0;

        if (orderRankAsc) {
            result = rankA - rankB;
        } else if (orderRankDesc) {
            result = rankB - rankA;
        }

        if (result !== 0 && (orderRankAsc || orderRankDesc)) {
            return result;
        }

        if (orderPriceAsc) {
            return priceB - priceA;
        }
        if (orderPriceDesc) {
            return priceA - priceB;
        }
        return 0;
    });
};
