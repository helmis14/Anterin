import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "0o7g9199",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

//sanity cors add https://localhost:3000 or sanity cors add

export default client;

// import SanityClient from "@sanity/client";
// import ImageUrlBuilder from "@sanity/image-url";

// const client = SanityClient({
//   projectId: "jd57w7ev",
//   dataset: "production",
//   useCdn: true,
//   apiVersion: "2021-10-21",
// });

// const builder = ImageUrlBuilder(client);
// export const urlFor = (source) => builder.image(source);

// export default client;
