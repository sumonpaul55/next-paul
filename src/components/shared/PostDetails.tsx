/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from "react";
import moment from "moment";
import Image from "next/image";
import { TPost } from "@/src/types";
import { getImageFromHtml } from "@/src/utils/getImageFromHtml";

const PostDetails = ({ postData }: { postData: TPost }) => {
    const { title, post, userId, category, createdAt } = postData;

    const postImg = getImageFromHtml(post)

    return (
        <div className="overflow-hidden border bg-white rounded-md h-full pb-4 max-w-[800px] mx-auto">
            {/* Image */}
            <Image
                className="w-full h-40 md:h-52 object-cover"
                src={postImg!} // Replace with dynamic post image if available
                alt="Post Image"
                height={300}
                width={400}
            />

            {/* Category Badge */}
            <div className="px3 md:px-6 py-2 flex justify-between items-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                    {category}
                </span>
                {/* <Link className="bg-primary text-white p-1 rounded-md" href={`/post/post-details`}>Read more...</Link> */}
            </div>

            {/* Post Content */}
            <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2 line-clamp-2">{title}</h3>
                <div
                    className="text-gray-700 text-base"
                    dangerouslySetInnerHTML={{ __html: post }}
                ></div>
            </div>

            {/* Author and Date */}
            <div className="px-6 pt-4 pb-2">
                <div className="flex items-center space-x-3">
                    <Image
                        className="w-10 h-10 rounded-full"
                        src={userId?.profilePhoto}
                        alt={userId?.name}
                        height={300}
                        width={400}
                    />
                    <div>
                        <p className="text-gray-900 font-bold">{userId?.name}</p>
                        <p className="text-gray-600 text-sm">{userId?.email}</p>
                    </div>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                    Posted on {moment(createdAt).format("MMMM Do, YYYY")}
                </p>
            </div>
        </div>
    );
};

export default PostDetails;
