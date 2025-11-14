"use client";

import { Mail, Phone } from "lucide-react";
import { useEffect } from "react";
import Image from "@/assets/images/s.svg";
import CommonHeader from "@/components/CommonHeader";
import useNavbarEffect from "@/hooks/useNavbarEffect";

const jobOpenings: Job[] = [];

export default function JobsPage() {
  useNavbarEffect(false, true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactEmail = "careers@sona-engineering.com";
  const contactPhone = "+251910147670";

  return (
    <>
      {/* Hero */}
      <CommonHeader
        title="Join Our Team"
        subTitle="Be part of our mission to deliver engineering excellence"
        src={Image}
        alt="Sona Engineering Careers"
        className="bg-linear-to-br from-primary/10 via-white to-primary/5"
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-12">
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We’re always looking for talented individuals to join our team. Explore the opportunities below or send us
            your CV if you don’t see your perfect fit.
          </p>
        </div>

        {/* Job Cards */}
        {/* Job Cards */}
        <div className="flex justify-center items-center min-h-[400px] max-w-8xl mx-auto">
          {jobOpenings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
              {jobOpenings.map((job, _idx) => (
                <JobCard key={crypto.randomUUID()} {...job} contactEmail={contactEmail} contactPhone={contactPhone} />
              ))}
            </div>
          ) : (
            <div className="w-full max-w-md">
              <FallbackJobCard contactEmail={contactEmail} contactPhone={contactPhone} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

/* --------------------------------------------------------------
   Reusable Job Card
   -------------------------------------------------------------- */
type Job = {
  title: string;
  description: string;
  responsibilities: string[];
  icon?: React.ComponentType<{ className?: string }>;
};

type JobCardProps = Job & {
  contactEmail: string;
  contactPhone: string;
};

function JobCard({ title, description, responsibilities, icon: Icon, contactEmail, contactPhone }: JobCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start gap-4 mb-4">
        {Icon && <Icon className="h-9 w-9 shrink-0 text-primary/70 transition-colors" />}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>

      <p className="mb-4 text-gray-600">{description}</p>

      <ul className="mb-6 space-y-1.5 text-sm text-gray-500 list-disc list-inside">
        {responsibilities.map((r, _i) => (
          <li key={crypto.randomUUID()}>{r}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-3">
        <a
          href={`mailto:${contactEmail}?subject=Application%20-%20${encodeURIComponent(title)}`}
          aria-label={`Email us about applying for ${title}`}
          className="flex items-center gap-2 rounded-lg px-4 py-2.5 bg-primary text-white text-sm font-medium transition-all hover:bg-primary/90"
        >
          <Mail className="h-4 w-4" />
          Apply via Email
        </a>

        <a
          href={`tel:${contactPhone}`}
          aria-label="Call us"
          className="flex items-center gap-2 rounded-lg px-4 py-2.5 border border-primary text-primary text-sm font-medium transition-all hover:bg-primary/5"
        >
          <Phone className="h-4 w-4" />
          Call HR
        </a>
      </div>
    </article>
  );
}

/* --------------------------------------------------------------
   Fallback Job Card for unspecified/new roles
   -------------------------------------------------------------- */
function FallbackJobCard({ contactEmail, contactPhone }: { contactEmail: string; contactPhone: string }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start gap-4 mb-4">
        <h3 className="text-xl font-semibold text-gray-900">Your Next Opportunity</h3>
      </div>

      <p className="mb-4 text-gray-600">
        We may not have listed your perfect role yet, but we’re always seeking talented individuals. Share your CV and
        let’s explore possibilities together.
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href={`mailto:${contactEmail}?subject=Application%20-%20Unlisted%20Role`}
          aria-label="Email us about an unlisted role"
          className="flex items-center gap-2 rounded-lg px-4 py-2.5 bg-primary text-white text-sm font-medium transition-all hover:bg-primary/90"
        >
          <Mail className="h-4 w-4" />
          Send CV
        </a>

        <a
          href={`tel:${contactPhone}`}
          aria-label="Call HR"
          className="flex items-center gap-2 rounded-lg px-4 py-2.5 border border-primary text-primary text-sm font-medium transition-all hover:bg-primary/5"
        >
          <Phone className="h-4 w-4" />
          Call HR
        </a>
      </div>
    </article>
  );
}
