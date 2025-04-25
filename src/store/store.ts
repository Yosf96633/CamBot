// store/useStore.ts
import { create } from 'zustand';

interface Message {
  id?: string;
  text: string;
  sender?: string;
  timestamp?: string;
}

interface StoreState {
  isAuthenticated: boolean;
  userEmail: string;
  messages: Message[];
  query: string;
  isAdminLoggedIn: boolean;

  // Actions
  setAdminLoggedIn: (status: boolean) => void;
  login: () => void;
  logout: () => void;
  setUserEmail: (email: string) => void;
  addMessage: (message: Message) => void;
  setQuery: (query: string) => void;
}

const useStore = create<StoreState>((set) => ({
  isAuthenticated: false,
  userEmail: '',
  messages: [],
  query: '',
  isAdminLoggedIn: false,

  setAdminLoggedIn: (status) => set({ isAdminLoggedIn: status }),

  login: () => set({ isAuthenticated: true }),
  logout: () =>
    set({
      isAuthenticated: false,
      userEmail: '',
      messages: [],
      query: '',
    }),

  setUserEmail: (email) => set({ userEmail: email }),

  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),

  setQuery: (query) => set({ query }),
}));

export default useStore;
