import React from 'react';

const sections = [
  {
    title: 'Information We Collect',
    items: [
      'Contact details you share through forms (name, email, phone, company).',
      'Business details submitted for distributor applications.',
      'Analytics data about site usage (pages viewed, device/browser info).',
    ],
  },
  {
    title: 'How We Use Information',
    items: [
      'Responding to enquiries and providing product or service information.',
      'Processing distributor/partner applications.',
      'Improving site performance and user experience.',
      'Complying with legal or regulatory requirements.',
    ],
  },
  {
    title: 'Data Sharing',
    items: [
      'We do not sell your data.',
      'We may share with service providers (email, hosting, analytics) bound by confidentiality.',
      'We may disclose if required by law or to protect our rights and users.',
    ],
  },
  {
    title: 'Your Choices',
    items: [
      'You can request access, correction, or deletion of your personal information.',
      'You can opt out of non-essential communications at any time.',
      'Disable cookies in your browser to limit analytics tracking (site may be limited).',
    ],
  },
  {
    title: 'Data Security & Retention',
    items: [
      'We use reasonable technical and organizational safeguards to protect your data.',
      'Information is retained only as long as necessary for the purposes described above or as required by law.',
    ],
  },
  {
    title: 'Contact',
    items: [
      'For privacy questions or requests, email info.srapolymer@gmail.com or call +91 9304031185.',
    ],
  },
];

const PrivacyPolicy = () => (
  <div className="bg-white min-h-screen">
    <section className="bg-emerald-950 text-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-emerald-300 uppercase tracking-[0.2em] text-xs font-bold mb-4">Policy</p>
        <h1 className="text-4xl md:text-5xl font-black leading-tight">Privacy Policy</h1>
        <p className="text-emerald-100/70 mt-4 max-w-3xl">
          This policy explains how SRA Polymers Pvt. Ltd. collects, uses, and protects your information when you use our website and forms.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {sections.map((section) => (
          <div key={section.title} className="p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 mb-4">{section.title}</h2>
            <ul className="space-y-2 text-slate-700 leading-relaxed">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="text-sm text-slate-500">
          Updated: {new Date().getFullYear()} &mdash; We may revise this policy. Continued use of the site means you accept the latest version.
        </p>
      </div>
    </section>
  </div>
);

export default PrivacyPolicy;
