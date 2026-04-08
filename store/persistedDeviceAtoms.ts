// Alternative to deviceAtoms.ts
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { Device } from './deviceAtoms';

// Use storage-backed atoms for persistence
export const devicesAtom = atomWithStorage<Device[]>('devices', []);
export const countersAtom = atomWithStorage<Record<string, number>>(
  'counters',
  {},
);

// The rest of the atoms remain the same as above
// Just replace the base atoms with these persisted versions
