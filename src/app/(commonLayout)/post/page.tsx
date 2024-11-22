import Container from "@/src/components/Container";
import LoadingDoor from "@/src/components/shared/LoadinDoor";
import AllBlogs from "@/src/Cpages/blogs/allBlogs";

const PostPage = () => {
  return (
    <>
      <LoadingDoor />
      <Container>
        <AllBlogs />
      </Container>
    </>
  );
};

export default PostPage;
