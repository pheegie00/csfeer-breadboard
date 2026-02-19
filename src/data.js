// CSFEER Project Data
// Community Services Forms Engine for Efficient Reporting

export const projectInfo = {
  name: "CSFEER",
  fullName: "Community Services Forms Engine for Efficient Reporting",
  client: "ACF Office of Community Services",
  contractor: "Focus Consulting",
  phase: "Phase I - MVP",
  startDate: "2025-01",
  targetDate: "2025-09"
};

// ============================================================
// MVP PRODUCT SPECIFICATION
// ============================================================

export const mvpSpec = {
  vision: "Modernize and streamline the data collection and reporting process for CSBG tribal grantees, replacing legacy systems with a user-centered digital forms platform that improves data quality, reduces administrative burden, and enables better program outcomes tracking.",
  
  problemStatement: `The current Online Data Collection (OLDC) system presents significant challenges for tribal organizations reporting on Community Services Block Grant (CSBG) activities:
  
• **Outdated Technology**: The legacy system uses complex SmartForms with rigid validation rules that frustrate users and lead to data entry errors
• **Poor User Experience**: Tribal staff struggle with non-intuitive interfaces, leading to incomplete submissions and delayed reporting cycles
• **Manual Processes**: Data validation and quality checks require extensive manual intervention by OCS staff
• **Limited Accessibility**: Current system doesn't meet modern accessibility standards or work well on mobile devices
• **Integration Gaps**: Siloed data systems prevent holistic view of grantee performance and program impact`,

  mvpScope: `Phase I delivers a modern forms platform for tribal CSBG grantees with three core forms:

1. **CSBG Tribal Annual Report (Short Form)** - Streamlined annual outcome reporting for tribal organizations
2. **CSBG Tribal Plan Application** - Pre-award planning and budget submission for tribal grants
3. **CSBG Eligible Entity List** - Registry management for eligible tribal entities

Key MVP capabilities:
• Modern, accessible web interface following USWDS design standards
• Login.gov/OKTA integration for secure authentication
• Real-time validation with helpful error messaging
• Auto-save and resume functionality
• Data export and integration with OCS Performance Management system
• Role-based access control for tribal staff and OCS reviewers`,

  successMetrics: [
    { metric: "Form Completion Rate", target: ">90%", baseline: "~75% with current OLDC system" },
    { metric: "Time to Complete Annual Report", target: "<2 hours", baseline: "4-6 hours average" },
    { metric: "Data Quality Score", target: ">95% submissions without errors", baseline: "~70%" },
    { metric: "User Satisfaction (SUS Score)", target: ">80", baseline: "Not measured" },
    { metric: "Accessibility Compliance", target: "WCAG 2.1 AA", baseline: "Not compliant" }
  ]
};

// ============================================================
// PROJECT IMPORTANCE & IMPACT
// ============================================================

export const projectImportance = {
  headline: "Empowering Tribal Communities Through Better Data",
  
  whyItMatters: `The Community Services Block Grant program provides $770 million annually to fight poverty across America. For tribal communities, CSBG funding is often the primary federal resource supporting:

• Employment and education services
• Emergency assistance and crisis intervention  
• Housing stability and utility assistance
• Nutrition programs and food security
• Health and wellness initiatives

**The reporting burden on tribal organizations directly impacts their capacity to deliver services.** Every hour spent fighting with legacy forms is an hour not spent helping community members. CSFEER's mission is to flip that equation—making reporting effortless so tribal staff can focus on their communities.`,

  strategicAlignment: [
    "ACF Digital Transformation Initiative - Modernizing citizen-facing services",
    "Federal Plain Language Act - Clear, accessible government communications",
    "21st Century IDEA - Digital-first service delivery mandate",
    "Executive Order on Customer Experience - Reducing administrative burden",
    "OMB Circular A-11 Section 280 - Improving federal service delivery"
  ],

  impactNumbers: {
    tribalOrgsServed: 66,
    annualFunding: "$770 million",
    individualsServedByCSBG: "10+ million",
    householdsServed: "5+ million",
    currentFormCompletionTime: "4-6 hours",
    targetFormCompletionTime: "<2 hours"
  }
};

// ============================================================
// USERS & PERSONAS
// ============================================================

export const users = [
  {
    id: "tribal-admin",
    name: "Tribal Program Administrator",
    icon: "👤",
    description: "Primary form submitter at tribal organizations",
    responsibilities: [
      "Complete annual reports and plan applications",
      "Gather data from local service providers",
      "Coordinate with tribal leadership on submissions",
      "Maintain organizational profile and eligible entity info"
    ],
    painPoints: [
      "Limited time—wears many hats beyond reporting",
      "Unreliable internet connectivity in some areas",
      "Complex validation rules unclear in current system",
      "No ability to save progress and return later"
    ],
    needs: [
      "Simple, intuitive interface that works on any device",
      "Clear guidance on what data is needed",
      "Ability to save drafts and collaborate with others",
      "Offline capability for areas with poor connectivity"
    ],
    count: "~100 users across 66 tribal organizations"
  },
  {
    id: "tribal-director",
    name: "Tribal CSBG Director",
    icon: "👔",
    description: "Leadership overseeing CSBG programs at tribal level",
    responsibilities: [
      "Review and approve submissions before final filing",
      "Strategic planning for CSBG-funded programs",
      "Liaison with OCS federal staff",
      "Ensure compliance with grant requirements"
    ],
    painPoints: [
      "Limited visibility into submission status",
      "Difficult to track year-over-year trends",
      "Manual process to get data for board reports"
    ],
    needs: [
      "Dashboard view of submission status",
      "Historical data comparison",
      "Export capabilities for reporting to tribal council"
    ],
    count: "~66 directors"
  },
  {
    id: "ocs-program-specialist",
    name: "OCS Program Specialist",
    icon: "🏛️",
    description: "Federal staff managing tribal CSBG programs",
    responsibilities: [
      "Review submitted reports for completeness",
      "Provide technical assistance to tribal grantees",
      "Monitor program compliance",
      "Aggregate data for reports to Congress"
    ],
    painPoints: [
      "Manual data quality checks consume significant time",
      "Difficult to identify grantees needing assistance",
      "Data lives in multiple disconnected systems"
    ],
    needs: [
      "Automated validation and quality scoring",
      "Early warning indicators for at-risk submissions",
      "Unified view across all tribal grantees"
    ],
    count: "~10 specialists in DCA"
  },
  {
    id: "ocs-leadership",
    name: "OCS Leadership",
    icon: "⭐",
    description: "Division directors and office leadership",
    responsibilities: [
      "Program oversight and policy decisions",
      "Congressional reporting and testimony",
      "Strategic direction for CSBG modernization"
    ],
    painPoints: [
      "Delayed access to aggregate program data",
      "Manual report generation for Congress",
      "Limited real-time visibility into program health"
    ],
    needs: [
      "Executive dashboards with key metrics",
      "Automated Congressional report generation",
      "Trend analysis and predictive insights"
    ],
    count: "~5 leadership staff"
  }
];

export const milestones = [
  { id: 'm1', title: 'Project Kickoff', workstream: 'PM', status: 'complete', date: '2025-01-15', desc: 'Initial team onboarding and project charter' },
  { id: 'm2', title: 'Discovery & Research', workstream: 'Design', status: 'complete', date: '2025-02-01', desc: 'User research and stakeholder interviews' },
  { id: 'm3', title: 'Architecture Review', workstream: 'Engineering', status: 'complete', date: '2025-02-15', desc: 'Technical architecture approval' },
  { id: 'm4', title: 'ATO Documentation Kickoff', workstream: 'Compliance/ATO', status: 'in-progress', date: '2025-03-01', desc: 'Begin Authority to Operate process' },
  { id: 'm5', title: 'UI/UX Design System', workstream: 'UX/UI', status: 'complete', date: '2025-03-15', desc: 'Design system and component library' },
  { id: 'm6', title: 'Form 1 Design Complete', workstream: 'Design', status: 'complete', date: '2025-04-01', desc: 'Tribal Annual Report Short Form design' },
  { id: 'm7', title: 'Form 1 Development', workstream: 'Engineering', status: 'in-progress', date: '2025-04-15', desc: 'Build Tribal Annual Report Short Form' },
  { id: 'm8', title: 'Change Management Plan', workstream: 'Change Management', status: 'in-progress', date: '2025-04-30', desc: 'Stakeholder communication strategy' },
  { id: 'm9', title: 'Form 2 Design Complete', workstream: 'Design', status: 'in-progress', date: '2025-05-15', desc: 'Tribal Plan Application design' },
  { id: 'm10', title: 'Form 2 Development', workstream: 'Engineering', status: 'planned', date: '2025-06-01', desc: 'Build Tribal Plan Application' },
  { id: 'm11', title: 'Form 3 Design Complete', workstream: 'Design', status: 'planned', date: '2025-06-15', desc: 'Eligible Entity List design' },
  { id: 'm12', title: 'Form 3 Development', workstream: 'Engineering', status: 'planned', date: '2025-07-01', desc: 'Build Eligible Entity List' },
  { id: 'm13', title: 'Integration Testing', workstream: 'Engineering', status: 'planned', date: '2025-07-15', desc: 'End-to-end system testing' },
  { id: 'm14', title: 'ATO Package Submission', workstream: 'Compliance/ATO', status: 'planned', date: '2025-08-01', desc: 'Submit for security authorization' },
  { id: 'm15', title: 'UAT with Tribal Orgs', workstream: 'UX/UI', status: 'planned', date: '2025-08-15', desc: 'User acceptance testing' },
  { id: 'm16', title: 'Training Materials', workstream: 'Change Management', status: 'planned', date: '2025-08-30', desc: 'Develop user training content' },
  { id: 'm17', title: 'ATO Granted', workstream: 'Compliance/ATO', status: 'planned', date: '2025-09-01', desc: 'Security authorization approved' },
  { id: 'm18', title: 'Phase I Launch', workstream: 'PM', status: 'planned', date: '2025-09-15', desc: 'Production deployment for tribal forms' }
];

export const nowNextLater = {
  now: [
    'Design & implementation: Tribal Annual Report (Short Form)',
    'Design & implementation: Tribal Plan Application',
    'Design & implementation: Eligible Entity List',
    'ATO documentation and security controls',
    'Login.gov/OKTA authentication integration'
  ],
  next: [
    'User acceptance testing with tribal organizations',
    'Integration with OLDC legacy system',
    'Change management & training materials',
    'ATO package submission and approval'
  ],
  later: [
    'Phase I production launch (tribal forms)',
    'State/Territory forms (Phase II)',
    'Performance Management system integration',
    'Full CSBG Annual Report 3.0 implementation'
  ]
};

export const forms = [
  { id: 'f1', name: 'CSBG Tribal Annual Report Short Form', phase: 1, designStatus: 'complete', engStatus: 'in-progress', desc: 'Annual reporting form for tribal CSBG grantees' },
  { id: 'f2', name: 'CSBG Tribal Plan Application', phase: 1, designStatus: 'in-progress', engStatus: 'planned', desc: 'Pre-award planning form for tribal organizations' },
  { id: 'f3', name: 'CSBG Eligible Entity List', phase: 1, designStatus: 'planned', engStatus: 'planned', desc: 'Registry of eligible entities' },
  { id: 'f4', name: 'CSBG State Plan 3.0', phase: 2, designStatus: 'planned', engStatus: 'planned', desc: 'State-level CSBG planning form' },
  { id: 'f5', name: 'CSBG Annual Report 3.0', phase: 2, designStatus: 'planned', engStatus: 'planned', desc: 'Full annual report for states/territories' }
];

export const stakeholders = [
  // OCS Leadership
  { id: 's1', name: 'Office of Community Services (OCS)', type: 'federal', tier: 1, org: 'ACF / OCS', role: 'Primary Client Office', notes: 'Owns CSBG program and forms' },
  { id: 's2', name: 'Division of Community Assistance (DCA)', type: 'federal', tier: 1, org: 'ACF / OCS / DCA', role: 'Direct Client Division', notes: 'Manages CSBG tribal grants' },
  { id: 's3', name: 'Division of State Services (DSS)', type: 'federal', tier: 2, org: 'ACF / OCS / DSS', role: 'State CSBG Programs', notes: 'Phase II stakeholder' },
  { id: 's4', name: 'Policy & Grant Education Branch', type: 'federal', tier: 2, org: 'ACF / OCS / DCA', role: 'Policy Guidance', notes: 'CSBG policy and training' },
  
  // OCIO / Tech
  { id: 's5', name: 'Digital Services at ACF (DSACF)', type: 'federal', tier: 1, org: 'ACF / OCIO / DSACF', role: 'IT Governance', notes: 'Technical oversight and standards' },
  { id: 's6', name: 'ACF Tech', type: 'federal', tier: 2, org: 'ACF / OA / ACF Tech', role: 'Technical Infrastructure', notes: 'Cloud and infrastructure support' },
  
  // Tribal
  { id: 's7', name: 'Tribal CSBG Grantees', type: 'tribal', tier: 1, role: 'End Users', notes: '66+ tribal organizations using the forms' },
  { id: 's8', name: 'National Community Action Partnership', type: 'tribal', tier: 2, role: 'CAA Network', notes: '~1,000 Community Action Agencies' },
  
  // Focus Team
  { id: 's9', name: 'Focus Consulting', type: 'focus', tier: 1, role: 'Prime Contractor', notes: 'Delivery and project management' },
  
  // Named POCs - Federal
  { id: 'p1', name: 'Minette Galindo', type: 'federal', contractType: 'FED', tier: 1, org: 'OCS', role: 'Program Official', notes: 'Primary OCS contact' },
  { id: 'p2', name: 'Melanie Durley', type: 'federal', contractType: 'FED', tier: 1, org: 'OCS', role: 'Product Owner / Program Evaluator', notes: 'Key decision maker' },
  { id: 'p3', name: 'Lena Kotanchyan', type: 'federal', contractType: 'FED', tier: 2, org: 'OCS', role: 'Data Analyst', notes: 'Process documentation and data flows' },
  { id: 'p4', name: 'Tiffany Tatham-Miller', type: 'federal', contractType: 'FED', tier: 2, org: 'OCS', role: 'COR', notes: 'Contracting Officer Representative' },
  { id: 'p5', name: 'Kira Tebbe', type: 'federal', contractType: 'FED', tier: 1, org: 'OCIO / DSACF', role: 'Product Manager', notes: 'Tech side counterpart' },
  { id: 'p6', name: 'Liane Peng', type: 'federal', contractType: 'FED', tier: 1, org: 'OCIO / DSACF', role: 'Service Designer', notes: 'Design strategy lead' },
  { id: 'p7', name: 'Sarah Ignacio', type: 'federal', contractType: 'FED', tier: 2, org: 'DOI', role: 'Contracting Officer', notes: 'Contract authority' },
  { id: 'p8', name: 'Thomas Oldfield', type: 'federal', contractType: 'FED', tier: 2, org: 'ACF', role: 'Data Structure Liaison', notes: 'Upstream systems integration' },
  { id: 'p9', name: 'Harold Jones', type: 'federal', contractType: 'FED', tier: 2, org: 'ACF', role: 'Tech Stack Approver', notes: 'Architecture decisions' },
  { id: 'p10', name: 'Michael Chelen', type: 'federal', contractType: 'FED', tier: 3, org: 'ACF', role: 'ACF POC', notes: '' },
  { id: 'p11', name: 'Roberta Jacobs', type: 'federal', contractType: 'FED', tier: 3, org: 'ACF', role: 'ACF POC', notes: '' },
  { id: 'p12', name: 'Kayla Lennon', type: 'federal', contractType: 'FED', tier: 3, org: 'ACF', role: 'ACF POC', notes: '' },
  { id: 'p13', name: 'Mark Levy', type: 'federal', contractType: 'FED', tier: 2, org: 'ACF', role: 'Strategic Operations / Data Consultant', notes: '' },
  { id: 'p14', name: 'Madeline Solan', type: 'federal', contractType: 'FED', tier: 1, org: 'ACF', role: 'Executive Sponsor', notes: 'Senior leadership' },
  
  // Named POCs - Contractors
  { id: 'p15', name: 'Jody Smith', type: 'contractor', contractType: 'CTR', tier: 2, org: 'ACF Tech', role: 'Project Lead', notes: 'ACF Tech project coordination' },
  { id: 'p16', name: 'Oyindasola Akisanmi', type: 'contractor', contractType: 'CTR', tier: 1, org: 'ACF', role: 'ATO Lead', notes: 'Security authorization lead' },
  { id: 'p17', name: 'Katherine Chase', type: 'contractor', contractType: 'CTR', tier: 2, org: 'ACF', role: 'Ops / Login.gov', notes: 'Authentication implementation' },
  { id: 'p18', name: 'Matt Ding', type: 'contractor', contractType: 'CTR', tier: 2, org: 'ACF', role: 'OKTA/Login.gov Engineer', notes: 'Identity integration' },
  { id: 'p19', name: 'Tharun Chada', type: 'contractor', contractType: 'CTR', tier: 2, org: 'ACF', role: 'NGSC Engineer', notes: 'Cloud infrastructure' },
  { id: 'p20', name: 'Bruce Mbithi', type: 'contractor', contractType: 'CTR', tier: 2, org: 'ACF', role: 'DBA Leader', notes: 'Database architecture' },
  { id: 'p21', name: 'Jon Warren', type: 'contractor', contractType: 'CTR', tier: 2, org: 'ACF', role: 'DBA Manager', notes: 'Database team assignments' },
  { id: 'p22', name: 'Beatrice Adenigbagbe', type: 'contractor', contractType: 'CTR', tier: 3, org: 'ACF', role: 'ATO Support', notes: 'Security documentation' },
  { id: 'p23', name: 'Amanda Welch', type: 'contractor', contractType: 'CTR', tier: 2, org: 'ACF', role: 'Strategic Operations', notes: '' },
  { id: 'p24', name: 'Jim Cooper', type: 'contractor', contractType: 'CTR', tier: 3, org: 'ACF', role: 'OKTA/Login.gov Provisioning', notes: '' },
  { id: 'p25', name: 'Darin Hall', type: 'contractor', contractType: 'CTR', tier: 3, org: 'ACF', role: 'ACF POC', notes: '' },
  { id: 'p26', name: 'Whitney Kase', type: 'contractor', contractType: 'CTR', tier: 3, org: 'ACF', role: 'ACF POC', notes: '' },
  { id: 'p27', name: 'Gaurav Sahni', type: 'contractor', contractType: 'CTR', tier: 3, org: 'ACF', role: 'ACF POC', notes: '' }
];

export const acfOrgChart = {
  name: 'HHS',
  fullName: 'Department of Health and Human Services',
  children: [
    {
      name: 'ACF',
      fullName: 'Administration for Children & Families',
      highlight: true,
      children: [
        {
          name: 'OCIO',
          fullName: 'Office of Chief Information Officer',
          children: [
            { name: 'DSACF', fullName: 'Digital Services at ACF', highlight: 'tech', notes: 'Tech governance partner' }
          ]
        },
        {
          name: 'OA',
          fullName: 'Office of Administration',
          children: [
            { name: 'ACF Tech', highlight: 'tech', notes: 'Infrastructure support' },
            { name: 'Security', highlight: 'tech' }
          ]
        },
        {
          name: 'OCS',
          fullName: 'Office of Community Services',
          highlight: 'primary',
          notes: 'Primary client office',
          children: [
            { name: 'DEA', fullName: 'Division of Energy Assistance' },
            { name: 'D-DAP', fullName: 'Division of Discretionary and Demonstration Programs' },
            { name: 'DSS', fullName: 'Division of State Services', notes: 'Phase II stakeholder' },
            {
              name: 'DCA',
              fullName: 'Division of Community Assistance',
              highlight: 'primary',
              notes: 'Direct client - manages CSBG tribal grants',
              children: [
                { name: 'CSIL', fullName: 'Community Services Innovation Loan' },
                { name: 'Policy & Grant Education Branch', highlight: 'sme' }
              ]
            }
          ]
        },
        { name: 'OHS', fullName: 'Office of Head Start' },
        { name: 'OFA', fullName: 'Office of Family Assistance' },
        { name: 'OCC', fullName: 'Office of Child Care' },
        { name: 'ORR', fullName: 'Office of Refugee Resettlement' },
        { name: 'ANA', fullName: 'Administration for Native Americans' }
      ]
    }
  ]
};

export const tribalOrgs = [
  'Aleutian Pribilof Islands Association',
  'Association of Village Council Presidents',
  'Bristol Bay Native Association',
  'Central Council Tlingit & Haida Indian Tribes',
  'Chugachmiut',
  'Cook Inlet Tribal Council',
  'Copper River Native Association',
  'Kawerak Inc.',
  'Kodiak Area Native Association',
  'Maniilaq Association',
  'Metlakatla Indian Community',
  'Native Village of Barrow',
  'North Slope Borough',
  'Northwest Arctic Borough',
  'Tanana Chiefs Conference',
  'Tlingit Haida Central Council',
  'Cherokee Nation',
  'Chickasaw Nation',
  'Choctaw Nation of Oklahoma',
  'Citizen Potawatomi Nation',
  'Comanche Nation',
  'Delaware Nation',
  'Eastern Shawnee Tribe',
  'Iowa Tribe of Oklahoma',
  'Kaw Nation',
  'Kickapoo Tribe of Oklahoma',
  'Kiowa Tribe',
  'Miami Tribe of Oklahoma',
  'Modoc Nation',
  'Muscogee (Creek) Nation',
  'Osage Nation',
  'Ottawa Tribe of Oklahoma',
  'Pawnee Nation',
  'Peoria Tribe of Indians',
  'Ponca Tribe of Oklahoma',
  'Quapaw Nation',
  'Sac and Fox Nation',
  'Seminole Nation of Oklahoma',
  'Seneca-Cayuga Nation',
  'Shawnee Tribe',
  'Tonkawa Tribe',
  'United Keetoowah Band',
  'Wichita and Affiliated Tribes',
  'Wyandotte Nation',
  'Navajo Nation',
  'Hopi Tribe',
  'Gila River Indian Community',
  'Salt River Pima-Maricopa',
  'Tohono O\'odham Nation',
  'White Mountain Apache',
  'San Carlos Apache',
  'Colorado River Indian Tribes',
  'Fort Mojave Indian Tribe',
  'Pascua Yaqui Tribe',
  'Ak-Chin Indian Community',
  'Cocopah Tribe',
  'Fort McDowell Yavapai Nation',
  'Havasupai Tribe',
  'Hualapai Tribe',
  'Kaibab Paiute Tribe',
  'Quechan Tribe',
  'Yavapai-Apache Nation',
  'Yavapai-Prescott Indian Tribe',
  'Standing Rock Sioux Tribe',
  'Oglala Sioux Tribe',
  'Rosebud Sioux Tribe'
];

export const risks = [
  { id: 'r1', title: 'ATO Timeline Risk', severity: 'high', impact: 'Could delay Phase I launch', mitigation: 'Early engagement with security team, parallel workstreams', owner: 'Oyindasola Akisanmi' },
  { id: 'r2', title: 'Login.gov Integration Complexity', severity: 'high', impact: 'Authentication delays', mitigation: 'Dedicated identity integration track, early testing', owner: 'Matt Ding' },
  { id: 'r3', title: 'Tribal Organization Adoption', severity: 'medium', impact: 'Low initial usage', mitigation: 'Change management plan, UAT with tribal users, training materials', owner: 'Focus Team' },
  { id: 'r4', title: 'OLDC System Integration', severity: 'medium', impact: 'Data migration issues', mitigation: 'Early API documentation review, integration testing sprints', owner: 'Thomas Oldfield' },
  { id: 'r5', title: 'Government Shutdown', severity: 'medium', impact: 'Work stoppage, timeline delays', mitigation: 'Contingency planning, documentation of progress', owner: 'PM Team' },
  { id: 'r6', title: 'Scope Creep (State Forms)', severity: 'low', impact: 'Phase I timeline impact', mitigation: 'Clear phase boundaries, change control process', owner: 'Product Owner' },
  { id: 'r7', title: 'Resource Availability', severity: 'low', impact: 'Delivery velocity', mitigation: 'Cross-training, documentation', owner: 'Focus Team' }
];

export const csbgProgram = {
  name: 'Community Services Block Grant',
  fullName: 'Community Services Block Grant (CSBG)',
  legislativeAuthority: 'Community Opportunities, Accountability, and Training and Educational Services Human Services Reauthorization Act of 1998 (P.L. 105-285)',
  
  description: 'The Community Services Block Grant (CSBG) is a federally funded block grant that provides funds to states, territories, and tribes to support services that alleviate the causes and conditions of poverty in under-resourced communities. Over 9 million individuals are served by CSBG-funded programs annually.',
  
  purpose: 'To support services and activities for individuals and families with low incomes that alleviate the causes and conditions of poverty in communities.',
  
  funding: {
    fy2024: '$770 million',
    fy2023: '$770 million',
    fy2022: '$755 million'
  },
  
  recipients: {
    states: 50,
    territories: 5,
    tribalOrgs: 66,
    communityActionAgencies: 1000
  },
  
  impact: {
    individualsServed: '10+ million',
    householdsServed: '5+ million',
    multigenerationalHouseholds: '94,000',
    housingStabilized: '437,000 individuals avoided eviction or obtained safe housing',
    energyAssistance: '4+ million individuals with reduced energy burden',
    childrenServed: '1 million (ages 0-5)',
    individualsWithDisabilities: '1.5 million',
    olderAdults: '1.3 million (65+)',
    olderAdultsIndependentLiving: '555,000 maintained independent living'
  },
  
  servicesProvided: [
    'Employment and job training programs',
    'Education services (adult literacy, GED prep, college readiness)',
    'Housing assistance and homelessness prevention',
    'Nutrition programs and food security',
    'Utility and energy assistance',
    'Transportation services',
    'Emergency and crisis intervention',
    'Health and wellness programs',
    'Financial literacy and asset building',
    'Child and youth development programs'
  ],
  
  keyForms: [
    { name: 'CSBG Annual Report', version: '3.0', scope: 'States/Territories' },
    { name: 'CSBG State Plan', version: '3.0', scope: 'States/Territories' },
    { name: 'CSBG Tribal Annual Report (Short Form)', version: '1.0', scope: 'Tribal - Phase I' },
    { name: 'CSBG Tribal Plan Application', version: '1.0', scope: 'Tribal - Phase I' },
    { name: 'Eligible Entity List', version: '1.0', scope: 'All grantees' }
  ],
  
  relatedPrograms: [
    { abbrev: 'LIHEAP', name: 'Low Income Home Energy Assistance Program', desc: 'Helps low-income households with energy costs' },
    { abbrev: 'SSBG', name: 'Social Services Block Grant', desc: 'Flexible funding for social services' },
    { abbrev: 'CED', name: 'Community Economic Development', desc: 'Supports businesses creating jobs in low-income areas' },
    { abbrev: 'RCD', name: 'Rural Community Development', desc: 'Technical assistance for rural communities' }
  ],
  
  contacts: {
    statePrograms: 'CSBGStates@acf.hhs.gov',
    tribalPrograms: 'CSBGTribes@acf.hhs.gov',
    phone: '(202) 401-9380'
  }
};
