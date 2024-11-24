import { atom, DefaultValue } from "recoil";

// Custom effect for persistence
const localStorageEffect = (key: string) => 
    ({ setSelf, onSet }: { setSelf: (value: any) => void; onSet: (callback: (newValue: any) => void) => void }) => {
      const savedValue = localStorage.getItem(key);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
  
      onSet((newValue) => {
        if (newValue instanceof DefaultValue) {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, JSON.stringify(newValue));
        }
      });

      
    };

export const userAtom = atom({
    key:"userAtom",
    default:'',
    effects: [localStorageEffect('userAtom')]
})