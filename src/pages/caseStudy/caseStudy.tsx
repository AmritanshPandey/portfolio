import Head from "next/head";
import data from "@/data/case-studies.json";
import CaseStudyCard, { CaseStudy } from '../../components/caseStudy/caseStudyCard';

type CaseStudiesData = { caseStudies: CaseStudy[] };

export default function Home() {
  const { caseStudies } = data as CaseStudiesData;

  return (
    <>
      <Head>
        <title>Case Studies</title>
      </Head>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white">Case Studies</h1>
          <p className="text-gray-400">Explore drops, research, and design details.</p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.id} cs={cs} />
          ))}
        </section>
      </main>
    </>
  );
}