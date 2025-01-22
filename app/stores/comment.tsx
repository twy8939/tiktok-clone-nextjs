/* eslint-disable react-hooks/rules-of-hooks */
import { create } from "zustand";
import { createJSONStorage, persist, devtools } from "zustand/middleware";
import { CommentWithProfile } from "../types";
import useGetCommentsByPostId from "../hooks/useGetCommentsByPostId";

interface CommentStore {
  commentsByPost: CommentWithProfile[];
  setCommentsByPost: (postId: string) => void;
}

export const useCommentStore = create<CommentStore>()(
  devtools(
    persist(
      (set) => ({
        commentsByPost: [],
        setCommentsByPost: async (postId: string) => {
          const result = await useGetCommentsByPostId(postId);
          set({ commentsByPost: result });
        },
      }),
      {
        name: "store",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
