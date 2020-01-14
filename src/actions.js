export const ADD_COUNT = "ADD_COUNT";

export function addCount(value= 1) {
    return {
        type: ADD_COUNT,
        value
    }
}
