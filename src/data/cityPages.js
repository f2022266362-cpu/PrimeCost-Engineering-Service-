// Local landing pages for Houston-area cities. Each becomes /structural-engineer/<slug>.
// Keep every page's content specific to that city so none of them read as copies.
export const cityPages = {
  'cypress-tx': {
    city: 'Cypress',
    county: 'Harris County',
    metaTitle: 'Structural Engineer Cypress, TX | PE Stamped Drawings | PRIMECOST',
    metaDescription: 'Structural engineering in Cypress, TX: PE-stamped plans, foundation design, additions, permit corrections and inspections. Houston-based PE firm. Call (832) 234-6456.',
    h1: 'Structural Engineer in Cypress, TX',
    intro: [
      'Cypress has grown from a rural crossroads into one of the busiest building areas in northwest Harris County, with master-planned communities such as Bridgeland and Towne Lake, new retail along US-290, and steady demand for home additions, patio covers, and remodels. PRIMECOST provides PE-stamped structural engineering for homeowners, builders, and commercial developers across Cypress from our Houston office.',
      'Most of Cypress is unincorporated, so many projects go through Harris County rather than a city building department, and HOA or community architectural review often applies as well. We prepare drawings and calculations that match what your reviewer and your community need, so approvals are not held up by missing information.',
    ],
    local: [
      { title: 'Expansive clay and slab movement', desc: 'Like much of the Houston area, Cypress sits on clay soils that shrink and swell with moisture. We design slabs, beams, and piers for those conditions and provide foundation evaluations when movement shows up.' },
      { title: 'Floodplain and drainage', desc: 'Areas near Cypress Creek and its tributaries can fall in mapped floodplains. Projects there may need elevation and drainage information, which we coordinate with your surveyor and civil engineer.' },
      { title: 'Additions and patio covers', desc: 'Second-story additions, covered patios, and outdoor kitchens are common Cypress projects. We size beams, posts, connections, and footings and seal the drawings for review.' },
    ],
    services: ['structural-engineering', 'permit-correction', 'inspection-assessment', 'architectural-design'],
    nearby: ['katy-tx', 'spring-tx', 'the-woodlands-tx'],
    faq: [
      { question: 'Do I need a permit for a patio cover in Cypress, TX?', answer: 'It depends on whether your property is in an unincorporated area or inside a city, and on your HOA. Many covered patios need sealed structural drawings for review. Check with your permitting authority and HOA before you build; we can prepare the drawings either way.' },
      { question: 'Can you inspect foundation movement in a Cypress home?', answer: 'Yes. We perform foundation evaluations with a floor elevation survey and provide a PE-sealed letter with our findings and any recommended repairs.' },
      { question: 'Do you work on commercial projects in Cypress?', answer: 'Yes. We provide structural drawings, calculations, and permit corrections for retail, office, and light industrial projects in Cypress and across the Houston area.' },
    ],
  },
  'the-woodlands-tx': {
    city: 'The Woodlands',
    county: 'Montgomery County',
    metaTitle: 'Structural Engineer The Woodlands, TX | PE Stamped | PRIMECOST',
    metaDescription: 'PE-stamped structural engineering in The Woodlands and Montgomery County, TX: residential additions, commercial projects, foundation letters and permit help. Call (832) 234-6456.',
    h1: 'Structural Engineer in The Woodlands, TX',
    intro: [
      'The Woodlands combines established neighborhoods, a busy town center, and a large corporate and medical employment base, so structural work here ranges from home renovations and pool cabanas to office build-outs and medical facilities. PRIMECOST provides PE-stamped structural engineering for owners, builders, and architects in The Woodlands and the surrounding Montgomery County communities, including Conroe, Magnolia, and Montgomery.',
      'Exterior changes in The Woodlands typically go through community covenant review in addition to any permitting authority, so complete, professional drawings make approvals smoother. We prepare structural plans and calculations that answer reviewers’ questions the first time.',
    ],
    local: [
      { title: 'Wooded lots and tree roots', desc: 'Large trees close to foundations can draw moisture from the soil and contribute to slab movement. We account for this in foundation design and evaluations.' },
      { title: 'Renovations in established homes', desc: 'Removing load-bearing walls, opening up kitchens, and adding rooms are common here. We design the beams, posts, and foundation support and seal the drawings.' },
      { title: 'Commercial and medical build-outs', desc: 'Tenant improvements often need structural checks for new equipment, rooftop units, or openings in existing framing. We provide the calculations and details reviewers require.' },
    ],
    services: ['structural-engineering', 'inspection-assessment', 'architectural-design', 'mep-engineering'],
    nearby: ['spring-tx', 'cypress-tx', 'katy-tx'],
    faq: [
      { question: 'Do you serve Conroe and Montgomery, TX too?', answer: 'Yes. We work throughout Montgomery County, including The Woodlands, Conroe, Magnolia, and Montgomery, as well as the greater Houston area.' },
      { question: 'Can you design a load-bearing wall removal in The Woodlands?', answer: 'Yes. We evaluate the existing framing, size the new beam and posts, check the foundation support, and provide PE-sealed drawings for review and construction.' },
      { question: 'Do I need sealed drawings for covenant review?', answer: 'Requirements vary by project. Structural changes usually benefit from sealed drawings, and many permitting authorities require them. We can tell you what your project needs.' },
    ],
  },
  'katy-tx': {
    city: 'Katy',
    county: 'Harris, Fort Bend and Waller Counties',
    metaTitle: 'Structural Engineer Katy, TX | PE Stamped Plans & Foundations | PRIMECOST',
    metaDescription: 'Structural engineering in Katy, TX: PE-stamped plans, foundation design and evaluations, additions, commercial projects and permit corrections. Call (832) 234-6456.',
    h1: 'Structural Engineer in Katy, TX',
    intro: [
      'Katy is one of the fastest-growing parts of the Houston region, spreading across Harris, Fort Bend, and Waller counties with communities like Cinco Ranch and a steady stream of new homes, schools, retail, and industrial space along I-10 and the Grand Parkway. PRIMECOST provides PE-stamped structural engineering for Katy homeowners, builders, and developers.',
      'Because Katy-area properties may sit inside the City of Katy, in another municipality, or in an unincorporated part of one of three counties, the reviewing authority varies by address. We prepare drawings for the jurisdiction your project actually falls under.',
    ],
    local: [
      { title: 'New construction foundations', desc: 'Katy’s flat terrain and clay soils call for slab designs that handle shrink and swell. We design conventional and post-tensioned slab foundations to suit the soils report.' },
      { title: 'Drainage and flat sites', desc: 'Flat lots drain slowly, and poor drainage is a common cause of foundation problems. Our evaluations include drainage recommendations alongside structural findings.' },
      { title: 'Warehouses and light industrial', desc: 'Growth along I-10 and the Grand Parkway brings tilt-wall and pre-engineered metal buildings. We provide structural review, foundation design, and permit support for these projects.' },
    ],
    services: ['structural-engineering', 'construction-services', 'permit-correction', 'inspection-assessment'],
    nearby: ['cypress-tx', 'sugar-land-tx', 'pearland-tx'],
    faq: [
      { question: 'Who issues building permits in Katy, TX?', answer: 'It depends on the address. Properties inside the City of Katy go through the city, while many Katy-area addresses are in unincorporated Harris, Fort Bend, or Waller County or another city. We prepare drawings for whichever authority reviews your project.' },
      { question: 'Do you provide foundation letters for home sales in Katy?', answer: 'Yes. We provide PE-sealed foundation evaluations and letters for buyers, sellers, and lenders, as well as post-repair letters.' },
      { question: 'Can you design foundations for new homes?', answer: 'Yes. We design slab-on-grade and post-tensioned foundations based on the project soils report and provide sealed foundation plans.' },
    ],
  },
  'sugar-land-tx': {
    city: 'Sugar Land',
    county: 'Fort Bend County',
    metaTitle: 'Structural Engineer Sugar Land, TX | PE Stamped | PRIMECOST',
    metaDescription: 'Structural engineering in Sugar Land and Fort Bend County, TX: PE-stamped plans, renovations, commercial projects, foundation letters and permit corrections. Call (832) 234-6456.',
    h1: 'Structural Engineer in Sugar Land, TX',
    intro: [
      'Sugar Land is an established Fort Bend County city with mature neighborhoods, an active commercial core, and ongoing redevelopment, which means a lot of renovation, addition, and tenant improvement work. PRIMECOST provides PE-stamped structural engineering for Sugar Land homeowners, contractors, and commercial owners from our Houston office.',
      'Sugar Land reviews building permits through its own city development services, and HOAs are common in its neighborhoods. We prepare sealed drawings and calculations that give reviewers what they need and respond to any plan review comments.',
    ],
    local: [
      { title: 'Renovating older homes', desc: 'Many Sugar Land homes are now decades old. Opening walls, adding rooms, or converting garages often means checking existing framing and foundations before new loads are added.' },
      { title: 'Low-lying areas and drainage', desc: 'Parts of Fort Bend County are low and flat, with levees and drainage districts protecting many neighborhoods. Good site drainage is part of every foundation recommendation we make.' },
      { title: 'Commercial tenant improvements', desc: 'Retail, restaurant, and office spaces often need structural review for new openings, rooftop equipment, or mezzanines. We provide the calculations and details.' },
    ],
    services: ['structural-engineering', 'permit-correction', 'architectural-design', 'inspection-assessment'],
    nearby: ['pearland-tx', 'katy-tx', 'cypress-tx'],
    faq: [
      { question: 'Can you help if my Sugar Land permit was rejected?', answer: 'Yes. We review the plan review comments, revise the drawings, prepare calculations where needed, seal the corrected sheets, and write the response letter for resubmittal.' },
      { question: 'Do you do garage conversions and room additions?', answer: 'Yes. We evaluate the existing structure and foundation, design the new framing and support, and provide sealed drawings for the permit.' },
      { question: 'Do you serve Missouri City, Richmond and Rosenberg?', answer: 'Yes. We work across Fort Bend County and the greater Houston area.' },
    ],
  },
  'spring-tx': {
    city: 'Spring',
    county: 'Harris and Montgomery Counties',
    metaTitle: 'Structural Engineer Spring, TX | PE Stamped Drawings | PRIMECOST',
    metaDescription: 'PE-stamped structural engineering in Spring, TX: home additions, foundation evaluations, commercial drawings and permit help in Harris and Montgomery counties. Call (832) 234-6456.',
    h1: 'Structural Engineer in Spring, TX',
    intro: [
      'Spring covers a large area of north Harris County and southern Montgomery County, from Old Town Spring to newer subdivisions and commercial corridors along I-45 and the Grand Parkway. PRIMECOST provides PE-stamped structural engineering for Spring homeowners, builders, and businesses.',
      'Spring is largely unincorporated, so the reviewing authority depends on which county your property is in, and many neighborhoods also have HOA review. We prepare drawings that fit your project’s requirements and help you through review.',
    ],
    local: [
      { title: 'Creeks and flood-prone areas', desc: 'Spring Creek and Cypress Creek run through the area, and some properties sit in mapped floodplains. Projects there may need elevation information and careful drainage design.' },
      { title: 'Foundation movement', desc: 'Clay soils and large trees contribute to slab movement in many Spring homes. We provide evaluations, repair plans, and post-repair letters.' },
      { title: 'Older buildings in Old Town Spring', desc: 'Renovating older commercial and residential buildings often means assessing existing framing before reuse. We provide condition assessments and strengthening designs.' },
    ],
    services: ['structural-engineering', 'inspection-assessment', 'permit-correction', 'construction-services'],
    nearby: ['the-woodlands-tx', 'cypress-tx', 'katy-tx'],
    faq: [
      { question: 'Is Spring, TX a city?', answer: 'Spring is largely unincorporated and spans parts of Harris and Montgomery counties, so the permitting authority depends on your address.' },
      { question: 'Can you evaluate an older building before I renovate it?', answer: 'Yes. We assess the existing structure, identify what can be reused, and design any strengthening needed for the new use.' },
      { question: 'Do you provide post-repair foundation letters?', answer: 'Yes. After foundation repair, we can inspect the work and provide a PE-sealed letter documenting the results.' },
    ],
  },
  'pearland-tx': {
    city: 'Pearland',
    county: 'Brazoria County',
    metaTitle: 'Structural Engineer Pearland, TX | PE Stamped | PRIMECOST',
    metaDescription: 'Structural engineering in Pearland, TX: PE-stamped drawings, foundation design and evaluations, additions, commercial projects and permit corrections. Call (832) 234-6456.',
    h1: 'Structural Engineer in Pearland, TX',
    intro: [
      'Pearland sits just south of Houston, mainly in Brazoria County with parts in Harris and Fort Bend counties, and has grown quickly with new neighborhoods, medical facilities, and retail along SH-288. PRIMECOST provides PE-stamped structural engineering for Pearland homeowners, builders, and commercial clients.',
      'The City of Pearland reviews building permits for properties inside the city, while nearby areas may fall under county or other jurisdictions. We prepare sealed drawings and calculations for your reviewing authority and answer plan review comments.',
    ],
    local: [
      { title: 'Gulf Coast wind design', desc: 'Pearland’s location closer to the Gulf makes wind design and roof-to-wall connections an important part of structural plans, especially for patio covers, canopies, and additions.' },
      { title: 'Clay soils and new slabs', desc: 'Expansive clay soils require slab designs suited to the soils report. We design foundations for new homes and additions and evaluate movement in existing ones.' },
      { title: 'Drainage near Clear Creek', desc: 'Some Pearland properties are near Clear Creek and other drainage channels. We coordinate structural design with elevation and drainage requirements.' },
    ],
    services: ['structural-engineering', 'permit-correction', 'inspection-assessment', 'architectural-design'],
    nearby: ['sugar-land-tx', 'katy-tx', 'spring-tx'],
    faq: [
      { question: 'Do patio covers in Pearland need engineered drawings?', answer: 'Often yes, especially for larger or attached covers. Wind loads and connections must be designed properly. Check with your permitting authority and HOA; we can provide sealed drawings.' },
      { question: 'Do you serve Friendswood, League City and Alvin?', answer: 'Yes. We work across the south Houston area and Brazoria, Galveston, and Harris counties.' },
      { question: 'Can you provide a foundation letter for a home purchase?', answer: 'Yes. We provide PE-sealed foundation evaluations and letters for buyers, sellers, and lenders.' },
    ],
  },
};

export default cityPages;
