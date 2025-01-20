/* eslint-disable react-hooks/rules-of-hooks */
import { create } from "zustand";
import { createJSONStorage, persist, devtools } from "zustand/middleware";
import useGetProfileByUserId from "../hooks/useGetProfileByUserId";
import { Profile } from "../types";

interface ProfileStore {
  currentProfile: Profile | null;
}

export const useProfileStore = create<ProfileStore>()(
  devtools(
    persist(
      (set) => ({
        currentProfile: null,

        setCurrentProfile: async (userId: string) => {
          const result = await useGetProfileByUserId(userId);
          set({ currentProfile: result });
        },
      }),
      {
        name: "store",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
