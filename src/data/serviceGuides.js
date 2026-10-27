// Extra, keyword-focused content blocks shown on individual service pages,
// plus related guide links for internal linking. Keyed by service id.
export const serviceGuides = {
  'shop-drawings': {
    sections: [
      {
        heading: 'Structural Steel Shop Drawings for Fabricators and Contractors',
        paragraphs: [
          'Structural steel shop drawings turn the engineer of record’s design into the exact pieces a fabricator cuts, drills, welds and ships. PRIMECOST prepares steel shop drawings for fabricators, erectors and general contractors, including erection drawings, piece and assembly drawings, anchor bolt plans and bills of material.',
          'Every set is checked against the structural drawings and specifications before submittal, so member sizes, elevations, connection types and bolt and weld callouts match the design. Where the contract delegates connection design, our licensed engineers can prepare and seal the connection calculations as part of the same package.',
        ],
        bullets: [
          'Erection plans and elevations with piece marks',
          'Shop details for beams, columns, braces, stairs, rails and miscellaneous metals',
          'Anchor bolt and embed layouts',
          'Connection details coordinated with sealed calculations when delegated',
          'Revisions tracked against engineer of record and architect comments',
        ],
      },
      {
        heading: 'Getting Shop Drawings Approved the First Time',
        paragraphs: [
          'Most rejected shop drawing submittals come back for the same reasons: dimensions that do not match the architectural drawings, connection details with no supporting calculations, or missing information the reviewer needs. We cross-check architectural, structural and MEP drawings before detailing starts and send RFIs early, so the first submittal is complete.',
        ],
      },
    ],
    related: [
      { to: '/blog/structural-steel-shop-drawings', label: 'Complete guide to structural steel shop drawings' },
      { to: '/blog/pe-stamp-shop-drawings-texas', label: 'Do shop drawings need a PE stamp in Texas?' },
      { to: '/blog/delegated-steel-connection-design', label: 'Delegated steel connection design explained' },
    ],
  },
  'bim-cad': {
    sections: [
      {
        heading: 'BIM Drawing Services: Revit Modeling, Coordination and CAD Drafting',
        paragraphs: [
          'PRIMECOST provides BIM drawing services for contractors, architects, engineers and building product manufacturers. We build Revit models from design drawings, scans or existing CAD files, coordinate architectural, structural and MEP models, run clash detection, and produce the 2D sheets and shop drawings the field needs.',
          'For manufacturers and suppliers, we create Revit families and CAD details of your products so design teams can drop them straight into their models, and we can pair those files with PE-stamped calculations when a project specification asks for sealed submittals.',
        ],
        bullets: [
          'Revit architectural, structural and MEP modeling (LOD 100 to 400)',
          'Navisworks clash detection and coordination reports',
          'CAD-to-BIM and scan-to-BIM conversion',
          'Revit families and CAD details for building products',
          'Construction documents, shop drawings and as-built models',
        ],
      },
      {
        heading: 'Why Contractors Outsource BIM and CAD Drafting',
        paragraphs: [
          'BIM work comes in peaks: a large coordination effort, a tight submittal schedule, or a model the owner requires at closeout. Outsourcing lets you add trained modelers for the length of the project without hiring, and having licensed engineers review the work means fewer coordination errors reach the field.',
        ],
      },
    ],
    related: [
      { to: '/blog/bim-coordination-cost-reduction', label: 'How BIM coordination reduces construction costs' },
      { to: '/blog/autocad-vs-revit', label: 'AutoCAD vs Revit for construction projects' },
      { to: '/blog/stamped-submittals-building-product-manufacturers', label: 'PE-stamped submittals and BIM/CAD for manufacturers' },
    ],
  },
  'sign-stamp-services': {
    sections: [
      {
        heading: 'PE-Sealed Structural Drawings for Permit',
        paragraphs: [
          'Most building departments require structural drawings and calculations to be sealed by a Professional Engineer licensed in the project’s state before they will issue a permit for new structures, additions, structural alterations and many commercial tenant improvements. PRIMECOST prepares and seals permit drawings, and reviews and seals drawings prepared by others after checking the design.',
          'Because a seal is only valid in states where the engineer is licensed, we match each project with an engineer licensed in that state. Our engineers hold PE licenses across 49 states, including Texas.',
        ],
        bullets: [
          'Structural plans and calculations sealed for permit submittal',
          'Review and seal of drawings prepared by architects, designers and contractors',
          'Plan review comment responses with revised sealed sheets',
          'Delegated design calculations and shop drawing review for fabricators',
          'Sealed engineer letters for inspections, closings and lenders',
        ],
      },
      {
        heading: 'What to Send for a PE Stamp Quote',
        paragraphs: [
          'Send the project address, the reviewing jurisdiction, your current drawings and any calculations, plus plan review comments if the permit was already rejected. With a complete package we can tell you quickly what review or redesign is needed, the cost and the turnaround.',
        ],
      },
    ],
    related: [
      { to: '/blog/pe-stamping-services', label: 'PE stamping services: getting drawings sealed right' },
      { to: '/blog/pe-stamp-shop-drawings-texas', label: 'When shop drawings need a PE stamp in Texas' },
      { to: '/blog/structural-engineer-letter-lender-closing', label: 'Structural engineer letters for lenders and closings' },
    ],
  },
  'structural-engineering': {
    related: [
      { to: '/blog/foundation-engineer-letter-houston', label: 'Foundation engineer letters in Houston' },
      { to: '/blog/choose-structural-engineer', label: 'How to choose a structural engineer' },
      { to: '/service-areas', label: 'Houston-area cities we serve' },
    ],
  },
  'permit-correction': {
    related: [
      { to: '/blog/houston-permit-rejected', label: 'Houston permit rejected? 7 steps to approval' },
      { to: '/blog/permit-approval-mistakes', label: '10 mistakes that delay permit approval' },
      { to: '/blog/pe-stamping-services', label: 'PE stamping services explained' },
    ],
  },
  'inspection-assessment': {
    related: [
      { to: '/blog/structural-engineer-letter-lender-closing', label: 'Engineer letters for lenders and closings' },
      { to: '/blog/foundation-engineer-letter-houston', label: 'Foundation engineer letters in Houston' },
    ],
  },
};

export default serviceGuides;
