/* eslint-disable @next/next/no-img-element */
"use client";

import ClientOnly from "@/app/components/ClientOnly";
import MainLayout from "@/app/layouts/MainLayout";
import { ProfilePageTypes } from "@/app/types";
import { BsPencil } from "react-icons/bs";

export default function Profile({ parmas }: ProfilePageTypes) {
  const currentProfile = {
    id: "123",
    user_id: "123",
    name: "Kim YongMin",
    image: "https://placehold.co/200",
    bio: "this is the bio",
  };
  return (
    <>
      <MainLayout>
        <div className="pt-90px ml-[90px] 2xl:pl-[185px] lg:pl-[160px] lg:pr-0 w-[calc(100%-90px)] pr-3 max-w-[1800px] 2xl:mx-auto">
          <div className="flex w-[calc(100%-230px)]]">
            <ClientOnly>
              {true ? (
                <img
                  className="w-[120px] min-w-[120px] rounded-full"
                  src={currentProfile.image}
                  alt="profile image"
                />
              ) : (
                <div className="min-w-[150px] h-[120px] bg-gray-200 rounded-full" />
              )}
            </ClientOnly>
            <div className="ml-5 w-full">
              <ClientOnly>
                {currentProfile?.name ? (
                  <div>
                    <p className="text-[30px] font-bold truncate">
                      {currentProfile?.name}
                    </p>
                    <p className="text-[18px] truncate">
                      {currentProfile?.name}
                    </p>
                  </div>
                ) : (
                  <div className="h-[60px]" />
                )}
              </ClientOnly>

              {true ? (
                <button className="flex items-center rounded-full py-1.5 px-3.5 mt-3 text-[15px] font-semibold border hover:bg-gray-100">
                  <BsPencil className="mt-0.5 mr-1" size="18" />
                  <span>Edit profile</span>
                </button>
              ) : (
                <button className="flex items-center rounded-full py-1.5 px-3.5 mt-3 text-[15px] text-white font-semibold bg-[#F02C56]">
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className="flex items-center pt-4">
            <div className="mr-4">
              <span className="font-bold">10K</span>
              <span className="text-gray-500 font-light text-[15px] pl-1.5">
                Following
              </span>
            </div>
            <div className="mr-4">
              <span className="font-bold">44K</span>
              <span className="text-gray-500 font-light text-[15px] pl-1.5">
                Followers
              </span>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
