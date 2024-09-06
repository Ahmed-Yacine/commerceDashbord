import { create } from 'zustand'

type toggleMenuStore = {
    isOpen : boolean ;
    Toggle : () => void;
};

export const usetoggleMenuStore = create<toggleMenuStore>((set) =>({
    isOpen : false,
    Toggle : () => {
        set((state) => ({isOpen : !state.isOpen}))
    }
}))


