

import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  loading: false,
  error: '',
  setLoading: (value) => set({ loading: value }),
  setError: (message) => set({ error: message }),
  clearAuthState: () => set({ loading: false, error: '' }),
}));
