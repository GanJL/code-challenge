import fetch from 'node-fetch';

const url = "https://static.ngnrs.io/test/prices";

export const Datasource = {

    getPrices: function () {

        const fetchResponse = fetch(url)
            .then((response)=> response.json())
            .then((data)=> data.data.prices)
            .then((prices)=> {

                prices.forEach(price => {

                    price.mid = function () {

                        return ((price.buy + price.sell) / 2 / 100)

                    };

                    price.quote = function () {

                        return (price.pair.slice(3, 6))

                    };

                });

                return prices

            })

        return fetchResponse
    },
};
