/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from "react";
import moment from "moment";
import Image from "next/image";
import { TPost } from "@/src/types";
import { getImageFromHtml } from "@/src/utils/getImageFromHtml";
import Link from "next/link";

const PostCard = ({ postData }: { postData: TPost }) => {
    const { title, post, userId, category, createdAt, _id } = postData;

    const postImg = getImageFromHtml(post)

    return (
        <div className="overflow-hidden shadow-xl rounded-md h-full pb-4 bg-slate-700 text-white">
            {/* Image */}
            <Image
                className="w-full h-48 object-cover"
                src={`${postImg}`} // Replace with dynamic post image if available
                alt="Post Image"
                height={300}
                width={400}
            />

            {/* Category Badge */}
            <div className="px-6 py-2 flex justify-between items-center">
                <span className="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                    {category}
                </span>
                <Link className="bg-primary-900 text-white p-1 rounded-md" href={`/post/${_id}`}>Read more...</Link>
            </div>

            {/* Post Content */}
            <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2 line-clamp-2">{title}</h3>
                {/* <div
                    className="text-gray-700 text-base"
                    dangerouslySetInnerHTML={{ __html: post }}
                ></div> */}
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
                        <p className="text-gray-200 font-bold">{userId?.name}</p>
                        <p className="text-gray-100 text-sm">{userId?.email}</p>
                    </div>
                </div>
                <p className="text-gray-300 text-sm mt-2">
                    Posted on {moment(createdAt).format("MMMM Do, YYYY")}
                </p>
            </div>
        </div>
    );
};

export default PostCard;
