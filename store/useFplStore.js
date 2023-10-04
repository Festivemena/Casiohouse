import {create} from 'zustand';

const useFplStore = create((set) => ({
  managerName: "",
  setManagerName: (text) => set({ managerName: text }),
}));

export default useFplStore;
