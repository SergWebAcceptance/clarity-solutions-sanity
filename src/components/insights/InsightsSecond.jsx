import { getInsights } from "@/lib/insights";
import InsightCard from "./InsightCard";

export default async function InsightsSecond() {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    async function fetchInsights() {
      const fetchedInsights = await getInsights();
      setInsights(fetchedInsights);
    }

    fetchInsights();
  }, []);
  return (
    <>
      <section className="insights-wrap">
        <div className="_container">
          <div className="insights-wrap__body">
            <div className="insights-row">
              {insights.map((insight) => (
                <InsightCard key={insight.slug} insightObject={insight} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
