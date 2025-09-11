import Image from "next/image";
import Link from "next/link";

export type CaseStudy = {
  id: number;
  title: string;
  banner?: string;
  timeline?: string;
  challenge?: string;
  [key: string]: unknown;
};

export default function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <Link
      href={`/caseStudy/${encodeURIComponent(String(cs.id))}`}
      className="block rounded-2xl overflow-hidden bg-[#0b1220] border border-gray-800 hover:border-gray-700 hover:shadow-lg transition"
    >
      {cs.banner && (
        <div className="relative h-48 w-full">
          <Image src={cs.banner} alt={cs.title} fill className="object-cover" sizes="100vw" />
        </div>
      )}

      <div className="p-5 space-y-2">
        <h2 className="text-xl font-semibold text-white">{cs.title}</h2>
        {cs.challenge && <p className="text-sm leading-6 text-gray-300 line-clamp-3">{cs.challenge}</p>}
        {cs.timeline && <p className="text-xs text-gray-400">Timeline: {cs.timeline}</p>}
      </div>
    </Link>
  );
}