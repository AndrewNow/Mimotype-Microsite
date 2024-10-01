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

// COMPANIES
// COMPANIES
// COMPANIES
export async function getCompaniesPosts() {
  const query = `
    *[_type == "companies"] | order(publishedAt desc){
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
export async function getMoreCompaniesPosts({ currentId, publishedAt }) {
  let lastId = currentId;
  let lastPublishedAt = publishedAt;
  if (lastId === null) {
    return [];
  }
  const result = await useSanityClient().fetch(
    `*[_type == "companies" && 
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

// THESIS
// THESIS
// THESIS
export async function getThesisPosts() {
  const query = `
    *[_type == "thesis"] | order(publishedAt desc){
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
export async function getMoreThesisPosts({ currentId, publishedAt }) {
  let lastId = currentId;
  let lastPublishedAt = publishedAt;
  if (lastId === null) {
    return [];
  }
  const result = await useSanityClient().fetch(
    `*[_type == "thesis" && 
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

// TEAM
// TEAM
// TEAM

export async function getTeamPosts() {
  const query = `
    *[_type == "team"] | order(publishedAt desc){
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
export async function getMoreTeamPosts({ currentId, publishedAt }) {
  let lastId = currentId;
  let lastPublishedAt = publishedAt;
  if (lastId === null) {
    return [];
  }
  const result = await useSanityClient().fetch(
    `*[_type == "team" && 
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
