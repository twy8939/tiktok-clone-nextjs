/* eslint-disable @next/next/no-img-element */
"use client";

import ClientOnly from "../ClientOnly";
import SingleComment from "./SingleComment";

export default function Comments() {
  // const params = useParams<PostPageTypes>();

  const commentsByPost = [
    {
      id: "123",
      user_id: "456",
      post_id: "987",
      text: "this is some text",
      create_at: "date here",
      profile: {
        user_id: "456",
        name: "User 1",
        image: "https://placehold.co/100",
      },
    },
  ];

  return (
    <>
      <div
        id="Comments"
        className="relative bg-[#F8F8F8] z-0 w-full h-[calc(100%-273px)] border-t-2 overflow-auto"
      >
        <div className="pt-2" />
        <ClientOnly>
          {commentsByPost.length < 1 ? (
            <div className="text-center mt-6 text-xl text-gray-500">
              No comments...
            </div>
          ) : (
            <div>
              {commentsByPost.map((comment, index) => (
                <SingleComment key={index} comment={comment} />
              ))}
            </div>
          )}
        </ClientOnly>

        <div className="mb-28" />
      </div>
    </>
  );
}
