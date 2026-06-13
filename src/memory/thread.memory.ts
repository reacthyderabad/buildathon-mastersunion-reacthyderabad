import { THREAD_MEMORY_TURNS } from "../config/constants";

type ThreadEntry = {
  role: "user" | "assistant";
  message: string;
};

export class ThreadMemory {
  private readonly store = new Map<string, ThreadEntry[]>();

  append(threadTs: string, entry: ThreadEntry): void {
    const existing = this.store.get(threadTs) ?? [];
    existing.push(entry);
    const maxEntries = THREAD_MEMORY_TURNS * 2;
    this.store.set(threadTs, existing.slice(-maxEntries));
  }

  getRecent(threadTs: string): ThreadEntry[] {
    return this.store.get(threadTs) ?? [];
  }
}

export const threadMemory = new ThreadMemory();
