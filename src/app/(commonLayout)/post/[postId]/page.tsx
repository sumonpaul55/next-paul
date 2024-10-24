/* eslint-disable @typescript-eslint/no-explicit-any */

import Container from "@/src/components/Container"
import PostDetails from "@/src/components/shared/PostDetails"
import { getPostById } from "@/src/services/postService/post"


const page = async ({ params }: { params: any }) => {
    const data = await getPostById(params.postId)

    return (
        <Container classname="py-20">
            <div className="max-w-[900] mx-auto">
                <PostDetails postData={data?.data} />
            </div>
        </Container>
    )
}

export default page