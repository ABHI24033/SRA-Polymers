import React from 'react';

const sections = [
  {
    title: 'Acceptance',
    body: 'By accessing or using this site, you agree to these Terms of Service. If you do not agree, please discontinue use.',
  },
  {
    title: 'Use of Website',
    list: [
      'Use the site only for lawful purposes and in accordance with these terms.',
      'Do not attempt to disrupt, damage, or gain unauthorized access to the site or its data.',
      'Content is provided for general information; product availability and specifications may change.',
    ],
  },
  {
    title: 'Intellectual Property',
    body: 'All content, branding, and materials on this site are owned by SRA Polymers Pvt. Ltd. or its licensors and are protected by applicable laws.',
  },
  {
    title: 'Disclaimers',
    list: [
      'The site is provided “as is” without warranties of any kind.',
      'We do not guarantee uninterrupted or error-free operation.',
      'We are not liable for any indirect or consequential damages arising from site use.',
    ],
  },
  {
    title: 'Links to Third Parties',
    body: 'External links (if any) are provided for convenience. We are not responsible for the content or practices of linked sites.',
  },
  {
    title: 'Governing Law',
    body: 'These terms are governed by the laws of India. Disputes will be subject to the jurisdiction of courts in Ranchi, Jharkhand.',
  },
  {
    title: 'Contact',
    body: 'For questions about these terms, email info.srapolymer@gmail.com or call +91 9304031185.',
  },
];

const TermsOfService = () => (
  <div className="bg-white min-h-screen">
    <section className="bg-emerald-950 text-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-emerald-300 uppercase tracking-[0.2em] text-xs font-bold mb-4">Legal</p>
        <h1 className="text-4xl md:text-5xl font-black leading-tight">Terms of Service</h1>
        <p className="text-emerald-100/70 mt-4 max-w-3xl">
          Please read these terms carefully before using our website or submitting information through our forms.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {sections.map((section) => (
          <div key={section.title} className="p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 mb-4">{section.title}</h2>
            {section.body && <p className="text-slate-700 leading-relaxed">{section.body}</p>}
            {section.list && (
              <ul className="space-y-2 text-slate-700 leading-relaxed">
                {section.list.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <p className="text-sm text-slate-500">
          Updated: {new Date().getFullYear()} &mdash; Continued use of the site means you accept any updates to these terms.
        </p>
      </div>
    </section>
  </div>
);

export default TermsOfService;
