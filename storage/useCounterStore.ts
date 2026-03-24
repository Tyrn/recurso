// storage/useCounterStore.ts (or update your existing useDevice.ts)
import { create } from 'zustand';

interface CounterState {
  counts: Record<string, number>;
  increment: (deviceId: string) => void;
  decrement: (deviceId: string) => void;
  reset: (deviceId: string) => void;
  release: (deviceId: string) => void;
  getCount: (deviceId: string) => number;
}

const useCounterStore = create<CounterState>((set, get) => ({
  counts: {},

  increment: (deviceId: string) =>
    set((state) => ({
      counts: {
        ...state.counts,
        [deviceId]: (state.counts[deviceId] || 0) + 1,
      },
    })),

  decrement: (deviceId: string) =>
    set((state) => ({
      counts: {
        ...state.counts,
        [deviceId]: Math.max(0, (state.counts[deviceId] || 0) - 1),
      },
    })),

  reset: (deviceId: string) =>
    set((state) => ({
      counts: {
        ...state.counts,
        [deviceId]: 0,
      },
    })),

  release: (deviceId: string) =>
    set((state) => {
      // Clean up the counter state for this device
      const { [deviceId]: _, ...remainingCounts } = state.counts;
      return { counts: remainingCounts };
    }),

  getCount: (deviceId: string) => get().counts[deviceId] || 0,
}));

export default useCounterStore;
