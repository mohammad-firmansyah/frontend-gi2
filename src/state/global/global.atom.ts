import { atom } from "recoil";

export const globalState = atom({
    key: 'globalState',
    default: {
        isAuthenticated: false,
        loading: false,
        token: localStorage.getItem('token') || null,
    },
})