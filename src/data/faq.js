// Helper to generate standard 5 FAQs per service
const gen = (service) => [
  {
    question: `What is ${service}?`,
    answer: `${service} is one of our professional engineering services delivered according to applicable standards, project requirements, and best engineering practices.`
  },
  {
    question: `Do you provide ${service}?`,
    answer: `Yes. We provide end-to-end ${service} services for residential, commercial, industrial, and institutional projects.`
  },
  {
    question: `Why is ${service} important?`,
    answer: `It improves safety, quality, compliance, performance, and long-term value while reducing project risks.`
  },
  {
    question: `How long does ${service} take?`,
    answer: `The duration depends on the project size, complexity, approvals, and client requirements.`
  },
  {
    question: `How can I get started with ${service}?`,
    answer: `Contact PRIMECOST with your project details. Our engineers will review your requirements and provide a proposal.`
  }
];

export const faqCategories = [
  {
    category: 'General Engineering',
    icon: '🏢',
    faqs: [
      ...gen('engineering consultation'),
      ...gen('project planning'),
      ...gen('design review'),
      ...gen('technical reports'),
      ...gen('feasibility studies'),
      ...gen('engineering support'),
      ...gen('construction consulting'),
      ...gen('project budgeting'),
      ...gen('site evaluation'),
      ...gen('owner representation'),
    ]
  },
  {
    category: 'Structural Engineering',
    icon: '🏗️',
    faqs: [
      ...gen('structural design'),
      ...gen('steel structure design'),
      ...gen('concrete design'),
      ...gen('foundation design'),
      ...gen('retaining wall design'),
      ...gen('earthquake-resistant design'),
      ...gen('structural inspection'),
      ...gen('load calculations'),
      ...gen('warehouse design'),
      ...gen('high-rise design'),
      ...gen('wind load analysis'),
      ...gen('roof truss design'),
      ...gen('structural peer review'),
      ...gen('structural certification'),
      ...gen('structural shop drawings'),
    ]
  },
  {
    category: 'Civil Engineering',
    icon: '🛣️',
    faqs: [
      ...gen('site development'),
      ...gen('grading'),
      ...gen('drainage design'),
      ...gen('road design'),
      ...gen('stormwater design'),
      ...gen('utility design'),
      ...gen('water supply'),
      ...gen('sewer design'),
      ...gen('pavement design'),
      ...gen('earthworks'),
    ]
  },
  {
    category: 'Architectural Design',
    icon: '📐',
    faqs: [
      ...gen('architectural design'),
      ...gen('floor plans'),
      ...gen('3D rendering'),
      ...gen('space planning'),
      ...gen('renovation'),
      ...gen('building elevations'),
      ...gen('concept design'),
      ...gen('interior layouts'),
      ...gen('permit drawings'),
      ...gen('BIM modeling'),
    ]
  },
  {
    category: 'MEP Engineering',
    icon: '⚡',
    faqs: [
      ...gen('HVAC design'),
      ...gen('electrical design'),
      ...gen('plumbing design'),
      ...gen('fire protection'),
      ...gen('lighting design'),
      ...gen('power systems'),
      ...gen('low-voltage systems'),
      ...gen('MEP coordination'),
    ]
  },
  {
    category: 'BIM & CAD Services',
    icon: '💻',
    faqs: [
      ...gen('BIM modeling'),
      ...gen('Revit modeling'),
      ...gen('AutoCAD drafting'),
      ...gen('shop drawings'),
      ...gen('as-built drawings'),
      ...gen('3D coordination'),
      ...gen('clash detection'),
      ...gen('digital twin services'),
    ]
  },
  {
    category: 'Geotechnical Engineering',
    icon: '🌍',
    faqs: [
      ...gen('soil investigation'),
      ...gen('geotechnical report'),
      ...gen('foundation recommendations'),
      ...gen('ground improvement'),
      ...gen('slope stability analysis'),
    ]
  },
  {
    category: 'Surveying',
    icon: '📏',
    faqs: [
      ...gen('land survey'),
      ...gen('topographic survey'),
      ...gen('boundary survey'),
      ...gen('construction layout'),
      ...gen('drone survey'),
    ]
  },
  {
    category: 'Inspection & Assessment',
    icon: '🔍',
    faqs: [
      ...gen('building condition assessment'),
      ...gen('structural health monitoring'),
      ...gen('crack investigation'),
      ...gen('load testing'),
      ...gen('forensic engineering'),
      ...gen('safety inspection'),
    ]
  },
  {
    category: 'Permits & Compliance',
    icon: '📄',
    faqs: [
      ...gen('building permit assistance'),
      ...gen('code compliance review'),
      ...gen('permit drawings'),
      ...gen('engineering stamps'),
      ...gen('municipality approvals'),
    ]
  },
  {
    category: 'Construction Services',
    icon: '🔨',
    faqs: [
      ...gen('design-build services'),
      ...gen('general contracting'),
      ...gen('construction management'),
      ...gen('project supervision'),
      ...gen('site inspection'),
      ...gen('construction documentation'),
      ...gen('quantity surveying'),
      ...gen('value engineering'),
      ...gen('construction scheduling'),
      ...gen('quality control'),
    ]
  },
  {
    category: 'Project Management',
    icon: '📋',
    faqs: [
      ...gen('project planning'),
      ...gen('risk management'),
      ...gen('budget control'),
      ...gen('procurement support'),
      ...gen('contract administration'),
      ...gen('progress monitoring'),
    ]
  },
  {
    category: 'Specialty Engineering',
    icon: '🌉',
    faqs: [
      ...gen('bridge engineering'),
      ...gen('industrial plant structures'),
      ...gen('telecom tower design'),
      ...gen('solar structure design'),
      ...gen('modular building design'),
      ...gen('pre-engineered buildings'),
      ...gen('temporary structures'),
      ...gen('marine structures'),
    ]
  },
  {
    category: 'Sustainability & Green Building',
    icon: '🌿',
    faqs: [
      ...gen('green building consulting'),
      ...gen('LEED consulting'),
      ...gen('energy efficiency analysis'),
      ...gen('sustainable design'),
      ...gen('carbon reduction strategies'),
    ]
  },
  {
    category: 'Cost Estimation & QS',
    icon: '💰',
    faqs: [
      ...gen('cost estimation'),
      ...gen('quantity surveying'),
      ...gen('value engineering'),
      ...gen('feasibility studies'),
      ...gen('bid proposals'),
    ]
  },
  {
    category: 'PE Stamp (USA)',
    icon: '🔏',
    faqs: [
      { question: 'What is a PE Stamp?', answer: 'A PE Stamp is the official seal of a licensed Professional Engineer certifying that engineering documents were prepared or reviewed under their responsible charge.' },
      { question: 'What does PE stand for?', answer: 'PE stands for Professional Engineer.' },
      { question: 'Why is a PE Stamp required?', answer: 'It verifies that engineering drawings comply with applicable building codes and engineering standards.' },
      { question: 'Which projects require a PE Stamp?', answer: 'Many commercial, industrial, and structural projects require PE-stamped drawings before permit approval.' },
      { question: 'Can you provide PE-stamped structural drawings?', answer: 'Yes, through licensed Professional Engineers where permitted by state regulations.' },
      { question: 'Do all U.S. states require PE stamps?', answer: 'Requirements vary by state, project type, and local jurisdiction.' },
      { question: 'Is a PE Stamp valid nationwide?', answer: 'No. A PE license is issued by individual states. Engineers must generally be licensed in the state where the project is located.' },
      { question: 'Can one PE Stamp be used in multiple states?', answer: 'Only if the engineer holds an active license in each applicable state.' },
      { question: 'What documents can receive a PE Stamp?', answer: 'Structural calculations, engineering drawings, reports, specifications, and technical documents.' },
      { question: 'Can residential projects require a PE Stamp?', answer: 'Yes. Some states or municipalities require PE-stamped drawings for certain residential structures.' },
      { question: 'How do I know if my project needs a PE Stamp?', answer: 'Our engineering team reviews your project and applicable local regulations to determine the requirements.' },
      { question: 'Can PE-stamped drawings be submitted for permits?', answer: 'Yes, if they satisfy the requirements of the local authority having jurisdiction (AHJ).' },
      { question: 'Are digital PE Stamps accepted?', answer: 'Many U.S. jurisdictions accept digitally signed and sealed documents, subject to local regulations.' },
      { question: 'What is the difference between an engineer\'s signature and a PE Stamp?', answer: 'The PE Stamp officially identifies the licensed engineer, while the signature confirms responsibility for the work.' },
      { question: 'Can you review existing drawings before stamping?', answer: 'Yes. A licensed PE must perform an independent review before sealing any documents.' },
      { question: 'How long does it take to obtain PE-stamped drawings?', answer: 'The timeline depends on project complexity and document completeness.' },
      { question: 'What codes do PE-stamped drawings follow?', answer: 'They are prepared according to applicable editions of the International Building Code (IBC), ASCE standards, ACI, AISC, and local building codes.' },
      { question: 'Can you stamp drawings prepared by another company?', answer: 'Only after a licensed Professional Engineer performs an appropriate review and assumes professional responsibility, where permitted by law.' },
      { question: 'What happens if drawings are submitted without a required PE Stamp?', answer: 'Permit applications may be delayed, rejected, or require revisions.' },
      { question: 'Do renovations require PE-stamped drawings?', answer: 'Many structural renovations, additions, and alterations require PE-stamped plans.' },
      { question: 'What is responsible charge in engineering?', answer: 'It means the licensed Professional Engineer exercised direct control and professional judgment over the engineering work.' },
      { question: 'Can a contractor use someone else\'s PE Stamp?', answer: 'No. Unauthorized use of a PE Stamp is prohibited.' },
      { question: 'Are PE Stamps required for steel structures?', answer: 'Many steel buildings and industrial structures require PE-stamped structural drawings.' },
      { question: 'Do foundation designs require a PE Stamp?', answer: 'Many jurisdictions require PE-stamped foundation designs.' },
      { question: 'Can PE-stamped drawings help speed up permit approval?', answer: 'Properly prepared documents can reduce review issues, though approval times depend on the permitting authority.' },
      { question: 'Can PE-stamped drawings be revised later?', answer: 'Yes. Revisions generally require review and approval by the responsible licensed engineer.' },
      { question: 'Are structural calculations included with PE-stamped drawings?', answer: 'Yes, when required for permitting or project documentation.' },
      { question: 'Do warehouse buildings require PE Stamps?', answer: 'Most commercial and industrial warehouse projects require PE-stamped structural documents.' },
      { question: 'Can PE-stamped drawings be used for inspections?', answer: 'They are commonly used during construction and inspections as approved reference documents.' },
      { question: 'Can you provide engineering reports with a PE Stamp?', answer: 'Yes, when appropriate and prepared under the responsible charge of a licensed Professional Engineer.' },
      { question: 'Can PE-stamped drawings be used for insurance claims?', answer: 'Some insurance companies request engineering reports prepared or sealed by licensed engineers.' },
      { question: 'Do solar panel structures require a PE Stamp?', answer: 'Many jurisdictions require PE-stamped structural designs for solar installations.' },
      { question: 'Can you provide PE Stamps for retaining wall designs?', answer: 'Yes, when applicable and prepared by a licensed structural engineer.' },
      { question: 'What information is needed before obtaining a PE Stamp?', answer: 'Project location, architectural drawings, site information, applicable codes, and engineering calculations.' },
      { question: 'Do municipalities verify PE licenses?', answer: 'Yes. Authorities may verify the engineer\'s active license status.' },
      { question: 'Are PE Stamps required for commercial tenant improvements?', answer: 'Depending on the scope and jurisdiction, structural or MEP work may require PE-stamped documents.' },
      { question: 'Can PE-stamped drawings reduce construction risks?', answer: 'Professionally prepared engineering documents help improve safety, coordination, and code compliance.' },
      { question: 'How much does a PE Stamp cost?', answer: 'Costs vary based on project size, complexity, required engineering services, and the applicable state.' },
      { question: 'Does PRIMECOST coordinate PE-stamped engineering services across the United States?', answer: 'Yes. We coordinate engineering services with licensed Professional Engineers in accordance with applicable state licensing requirements.' },
      { question: 'How can I request PE-stamped engineering services?', answer: 'Contact PRIMECOST with your project location, drawings, and scope of work. Our team will review your requirements and guide you through the engineering and permitting process.' },
    ]
  }
];


// Flat list for Home page FAQ section & Schema (first 8 most important)
export const faqs = [
  {
    question: 'How long does a quote take?',
    answer: 'Standard project reviews and scoping bids are completed in under 24 hours. For urgent structural sign-and-stamp requests, we can deliver stamped drawings in as little as 24-48 hours.'
  },
  {
    question: 'Which states do you serve?',
    answer: 'We provide licensed Professional Engineer (PE) stamped drawings across all 50 US States, ensuring designs conform precisely to state, county, and local municipal building codes.'
  },
  {
    question: 'Do you provide stamped drawings?',
    answer: 'Yes, all structural calculations and framing plans are signed and stamped by state-licensed Professional Engineers, accepted by city and county building departments nationwide.'
  },
  {
    question: 'What project types do you handle?',
    answer: 'We handle residential custom homes, additions/renovations, commercial offices, strip centers, multifamily apartments, and heavy industrial warehousing and distribution hubs.'
  },
  {
    question: 'Do you provide structural engineering services?',
    answer: 'Yes. We provide end-to-end structural engineering services for residential, commercial, industrial, and institutional projects nationwide.'
  },
  {
    question: 'What is the difference between structural and architectural design?',
    answer: 'Architectural design focuses on aesthetics, space planning, and building layout. Structural engineering ensures the building can safely support all loads including gravity, wind, and seismic forces.'
  },
  {
    question: 'Do you offer MEP engineering services?',
    answer: 'Yes. We offer complete Mechanical (HVAC), Electrical, and Plumbing (MEP) engineering services coordinated with structural and architectural drawings for permit-ready packages.'
  },
  {
    question: 'How do I get started with PRIMECOST?',
    answer: 'Contact PRIMECOST with your project details. Our engineers will review your requirements, scope the project, and provide a detailed proposal within 24 hours.'
  }
];
