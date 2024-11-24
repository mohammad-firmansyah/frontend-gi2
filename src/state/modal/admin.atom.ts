import { atom } from "recoil";

export const adminAtom = atom({
    key: 'adminAtom',
    default: {
        isModalAddBlogShowing: false,
        isModalLogoutShowing: false,
        loading: false,
    }
})