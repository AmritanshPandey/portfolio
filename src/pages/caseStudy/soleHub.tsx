import { useRouter } from "next/router";
import Image from "next/image";
import data from "@/data/case-studies.json";
import type { CaseStudy } from "@/components/CaseStudyCard";

type CaseStudiesData = { caseStudies: CaseStudy[] };

export default function CaseStudyDetail() {
  const router = useRouter();
  const { id } = router.query;

  const { caseStudies } = data as CaseStudiesData;
  const idNum = Number(id);
  const cs = caseStudies.find((c) => c.id === idNum);

  if (!cs) return <main className="p-6">Not found.</main>;

  return (
    <main className="mx-auto max-w-4xl px-6 py-10 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-white">{cs.title}</h1>
        {cs.timeline && <p className="text-gray-400">Timeline: {cs.timeline}</p>}
        {cs.banner && (
          <div className="relative w-full h-72 rounded-2xl overflow-hidden border border-gray-800">
            <Image src={cs.banner} alt={cs.title} fill className="object-cover" sizes="100vw" priority />
          </div>
        )}
        {cs.challenge && <p className="text-gray-200">{cs.challenge}</p>}
      </div>

      {/* Render extra fields if you add them later */}
      {"goal" in cs && Array.isArray(cs.goal) && (
        <section className="rounded-2xl border border-gray-800 bg-[#0b1220] p-6 space-y-2">
          <h2 className="text-xl font-semibold text-white mb-2">Goals</h2>
          <ul className="list-disc pl-6 text-gray-200">
            {(cs.goal as string[]).map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}