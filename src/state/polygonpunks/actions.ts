
export function setName(name) {
    return {
        type: SET_NAME,
        name: name
    };
}
export function setSymbol(string) {
    return {
        type: SET_SYMBOL,
        string: string
    };
}
export function setStandard(standard) {
    return {
        type: SET_STANDARD,
        standard: standard
    };
}
export function setDecimals(decimals) {
    return {
        type: SET_DECIMALS,
        decimals: decimals
    };
}
export function setClaimPrice(integer) {
    return {
        type: SET_CLAIMPRICE,
        integer: integer
    };
}
export function setImageHash(imagehash) {
    return {
        type: SET_IMAGEHASH,
        imagehash: imagehash
    };
}

export function setTotalSupply(total) {
    return {
        type: SET_TOTALSUPLY,
        total: total
    };
}
export function setPunksRemainingToAssign(total) {
    return {
        type: SET_PUNKSREMAININGTOASSIGN,
        total: total
    };
}

export const SET_NAME= 'SET_NAME';
export const SET_SYMBOL= 'SET_SYMBOL';
export const SET_STANDARD= 'SET_STANDARD';
export const SET_DECIMALS= 'SET_DECIMALS';
export const SET_CLAIMPRICE= 'SET_CLAIMPRICE';
export const SET_IMAGEHASH= 'SET_IMAGEHASH';

export const SET_TOTALSUPLY= 'SET_TOTALSUPLY';
export const SET_PUNKSREMAININGTOASSIGN= 'SET_PUNKSREMAININGTOASSIGN';

