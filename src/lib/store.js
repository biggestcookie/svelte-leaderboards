import { writable } from "svelte/store";

export const pageCounter = writable(0);
export const leaderboardEntries = writable([]);
export const lastCompletedTime = writable(0);
