import Container from "@/src/components/Container";
import LoadingDoor from "@/src/components/shared/LoadinDoor";
import AllBlogs from "@/src/Cpages/blogs/allBlogs";
import Script from "next/script";

export const metadata = {
  title: "Blogs | Sumon Paul",
  description:
    "Explore my blogs on web development, covering topics like React, Next.js, Node.js, MongoDB, Express.js, and Tailwind CSS. Learn about building fast, responsive, and SEO-friendly websites with a focus on clean design and great user experience.",
};
const PostPage = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1837Y90YZZ"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
             gtag('config', 'G-1837Y90YZZ');
            `,
        }}
      />
      <LoadingDoor />
      <Container classname="bg-teal-50 h-full py-10">
        <AllBlogs />
      </Container>
    </>
  );
};

export default PostPage;
