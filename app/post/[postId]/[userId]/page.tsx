/* eslint-disable @next/next/no-img-element */
"use client";

import ClientOnly from "@/app/components/ClientOnly";
import { PostPageTypes } from "@/app/types";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export default function Post() {
  const router = useRouter();
  const params = useParams<PostPageTypes>();

  const loopThroughPostsUp = () => {
    console.log("loopThroughPostsUp");
  };

  const loopThroughPostsDown = () => {
    console.log("loopThroughPostsDown");
  };

  return (
    <>
      <div
        id="PostPage"
        className="lg:flex justify-between w-full h-screen bg-black overflow-hidden"
      >
        <div className="lg:w-[calc(100%-540px)] h-full relative">
          <Link
            href={`/profile/${params?.userId}`}
            className="absolute text-white z-20 m-5 rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
          >
            <AiOutlineClose size="27" />
          </Link>
          <div>
            <button
              onClick={loopThroughPostsUp}
              className="absolute z-20 right-4 top-4 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
            >
              <BiChevronUp size="30" color="#FFFFFF" />
            </button>

            <button
              onClick={loopThroughPostsDown}
              className="absolute z-20 right-4 top-20 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
            >
              <BiChevronDown size="30" color="#FFFFFF" />
            </button>

            <img
              className="absolute z-20 top-[18px] left-[70px] rounded-full lg:mx-0 mx-auto"
              width="45"
              src="/images/tiktok-logo-small.png"
              alt="tiktok-logo"
            />

            <ClientOnly>
              {true ? (
                <video
                  className="fixed object-cover w-full my-auto z-[0] h-screen"
                  src="/beach.mp4"
                />
              ) : null}

              <div className="bg-black bg-opacity-70 lg:min-w-[480px] z-10 relative">
                {true ? (
                  <video
                    autoPlay
                    controls
                    loop
                    muted
                    className="mx-auto h-screen"
                    src="/beach.mp4"
                  />
                ) : null}
              </div>
            </ClientOnly>
          </div>
        </div>
      </div>
    </>
  );
}
