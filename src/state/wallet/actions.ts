export function setTokenBalance(token, balance, readable) {
    return {
        type: SET_TOKENVALUE,
        token: token,
        readable: readable,
        balance: balance,
    };
}
export const SET_TOKENVALUE= 'SET_TOKENVALUE';