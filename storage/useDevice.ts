import { create } from 'zustand';

interface Device {
  count: number;
  reset: () => void;
  increment: () => void;
}

const useDevice = create<Device>((set, get) => ({
  count: 0,
  reset: () => set({ count: 0 }),
  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),
}));

export default useDevice;
