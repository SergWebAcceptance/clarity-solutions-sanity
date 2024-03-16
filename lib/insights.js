import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  apiVersion: "2023-05-03",
  projectId: "zuzgvsc0",
  dataset: "production",
  useCdn: false,
});

const insightsQuery = `*[_type == 'insights'] {
    title,
      "slug": slug.current,
      image,
      content,
      seo_title,
      seo_description
  }`;

const imageBuilder = imageUrlBuilder(client);

export function urlFor(source) {
  return imageBuilder.image(source);
}

export const CACHE_TAG_REVIEWS = "insights";

const WORDPRESS_API_URL = "https://cms.clarity-solutions.io/wp-json/custom/v1";

export async function getInsights() {
  const data = await client.fetch(insightsQuery, {
    next: {
      cache: "no-cache",
      tags: [CACHE_TAG_REVIEWS],
    },
  });

  return data;
}

export async function getInsight(slug) {
  const insights = await getInsights();
  const insight = insights.find((insight) => insight.slug === slug);
  return insight;
}

export async function getPage(pageId) {
  const response = await fetch(`${WORDPRESS_API_URL}/page/${pageId}`, {
    next: {
      cache: "force-cache",
      tags: [CACHE_TAG_REVIEWS],
    },
  });
  const page = await response.json();
  return page;
}
