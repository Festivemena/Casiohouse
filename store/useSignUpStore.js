// useSignUpStore.js
import { create } from 'zustand';

const useSignUpStore = create((set) => ({
  userName: "",
  fullName: "",
  email: "",
  passWord: "",
  confirm: "",
  errors: "",
  setUserName: (text) => set({ userName: text }),
  setFullName: (text) => set({ fullName: text }),
  setEmail: (text) => set({ email: text }),
  setPassWord: (text) => set({ passWord: text }),
  setConfirm: (text) => set({ confirm: text }),
  setErrors: (errors) => set({ errors }),
}));

export default useSignUpStore;
