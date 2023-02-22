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
      publishedAt,
      body,
    }
  `;
  const data = await useSanityClient().fetch(query);
  return data;
}

// query for "read more" section at the bottom of an article
export async function getMoreResearchPosts({ currentId, publishedAt }) {
  let lastId = currentId;
  let lastPublishedAt = publishedAt;
  if (lastId === null) {
    return [];
  }
  const result = await useSanityClient().fetch(
    `*[_type == "research" && 
        (
          publishedAt < $lastPublishedAt ||
          (publishedAt == $lastPublishedAt && _id > $lastId)
        )
      ][0...1] | order(publishedAt) {
      _id,
      title,
      mainImage,
      "slug": slug.current,
      "imageUrl": mainImage.asset->url,
      publishedAt,
    }
    `,
    { lastId, lastPublishedAt }
  );

  if (result.length > 0) {
    lastPublishedAt = result[result.length - 1].publishedAt;
    lastId = result[result.length - 1]._id;
  } else {
    lastId = null; // Reached the end
  }
  return result;
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
      publishedAt,
      body,
    }
  `;
  const data = await useSanityClient().fetch(query);
  return data;
}

// query for "read more" section at the bottom of an article
export async function getMoreApproachPosts({ currentId, publishedAt }) {
  let lastId = currentId;
  let lastPublishedAt = publishedAt;
  if (lastId === null) {
    return [];
  }
  const result = await useSanityClient().fetch(
    `*[_type == "approach" && 
        (
          publishedAt < $lastPublishedAt ||
          (publishedAt == $lastPublishedAt && _id > $lastId)
        )
      ][0...1] | order(publishedAt) {
      _id,
      title,
      mainImage,
      "slug": slug.current,
      "imageUrl": mainImage.asset->url,
      publishedAt,
    }
    `,
    { lastId, lastPublishedAt }
  );

  if (result.length > 0) {
    lastPublishedAt = result[result.length - 1].publishedAt;
    lastId = result[result.length - 1]._id;
  } else {
    lastId = null; // Reached the end
  }
  return result;
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
      publishedAt,
      body,
    }
  `;
  const data = await useSanityClient().fetch(query);
  return data;
}

// query for "read more" section at the bottom of an article
export async function getMoreStrategyPosts({ currentId, publishedAt }) {
  let lastId = currentId;
  let lastPublishedAt = publishedAt;
  if (lastId === null) {
    return [];
  }
  const result = await useSanityClient().fetch(
    `*[_type == "strategy" && 
        (
          publishedAt < $lastPublishedAt ||
          (publishedAt == $lastPublishedAt && _id > $lastId)
        )
      ][0...1] | order(publishedAt) {
      _id,
      title,
      mainImage,
      "slug": slug.current,
      "imageUrl": mainImage.asset->url,
      publishedAt,
    }
    `,
    { lastId, lastPublishedAt }
  );

  if (result.length > 0) {
    lastPublishedAt = result[result.length - 1].publishedAt;
    lastId = result[result.length - 1]._id;
  } else {
    lastId = null; // Reached the end
  }
  return result;
}
