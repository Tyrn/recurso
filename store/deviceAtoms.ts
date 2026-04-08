import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export interface Device {
  id: string;
  name: string;
}

// Module-level counter for unique ID generation
let idCounter = 0;

// Primary atoms
export const devicesAtom = atom<Device[]>([]);
export const countersAtom = atom<Record<string, number>>({});
export const isInitializedAtom = atom<boolean>(false);

// Helper function to generate unique IDs
const generateUniqueId = (): string => {
  return `${Date.now()}-${idCounter++}`;
};

// Derived atoms
export const deviceCountAtom = atom((get) => get(devicesAtom).length);

// Write-only atoms for actions
export const addDeviceAtom = atom(null, (get, set, name: string) => {
  const newDevice: Device = {
    id: generateUniqueId(),
    name: name.trim(),
  };
  set(devicesAtom, [...get(devicesAtom), newDevice]);
});

export const removeDeviceAtom = atom(null, (get, set, id: string) => {
  // Remove device
  set(
    devicesAtom,
    get(devicesAtom).filter((device) => device.id !== id),
  );

  // Clean up counter
  const currentCounters = get(countersAtom);
  const { [id]: _, ...remainingCounters } = currentCounters;
  set(countersAtom, remainingCounters);
});

export const updateDeviceNameAtom = atom(
  null,
  (get, set, { id, name }: { id: string; name: string }) => {
    set(
      devicesAtom,
      get(devicesAtom).map((device) =>
        device.id === id ? { ...device, name } : device,
      ),
    );
  },
);

// Counter actions
export const incrementCounterAtom = atom(null, (get, set, deviceId: string) => {
  const currentCounters = get(countersAtom);
  const currentValue = currentCounters[deviceId] || 0;
  set(countersAtom, {
    ...currentCounters,
    [deviceId]: currentValue + 1,
  });
});

export const decrementCounterAtom = atom(null, (get, set, deviceId: string) => {
  const currentCounters = get(countersAtom);
  const currentValue = currentCounters[deviceId] || 0;
  if (currentValue > 0) {
    set(countersAtom, {
      ...currentCounters,
      [deviceId]: currentValue - 1,
    });
  }
});

export const resetCounterAtom = atom(null, (get, set, deviceId: string) => {
  set(countersAtom, {
    ...get(countersAtom),
    [deviceId]: 0,
  });
});

// Initialize sample data (idempotent - safe to call multiple times)
export const initializeDevicesAtom = atom(null, (get, set) => {
  const isInitialized = get(isInitializedAtom);
  const devices = get(devicesAtom);

  if (!isInitialized && devices.length === 0) {
    set(isInitializedAtom, true);

    // Add sample devices with guaranteed unique IDs
    set(addDeviceAtom, 'Device 1');
    set(addDeviceAtom, 'Device 2');
    set(addDeviceAtom, 'Device 3');
  }
});

// Reset all data (useful for debugging)
export const resetAllAtoms = atom(null, (get, set) => {
  set(devicesAtom, []);
  set(countersAtom, {});
  set(isInitializedAtom, false);
  idCounter = 0;
});
