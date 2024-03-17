import Freecurrencyapi from '@everapi/freecurrencyapi-js'
import fetch from 'node-fetch';
global.fetch = fetch;
const freecurrencyapi = new Freecurrencyapi('fca_live_bBNKyWrclFCCvN4W2xkOPBSwUrjqOoKR328mgb4Y');
convertCurrency('USD','INR',2)

export async function convertCurrency(fromCurrecy,toCurrency,units) {
    
    const res=await freecurrencyapi.latest({
        base_currency: fromCurrecy,
        currencies: toCurrency
    });

    const multiplier = res.data[toCurrency];
    return  multiplier*units
}

