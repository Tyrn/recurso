// import { create } from 'zustand';
//
// interface Device {
//   count: number;
//   reset: () => void;
//   increment: () => void;
// }
//
// const useDevice = create<Device>((set, get) => ({
//   count: 0,
//   reset: () => set({ count: 0 }),
//   increment: () =>
//     set((state) => ({
//       count: state.count + 1,
//     })),
// }));
//
// export default useDevice;

// Modified useDevice.tsx to support multiple devices
import { create } from 'zustand';

interface DeviceState {
  counts: Record<string, number>;
  increment: (deviceId: string) => void;
  reset: (deviceId: string) => void;
  getCount: (deviceId: string) => number;
}

const useDeviceStore = create<DeviceState>((set, get) => ({
  counts: {},
  increment: (deviceId) =>
    set((state) => ({
      counts: {
        ...state.counts,
        [deviceId]: (state.counts[deviceId] || 0) + 1,
      },
    })),
  reset: (deviceId) =>
    set((state) => ({
      counts: {
        ...state.counts,
        [deviceId]: 0,
      },
    })),
  getCount: (deviceId) => get().counts[deviceId] || 0,
}));

export default useDeviceStore;
