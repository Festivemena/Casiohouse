import { create } from 'zustand';

const usePinStore = create((set) => ({
  createPin: "",
  confirmPin: "",
  pinError: "", // New state variable for handling PIN input errors
  setCreatePin: (text) => set({ createPin: text }),
  setConfirmPin: (text) => set({ confirmPin: text }),
  setPinError: (text) => set({ pinError: text }), // Setter function for pinError
}));

export default usePinStore;
