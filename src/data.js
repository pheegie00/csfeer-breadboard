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
    'ATO documentation and security controls',
    'Form 1 (Tribal Annual Report) development',
    'Change management stakeholder mapping'
  ],
  next: [
    'Form 2 (Tribal Plan Application) design',
    'Integration with OLDC system',
    'Login.gov/OKTA implementation'
  ],
  later: [
    'Forms 3+ development',
    'State/Territory forms (Phase II)',
    'Performance Management system integration'
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
  description: 'Federal program providing funds to states, territories, and tribal organizations to reduce poverty and empower low-income communities.',
  funding: '$790 million annually',
  recipients: {
    states: 50,
    territories: 5,
    tribalOrgs: 66
  },
  keyForms: [
    'CSBG Annual Report',
    'CSBG State Plan',
    'CSBG Tribal Annual Report',
    'CSBG Tribal Plan Application',
    'Eligible Entity List'
  ],
  relatedPrograms: [
    'LIHEAP - Low Income Home Energy Assistance',
    'SSBG - Social Services Block Grant',
    'CED - Community Economic Development',
    'RCD - Rural Community Development'
  ]
};
