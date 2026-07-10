import { useSyncExternalStore } from 'react';
import { seedReviews, type Review } from './data';

const KEY = 'certsecure-reviews-v1';
const listeners = new Set<() => void>();
let cache: Review[] | null = null;

function read(): Review[] {
  if (cache) return cache;
  try {
    const raw = localStorage.getItem(KEY);
    const custom = raw ? (JSON.parse(raw) as Review[]) : [];
    cache = [...custom, ...seedReviews];
  } catch {
    cache = [...seedReviews];
  }
  return cache;
}

function write(custom: Review[]) {
  localStorage.setItem(KEY, JSON.stringify(custom));
  cache = [...custom, ...seedReviews];
  listeners.forEach((l) => l());
}

export function addReview(r: Omit<Review, 'id' | 'avatar'>) {
  const initials =
    r.name
      .split(' ')
      .map((p) => p[0])
      .filter(Boolean)
      .slice(0, 2)
      .join('')
      .toUpperCase() || 'CS';
  let existingCustom: Review[] = [];
  try {
    const raw = localStorage.getItem(KEY);
    existingCustom = raw ? (JSON.parse(raw) as Review[]) : [];
  } catch {
    /* ignore */
  }
  const review: Review = { ...r, id: `u-${Date.now()}`, avatar: initials };
  write([review, ...existingCustom]);
}

export function useReviews(): Review[] {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    read,
    read
  );
}
