import { create } from 'zustand';

interface ThemeState {
  themeColor: string;
  blue: string;
  red: string;
  setThemeColor: (newValue: string) => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  themeColor: 'blue',
  blue: '#032FF4',
  red: '#E61E2B',
  setThemeColor: (newValue) => set({ themeColor: newValue }),
}));

export default useThemeStore;
