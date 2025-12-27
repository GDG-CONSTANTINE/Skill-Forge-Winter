import { WorkshopCount } from "@/types/workshopCount";
import { create } from "zustand";

interface WorkshopState {
  workshopsCount: WorkshopCount[];
  setWorkshopsCount: (counts: WorkshopCount[]) => void;
  joinWorkshop: (workshopId: string) => void;
  fetchWorkshopsCount: () => Promise<void>;
  isLoading: boolean;
}

export const useWorkshopState = create<WorkshopState>((set, get) => ({
  workshopsCount: [],
  isLoading: false,
  setWorkshopsCount: (counts) => set({ workshopsCount: counts }),
  joinWorkshop: (workshopId) =>
    set((state) => ({
      workshopsCount: state.workshopsCount.map((count) =>
        count.workshopId === workshopId
          ? { ...count, count: count.count + 1 }
          : count
      ),
    })),
  fetchWorkshopsCount: async () => {
    const { setWorkshopsCount } = get();
    set({ isLoading: true });

    try {
      // i Know i should make a new route for this but next time clear up what you guys need don't surprise me at night
      const response = await fetch("/api/register", {
        method: "GET",
      });

      if (!response.ok) throw new Error("Fetch failed");
      const counts = await response.json();
      setWorkshopsCount(counts.data); // Updates store
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
