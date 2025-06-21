import Container from "@/src/components/Container";
import LoadingDoor from "@/src/components/shared/LoadinDoor";
import AllBlogs from "@/src/Cpages/blogs/allBlogs";

export const metadata = {
  title: "Blogs | Sumon Paul",
  description:
    "Explore my blogs on web development, covering topics like React, Next.js, Node.js, MongoDB, Express.js, and Tailwind CSS. Learn about building fast, responsive, and SEO-friendly websites with a focus on clean design and great user experience.",
};
const PostPage = () => {
  return (
    <>
      <LoadingDoor />
      <Container classname="bg-teal-50 h-full py-10">
        <AllBlogs />
      </Container>
    </>
  );
};

export default PostPage;
