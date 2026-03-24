// storage/useDeviceStore.ts
import { create } from 'zustand';

export type Device = {
  id: string;
  name: string;
};

interface DeviceStore {
  devices: Device[];
  addDevice: (name: string) => void;
  removeDevice: (id: string) => void;
  updateDeviceName: (id: string, name: string) => void;
}

const useDeviceStore = create<DeviceStore>((set) => ({
  devices: [
    { id: '1', name: 'Device 1' },
    { id: '2', name: 'Device 2' },
    { id: '3', name: 'Device 3' },
  ],

  addDevice: (name: string) =>
    set((state) => ({
      devices: [
        ...state.devices,
        { id: Date.now().toString(), name: name.trim() },
      ],
    })),

  removeDevice: (id: string) =>
    set((state) => ({
      devices: state.devices.filter((device) => device.id !== id),
    })),

  updateDeviceName: (id: string, name: string) =>
    set((state) => ({
      devices: state.devices.map((device) =>
        device.id === id ? { ...device, name } : device,
      ),
    })),
}));

export default useDeviceStore;
