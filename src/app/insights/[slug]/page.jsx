import { getInsight, urlFor } from "@/lib/insights";
import "@/public/scss/insights.scss";
import { PortableText } from "next-sanity";

export async function generateMetadata({ params: { slug } }) {
    const insight = await getInsight(slug);
    return {
      title: insight.seo_title,
      description: insight.seo_description,
      openGraph: {
        title: insight.seo_title,
        description: insight.seo_description,
        images: insight.image,
      },
    };
  }

export default async function InsightPage({ params: { slug } }) {
  const insight = await getInsight(slug);
  return (
    <>
      <section className="insights-wrap">
        <div className="_container">
          <div className="insight-inner__body">
            <div className="header">
                <img src={urlFor(insight.image).url()}/>
                <h1>{insight.title}</h1>
            </div>
            <article
                className="w-full font-gentium prose prose-slate max-w-none"
                >
                  <PortableText value={insight.content} />
                </article>
          </div>
        </div>
      </section>
    </>
  );
}
