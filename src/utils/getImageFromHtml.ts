// Function to extract the first image from the post content
export const getImageFromHtml = (html: string) => {
  const imgTagMatch = html.match(/<img[^>]+src="([^">]+)"/);
  return imgTagMatch ? imgTagMatch[1] : null;
};
