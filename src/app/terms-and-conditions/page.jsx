import { getPage } from "@/lib/insights";
import "@/public/scss/policy.scss";

const pageId = 44;

export async function generateMetadata() {
  const page = await getPage(pageId);
  return {
    title: `${page.title} | Clarity Solutions`,
    openGraph: {
      title: `${page.title} | Clarity Solutions`,
      images: "https://clarity-solutions.io/images/meta.jpg",
    },
  };
}

export default async function PolicyPage() {
  const page = await getPage(pageId);
  return (
    <>
      <section className="policy-wrap">
        <div className="_container">
          <div className="policy-wrap__body">
            <div className="header">
                <h1>{page.title}</h1>
            </div>
            <article
                dangerouslySetInnerHTML={{ __html: page.content }}
                className="w-full font-gentium prose prose-slate max-w-none"
                />
          </div>
        </div>
      </section>
    </>
  );
}
