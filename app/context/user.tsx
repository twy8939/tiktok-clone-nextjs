/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { User, UserContextTypes } from "../types";
import { useRouter } from "next/router";
import { account, ID } from "@/libs/AppWriteClient";
import useGetProfileByUserId from "../hooks/useGetProfileByUserId";
import useCreateProfile from "../hooks/useCreateProfile";

const UserContext = createContext<UserContextTypes | null>(null);

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  const checkUser = async () => {
    try {
      const currentSession = await account.getSession("current");
      if (!currentSession) return;

      const promise = await account.get();
      const profile = await useGetProfileByUserId(promise?.$id);

      setUser({
        id: promise?.$id,
        name: promise?.name,
        bio: profile?.bio,
        image: profile?.image,
      });
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const register = async (email: string, password: string, name: string) => {
    try {
      const promise = await account.create(ID.unique(), email, password, name);
      await account.createEmailPasswordSession(email, password);

      await useCreateProfile(
        promise?.$id,
        name,
        String(process.env.NEXT_PUBLIC_PLACEHOLDER_DEFAULT_IMAGE_ID),
        ""
      );
      await checkUser();
    } catch (error) {
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      await account.createEmailPasswordSession(email, password);
      await checkUser();
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
      router.reload();
    } catch (error) {
      throw error;
    }
  };

  return (
    <UserContext.Provider value={{ user, register, login, logout, checkUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => useContext(UserContext);
