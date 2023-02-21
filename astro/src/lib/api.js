import { useSanityClient } from "astro-sanity";

// export async function getAllPosts() {
//   const query = `*[_type == 'post']{"categoryData": categories[]->{slug, title},author -> {name}, ...} | order(publishedAt desc)`;
//   const data = await useSanityClient().fetch(query);
//   return data;
// }

// export async function getAllCategoriesWithPosts() {
//   const query = `*[_type == 'category']{"posts": *[_type == "post" && references(^._id)] | order(publishedAt desc), ...}`;
//   const data = await useSanityClient().fetch(query);
//   return data;
// }

// RESEARCH
// RESEARCH
// RESEARCH
export async function getResearchPosts() {
  const query = `
    *[_type == "research"] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      mainImage,
      "imageUrl": mainImage.asset->url,
      "lqip": mainImage.asset->metadata.lqip,
      publishedAt,
      body,
    }
  `;
  const data = await useSanityClient().fetch(query);
  return data;
}

// query for "read more" section at the bottom of an article
export async function getMoreResearchPosts() {
  const query = `
    *[_type == "research" && slug.current != $slug] | order(publishedAt desc){
      _id,
      title,
      mainImage,
      "slug": slug.current,
      "imageUrl": mainImage.asset->url,
      "lqip": mainImage.asset->metadata.lqip,
      publishedAt,
    }
  `;
  const data = await useSanityClient().fetch(query);
  return data;
}

// R&D APPROACH
// R&D APPROACH
// R&D APPROACH
export async function getApproachPosts() {
  const query = `
    *[_type == "approach"] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      mainImage,
      "imageUrl": mainImage.asset->url,
      "lqip": mainImage.asset->metadata.lqip,
      publishedAt,
      body,
    }
  `;
  const data = await useSanityClient().fetch(query);
  return data;
}

// query for "read more" section at the bottom of an article
export async function getMoreApproachPosts() {
  const query = `
    *[_type == "approach" ] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      mainImage,
      "imageUrl": mainImage.asset->url,
      "lqip": mainImage.asset->metadata.lqip,
      publishedAt,
      body,
    }
  `;
  const data = await useSanityClient().fetch(query);
  return data;
}

// STRATEGY
// STRATEGY
// STRATEGY

export async function getStrategyPosts() {
  const query = `
    *[_type == "strategy"] | order(publishedAt desc){
      _id,
      title,
      mainImage,
      "slug": slug.current,
      "imageUrl": mainImage.asset->url,
      "lqip": mainImage.asset->metadata.lqip,
      publishedAt,
      body,
    }
  `;
  const data = await useSanityClient().fetch(query);
  return data;
}

// query for "read more" section at the bottom of an article
export async function getMoreStrategyPosts() {
  let lastId = "";
  if (lastId === null) {
    return [];
  }
  const query = `
    *[_type == "strategy"]  | order(publishedAt desc){
      _id,
      title,
      mainImage,
      "slug": slug.current,
      "imageUrl": mainImage.asset->url,
      "lqip": mainImage.asset->metadata.lqip,
      publishedAt,
    }
  `;
  const data = await useSanityClient().fetch(query, { lastId });

  if (data.length > 0) {
    lastId = data[data.length - 1]._id;
  } else {
    lastid = null;
  }
  return data;
}
