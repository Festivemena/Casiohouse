// useSignUpStore.js
import { create } from 'zustand';

const useAuthStore = create((set) => ({
  userName: "Casiohouse",
  fullName: "",
  email: "",
  passWord: "casiohouse",
  confirm: "",
  errors: "",
  selectedImageUri: null,
  setSelectedImageUri: (uri) => set({ selectedImageUri: uri }),
  setUserName: (text) => set({ userName: text }),
  setFullName: (text) => set({ fullName: text }),
  setEmail: (text) => set({ email: text }),
  setPassWord: (text) => set({ passWord: text }),
  setConfirm: (text) => set({ confirm: text }),
  setErrors: (errors) => set({ errors }),
  signOut: () => {
    // Implement sign out logic here
    // For example, reset the store values to their initial state
    set({
      userName: "",
      fullName: "",
      email: "",
      passWord: "",
      confirm: "",
      errors: "",
    });
  },
}));

export default useAuthStore;
