import { useSyncExternalStore } from 'react';
import { loadProfile, subscribe } from './progressStore';

export function useProgress() {
  return useSyncExternalStore(subscribe, loadProfile, loadProfile);
}
