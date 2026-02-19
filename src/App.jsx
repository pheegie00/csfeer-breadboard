import { useState, useMemo } from 'react';
import { projectInfo, milestones, nowNextLater, forms, stakeholders, acfOrgChart, tribalOrgs, risks, csbgProgram, mvpSpec, projectImportance, users } from './data.js';

// Tab Components
function OverviewTab() {
  const [section, setSection] = useState('mvp');

  return (
    <div>
      <div className="filter-bar" style={{ marginBottom: '1.5rem' }}>
        {[
          { id: 'mvp', label: '📋 MVP Spec' },
          { id: 'importance', label: '💡 Why It Matters' },
          { id: 'users', label: '👥 Users' },
          { id: 'csbg', label: '📊 CSBG Program' },
          { id: 'delivery', label: '🎯 Delivery' }
        ].map(s => (
          <button
            key={s.id}
            className={`filter-btn ${section === s.id ? 'active' : ''}`}
            onClick={() => setSection(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>

      {section === 'mvp' && (
        <div>
          <h2 className="section-title">Product Vision</h2>
          <div className="card" style={{ marginBottom: '1.5rem', background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f0f0 100%)' }}>
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#1a4480' }}>{mvpSpec.vision}</p>
          </div>

          <h2 className="section-title">Problem Statement</h2>
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <div style={{ whiteSpace: 'pre-line', fontSize: '0.9rem' }} dangerouslySetInnerHTML={{ __html: mvpSpec.problemStatement.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </div>

          <h2 className="section-title">Phase I MVP Scope</h2>
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <div style={{ whiteSpace: 'pre-line', fontSize: '0.9rem' }} dangerouslySetInnerHTML={{ __html: mvpSpec.mvpScope.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </div>

          <h2 className="section-title">Success Metrics</h2>
          <div className="grid-3">
            {mvpSpec.successMetrics.map((m, i) => (
              <div key={i} className="card">
                <h3>{m.metric}</h3>
                <p style={{ fontSize: '1.5rem', color: '#00a91c', fontWeight: 'bold' }}>{m.target}</p>
                <p style={{ fontSize: '0.8rem', color: '#71767a' }}>Baseline: {m.baseline}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {section === 'importance' && (
        <div>
          <h2 className="section-title">{projectImportance.headline}</h2>
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <div style={{ whiteSpace: 'pre-line', fontSize: '0.95rem' }} dangerouslySetInnerHTML={{ __html: projectImportance.whyItMatters.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </div>

          <h2 className="section-title">Impact by the Numbers</h2>
          <div className="grid-3">
            <div className="card" style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#005ea2' }}>{projectImportance.impactNumbers.tribalOrgsServed}</p>
              <p>Tribal Organizations Served</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#005ea2' }}>{projectImportance.impactNumbers.annualFunding}</p>
              <p>Annual CSBG Funding</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#005ea2' }}>{projectImportance.impactNumbers.individualsServedByCSBG}</p>
              <p>Individuals Served Annually</p>
            </div>
          </div>

          <h2 className="section-title" style={{ marginTop: '1.5rem' }}>Strategic Alignment</h2>
          <div className="card">
            <ul className="card-list">
              {projectImportance.strategicAlignment.map((item, i) => (
                <li key={i}>✓ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {section === 'users' && (
        <div>
          <h2 className="section-title">System Users & Personas</h2>
          <div className="grid-3">
            {users.map(user => (
              <div key={user.id} className="card" style={{ borderLeftColor: '#005ea2' }}>
                <h3>{user.icon} {user.name}</h3>
                <p style={{ fontSize: '0.85rem', marginBottom: '0.75rem' }}>{user.description}</p>
                <p style={{ fontSize: '0.75rem', color: '#71767a' }}>{user.count}</p>
                
                <details style={{ marginTop: '0.75rem' }}>
                  <summary style={{ cursor: 'pointer', fontSize: '0.85rem', color: '#005ea2' }}>Responsibilities</summary>
                  <ul style={{ fontSize: '0.8rem', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                    {user.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </details>
                
                <details style={{ marginTop: '0.5rem' }}>
                  <summary style={{ cursor: 'pointer', fontSize: '0.85rem', color: '#d83933' }}>Pain Points</summary>
                  <ul style={{ fontSize: '0.8rem', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                    {user.painPoints.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </details>
                
                <details style={{ marginTop: '0.5rem' }}>
                  <summary style={{ cursor: 'pointer', fontSize: '0.85rem', color: '#00a91c' }}>Needs</summary>
                  <ul style={{ fontSize: '0.8rem', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                    {user.needs.map((n, i) => <li key={i}>{n}</li>)}
                  </ul>
                </details>
              </div>
            ))}
          </div>
        </div>
      )}

      {section === 'csbg' && (
        <div>
          <h2 className="section-title">About the CSBG Program</h2>
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3>📊 {csbgProgram.fullName}</h3>
            <p style={{ marginTop: '0.5rem' }}>{csbgProgram.description}</p>
            <p style={{ marginTop: '0.75rem', fontStyle: 'italic', fontSize: '0.9rem', color: '#1a4480' }}>
              <strong>Purpose:</strong> {csbgProgram.purpose}
            </p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#71767a' }}>
              Legislative Authority: {csbgProgram.legislativeAuthority}
            </p>
          </div>

          <h2 className="section-title">FY2023 Program Impact</h2>
          <div className="grid-3">
            <div className="card" style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#005ea2' }}>{csbgProgram.impact.individualsServed}</p>
              <p>Individuals Served</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#005ea2' }}>{csbgProgram.impact.householdsServed}</p>
              <p>Households Served</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#00a91c' }}>{csbgProgram.impact.housingStabilized}</p>
              <p>Housing Stability</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#005ea2' }}>{csbgProgram.impact.childrenServed}</p>
              <p>Children (0-5) Served</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#005ea2' }}>{csbgProgram.impact.olderAdults}</p>
              <p>Older Adults Served</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#005ea2' }}>{csbgProgram.impact.individualsWithDisabilities}</p>
              <p>People with Disabilities</p>
            </div>
          </div>

          <h2 className="section-title" style={{ marginTop: '1.5rem' }}>Services Provided by CSBG Network</h2>
          <div className="card">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '0.5rem' }}>
              {csbgProgram.servicesProvided.map((service, i) => (
                <div key={i} style={{ padding: '0.5rem', background: '#f0f0f0', borderRadius: '4px', fontSize: '0.85rem' }}>
                  ✓ {service}
                </div>
              ))}
            </div>
          </div>

          <h2 className="section-title" style={{ marginTop: '1.5rem' }}>Related OCS Programs</h2>
          <div className="grid-3">
            {csbgProgram.relatedPrograms.map((prog, i) => (
              <div key={i} className="card">
                <h3>{prog.abbrev}</h3>
                <p style={{ fontWeight: '500', fontSize: '0.9rem' }}>{prog.name}</p>
                <p style={{ fontSize: '0.85rem', color: '#71767a' }}>{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {section === 'delivery' && (
        <div>
          <h2 className="section-title">Focus Delivery Framework</h2>
          <div className="grid-3">
            <div className="card" style={{ borderLeftColor: '#00a91c' }}>
              <h3>🎯 Now</h3>
              <ul className="card-list">
                {nowNextLater.now.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div className="card" style={{ borderLeftColor: '#ffbe2e' }}>
              <h3>⏭️ Next</h3>
              <ul className="card-list">
                {nowNextLater.next.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div className="card" style={{ borderLeftColor: '#71767a' }}>
              <h3>📅 Later</h3>
              <ul className="card-list">
                {nowNextLater.later.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function RoadmapTab() {
  const [filter, setFilter] = useState('All');
  const workstreams = ['All', 'PM', 'Design', 'UX/UI', 'Engineering', 'Compliance/ATO', 'Change Management'];
  
  const filtered = filter === 'All' 
    ? milestones 
    : milestones.filter(m => m.workstream === filter);

  const complete = milestones.filter(m => m.status === 'complete').length;
  const inProgress = milestones.filter(m => m.status === 'in-progress').length;
  const progress = Math.round((complete / milestones.length) * 100);

  return (
    <div>
      <div className="filter-bar">
        {workstreams.map(ws => (
          <button
            key={ws}
            className={`filter-btn ${filter === ws ? 'active' : ''}`}
            onClick={() => setFilter(ws)}
          >
            {ws}
          </button>
        ))}
        <div className="counter">
          <span className="pill green">{complete} Complete</span>
          <span className="pill amber" style={{ marginLeft: '0.5rem' }}>{inProgress} In Progress</span>
          <span style={{ marginLeft: '0.5rem' }}>{progress}% Overall</span>
        </div>
      </div>
      
      <div className="grid-3">
        {filtered.map(m => (
          <div key={m.id} className={`card milestone-card ${m.status}`}>
            <h3>{m.title}</h3>
            <p>{m.desc}</p>
            <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span className={`pill ${m.status === 'complete' ? 'green' : m.status === 'in-progress' ? 'amber' : 'gray'}`}>
                {m.status.replace('-', ' ')}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#71767a' }}>{m.workstream}</span>
              <span style={{ fontSize: '0.75rem', color: '#71767a', marginLeft: 'auto' }}>{m.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FormsTab() {
  const phase1 = forms.filter(f => f.phase === 1);
  const phase2 = forms.filter(f => f.phase === 2);

  const statusPill = (status) => {
    const colors = { complete: 'green', 'in-progress': 'amber', planned: 'gray' };
    return <span className={`pill ${colors[status]}`}>{status.replace('-', ' ')}</span>;
  };

  return (
    <div>
      <h2 className="section-title">Phase I Forms (Tribal)</h2>
      <div className="grid-3">
        {phase1.map(f => (
          <div key={f.id} className="card form-card">
            <h3>{f.name}</h3>
            <p>{f.desc}</p>
            <div className="form-status">
              <span style={{ fontSize: '0.75rem' }}>Design: {statusPill(f.designStatus)}</span>
              <span style={{ fontSize: '0.75rem' }}>Dev: {statusPill(f.engStatus)}</span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title" style={{ marginTop: '2rem' }}>Phase II Pipeline (State/Territory)</h2>
      <div className="grid-3">
        {phase2.map(f => (
          <div key={f.id} className="card form-card" style={{ opacity: 0.7 }}>
            <h3>{f.name}</h3>
            <p>{f.desc}</p>
            <div className="form-status">
              <span style={{ fontSize: '0.75rem' }}>Design: {statusPill(f.designStatus)}</span>
              <span style={{ fontSize: '0.75rem' }}>Dev: {statusPill(f.engStatus)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StakeholdersTab() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState('list');

  const filtered = useMemo(() => {
    return stakeholders.filter(s => {
      const matchesFilter = filter === 'All' || 
        (filter === 'Federal' && s.type === 'federal') ||
        (filter === 'Tribal' && s.type === 'tribal') ||
        (filter === 'Focus' && s.type === 'focus') ||
        (filter === 'Contractor' && s.type === 'contractor');
      const matchesSearch = !search || 
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        (s.role && s.role.toLowerCase().includes(search.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  const fedCount = stakeholders.filter(s => s.contractType === 'FED').length;
  const ctrCount = stakeholders.filter(s => s.contractType === 'CTR').length;

  const tierBadge = (tier) => {
    const cls = tier === 1 ? 'tier1' : tier === 2 ? 'tier2' : 'tier3';
    return <span className={`badge ${cls}`}>Tier {tier}</span>;
  };

  // Recursive tree renderer
  const TreeNode = ({ node, depth = 0 }) => {
    const [expanded, setExpanded] = useState(depth < 2);
    const hasChildren = node.children && node.children.length > 0;
    
    const highlightClass = node.highlight === 'primary' ? 'highlight' : 
                          node.highlight === 'tech' ? '' : 
                          node.highlight === 'sme' ? '' : '';
    
    return (
      <div>
        <div 
          className={`tree-node ${highlightClass}`}
          onClick={() => setExpanded(!expanded)}
          style={{ 
            paddingLeft: `${depth * 0.5}rem`,
            background: node.highlight === 'primary' ? 'rgba(216,57,51,0.1)' : 
                       node.highlight === 'tech' ? 'rgba(0,94,162,0.1)' : 
                       node.highlight === 'sme' ? 'rgba(255,190,46,0.1)' : 'transparent'
          }}
        >
          {hasChildren && <span style={{ marginRight: '0.5rem' }}>{expanded ? '▼' : '▶'}</span>}
          <strong>{node.name}</strong>
          {node.fullName && node.fullName !== node.name && (
            <span style={{ marginLeft: '0.5rem', color: '#71767a', fontSize: '0.85rem' }}>
              ({node.fullName})
            </span>
          )}
          {node.notes && (
            <span style={{ marginLeft: '0.5rem', fontSize: '0.8rem', color: '#005ea2' }}>
              — {node.notes}
            </span>
          )}
        </div>
        {expanded && hasChildren && (
          <div className="tree-children">
            {node.children.map((child, i) => (
              <TreeNode key={i} node={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="filter-bar">
        {['All', 'Federal', 'Tribal', 'Focus', 'Contractor'].map(f => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f} {f === 'Contractor' && '(CTR)'}
          </button>
        ))}
        <input
          type="text"
          className="search-input"
          placeholder="Search by name or role..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="counter">
          FED: {fedCount} | CTR: {ctrCount} | Showing: {filtered.length}
        </div>
        <div className="toggle-view">
          <button 
            className={`filter-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            List
          </button>
          <button 
            className={`filter-btn ${viewMode === 'org' ? 'active' : ''}`}
            onClick={() => setViewMode('org')}
          >
            Org Chart
          </button>
        </div>
      </div>

      {viewMode === 'list' ? (
        <div className="grid-3">
          {filtered.map(s => (
            <div key={s.id} className="card stakeholder-card">
              <div className="stakeholder-info">
                <h3>
                  {s.name}
                  {s.contractType && (
                    <span className={`badge ${s.contractType.toLowerCase()}`}>
                      {s.contractType}
                    </span>
                  )}
                </h3>
                <p>{s.role}</p>
                {s.org && <p style={{ fontSize: '0.75rem', color: '#71767a' }}>{s.org}</p>}
                {s.notes && <p style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}>{s.notes}</p>}
              </div>
              {s.tier && tierBadge(s.tier)}
            </div>
          ))}
        </div>
      ) : (
        <div className="org-tree">
          <h3 style={{ marginBottom: '1rem' }}>ACF Organization Structure</h3>
          <div style={{ fontSize: '0.8rem', marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
            <span>🔴 Primary Client</span>
            <span>🔵 Tech/IT Partner</span>
            <span>🟡 SME</span>
          </div>
          <TreeNode node={acfOrgChart} />
        </div>
      )}
    </div>
  );
}

function TribalOrgsTab() {
  const [search, setSearch] = useState('');
  
  const filtered = tribalOrgs.filter(org => 
    org.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="filter-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search tribal organizations..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ minWidth: '300px' }}
        />
        <div className="counter">
          Showing {filtered.length} of {tribalOrgs.length} organizations
        </div>
      </div>

      <div className="tribal-list">
        {filtered.map((org, i) => (
          <div key={i} className="tribal-item">
            {org}
          </div>
        ))}
      </div>
    </div>
  );
}

function RisksTab() {
  const [filter, setFilter] = useState('All');
  
  const filtered = filter === 'All' 
    ? risks 
    : risks.filter(r => r.severity === filter.toLowerCase());

  return (
    <div>
      <div className="filter-bar">
        {['All', 'High', 'Medium', 'Low'].map(f => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
        <div className="counter">
          High: {risks.filter(r => r.severity === 'high').length} | 
          Medium: {risks.filter(r => r.severity === 'medium').length} | 
          Low: {risks.filter(r => r.severity === 'low').length}
        </div>
      </div>

      <div className="grid-3">
        {filtered.map(r => (
          <div key={r.id} className={`card risk-card ${r.severity}`}>
            <h3>
              {r.severity === 'high' ? '🔴' : r.severity === 'medium' ? '🟡' : '🟢'} {r.title}
            </h3>
            <p><strong>Impact:</strong> {r.impact}</p>
            <p><strong>Mitigation:</strong> {r.mitigation}</p>
            <p style={{ fontSize: '0.8rem', color: '#71767a', marginTop: '0.5rem' }}>
              Owner: {r.owner}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main App
export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: '📊 Overview' },
    { id: 'roadmap', label: '🗺️ Roadmap' },
    { id: 'forms', label: '📝 Forms' },
    { id: 'stakeholders', label: '👥 Stakeholders' },
    { id: 'tribal', label: '🏛️ Tribal Orgs' },
    { id: 'risks', label: '⚠️ Risks' }
  ];

  const complete = milestones.filter(m => m.status === 'complete').length;
  const inProgress = milestones.filter(m => m.status === 'in-progress').length;
  const progress = Math.round((complete / milestones.length) * 100);

  return (
    <div className="app">
      <header className="header">
        <h1>{projectInfo.fullName}</h1>
        <p>{projectInfo.client} • {projectInfo.contractor} • {projectInfo.phase}</p>
        
        <div className="status-banner">
          <div className="progress-bar">
            <div className="bar">
              <div className="fill" style={{ width: `${progress}%` }}></div>
            </div>
            <span>{progress}% Complete • {complete} of {milestones.length} milestones</span>
          </div>
          
          <div className="stat-pills">
            <span className="pill green">{complete} Complete</span>
            <span className="pill amber">{inProgress} In Progress</span>
            <span className="pill gray">{milestones.length - complete - inProgress} Planned</span>
          </div>
        </div>
      </header>

      <nav className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className="content">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'roadmap' && <RoadmapTab />}
        {activeTab === 'forms' && <FormsTab />}
        {activeTab === 'stakeholders' && <StakeholdersTab />}
        {activeTab === 'tribal' && <TribalOrgsTab />}
        {activeTab === 'risks' && <RisksTab />}
      </main>
    </div>
  );
}
