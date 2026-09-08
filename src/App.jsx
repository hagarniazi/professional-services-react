import { useMemo, useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Gauge,
  LayoutDashboard,
  MessageCircle,
  Palette,
  PhoneCall,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  UserRound,
} from 'lucide-react';
import useFetchMock from './hooks/useFetchMock';
import Services from './pages/Services';

const BASE_URL = '/mockData';
const serviceIcons = [Target, Palette, TrendingUp];
const teamIcons = [Target, Palette, LayoutDashboard, TrendingUp];
const fallbackImage = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85';

function handleImageError(event) {
  event.currentTarget.onerror = null;
  event.currentTarget.src = fallbackImage;
}

function SectionHeader({ eyebrow, title, text, icon: Icon }) {
  return (
    <div className="section-header">
      <span className="eyebrow"><Icon size={15} strokeWidth={2.4} aria-hidden="true" />{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function LoadingState({ label }) {
  return <div className="status-box">Loading {label}...</div>;
}

function ErrorState({ message }) {
  return <div className="status-box error">Error: {message}</div>;
}

function CardToggle({ expanded, onToggle, label }) {
  return (
    <button type="button" className="card-toggle" onClick={(event) => { event.stopPropagation(); onToggle(); }}>
      {expanded ? 'Hide details' : label}
      <ArrowUpRight size={15} aria-hidden="true" />
    </button>
  );
}

function App() {
  if (window.location.pathname === '/services') {
  return <Services />;
}
  const [expandedCard, setExpandedCard] = useState(null);
  const services = useFetchMock(`${BASE_URL}/services.json`);
  const projects = useFetchMock(`${BASE_URL}/projects.json`);
  const team = useFetchMock(`${BASE_URL}/team.json`);
  const testimonials = useFetchMock(`${BASE_URL}/testimonials.json`);

  const stats = useMemo(
    () => [
      { label: 'Projects launched', value: '120+', icon: Rocket },
      { label: 'Client satisfaction', value: '98%', icon: Sparkles },
      { label: 'Average growth', value: '3.4x', icon: TrendingUp },
    ],
    []
  );

  const toggleCard = (cardId) => {
    setExpandedCard((current) => (current === cardId ? null : cardId));
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark"><Sparkles size={17} strokeWidth={2.5} aria-hidden="true" /></span>
          <span>PixelForge</span>
        </div>
        <nav>
          <a href="#services"><Target size={14} aria-hidden="true" />Services</a>
          <a href="#projects"><BriefcaseBusiness size={14} aria-hidden="true" />Projects</a>
          <a href="#team"><UserRound size={14} aria-hidden="true" />Team</a>
          <a href="#testimonials"><MessageCircle size={14} aria-hidden="true" />Testimonials</a>
        </nav>
        <button className="primary-btn"><PhoneCall size={16} aria-hidden="true" />Book a call</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Design. Build. Grow.</span>
            <h1>We create digital experiences that turn ideas into momentum.</h1>
            <p>
              We help startups and brands launch bold products, sharpen their message,
              and build experiences people remember.
            </p>
            <div className="hero-actions">
              <button className="primary-btn">Start a project <ArrowUpRight size={17} aria-hidden="true" /></button>
              <button className="secondary-btn">View work <BriefcaseBusiness size={16} aria-hidden="true" /></button>
            </div>
            <div className="stats-grid">
              {stats.map((item) => (
                <div key={item.label} className={`stat-card interactive-card ${expandedCard === `stat-${item.label}` ? 'is-expanded' : ''}`} onClick={() => toggleCard(`stat-${item.label}`)}>
                  <div className="stat-heading"><item.icon size={17} aria-hidden="true" /><strong>{item.value}</strong></div>
                  <span>{item.label}</span>
                  {expandedCard === `stat-${item.label}` && (
                    <div className="expanded-content"><p>A snapshot of the momentum this team creates through focused strategy, design, and growth work.</p></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                alt="Creative team planning a digital product"
                onError={handleImageError}
              />
              <div className="hero-image-caption"><Sparkles size={15} aria-hidden="true" />Ideas in motion</div>
            </div>
            <div className={`mini-card card-top interactive-card ${expandedCard === 'readiness' ? 'is-expanded' : ''}`} onClick={() => toggleCard('readiness')}>
              <span><Gauge size={16} aria-hidden="true" />Launch readiness</span>
              <strong>96%</strong>
              {expandedCard === 'readiness' && <div className="expanded-content"><p>Strategy, experience, and launch assets are aligned for a confident release.</p></div>}
            </div>
            <div className={`mini-card card-main interactive-card ${expandedCard === 'signals' ? 'is-expanded' : ''}`} onClick={() => toggleCard('signals')}>
              <div className="dot-row">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
              <div className="chart-label"><BarChart3 size={16} aria-hidden="true" />Growth signals</div>
              <div className="chart-bars">
                <span style={{ height: '30%' }} />
                <span style={{ height: '48%' }} />
                <span style={{ height: '72%' }} />
                <span style={{ height: '88%' }} />
                <span style={{ height: '100%' }} />
              </div>
              {expandedCard === 'signals' && <div className="expanded-content"><p>Each bar represents a stronger signal across reach, clarity, conversion, retention, and growth.</p></div>}
            </div>
            <div className={`mini-card card-bottom interactive-card ${expandedCard === 'engagement' ? 'is-expanded' : ''}`} onClick={() => toggleCard('engagement')}>
              <span><Activity size={16} aria-hidden="true" />Avg. engagement</span>
              <strong>+42%</strong>
              {expandedCard === 'engagement' && <div className="expanded-content"><p>Clearer journeys and sharper content help more people stay engaged with the experience.</p></div>}
            </div>
          </div>
        </section>

        <section id="services" className="content-section">
          <SectionHeader
            eyebrow="Services"
            title="Everything your next idea needs"
            text="From strategy to launch, we focus on the work that moves your business forward."
            icon={Sparkles}
          />
          {services.loading ? (
            <LoadingState label="services" />
          ) : services.error ? (
            <ErrorState message={services.error} />
          ) : (
            <div className="card-grid three-up">
              {services.data?.map((service) => (
                <article key={service.id} className={`info-card interactive-card ${expandedCard === `service-${service.id}` ? 'is-expanded' : ''}`} onClick={() => toggleCard(`service-${service.id}`)}>
                  <div className="icon-pill">
                    <img src={service.image} alt="" onError={handleImageError} />
                    {(() => {
                      const Icon = serviceIcons[service.id - 1] || Sparkles;
                      return <Icon size={24} aria-hidden="true" />;
                    })()}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  {expandedCard === `service-${service.id}` && (
                    <div className="expanded-content">
                      <p>We turn this focus area into a clear plan, measurable milestones, and work your team can use immediately.</p>
                      <button type="button" className="inline-action">Explore this service <ArrowUpRight size={15} aria-hidden="true" /></button>
                    </div>
                  )}
                  <CardToggle
                    expanded={expandedCard === `service-${service.id}`}
                    onToggle={() => toggleCard(`service-${service.id}`)}
                    label="See how it works"
                  />
                </article>
              ))}
            </div>
          )}
        </section>

        <section id="projects" className="content-section alt-bg">
          <SectionHeader
            eyebrow="Selected work"
            title="Projects built for traction"
            text="A few of the product and marketing experiences we have designed and shipped."
            icon={BriefcaseBusiness}
          />
          {projects.loading ? (
            <LoadingState label="projects" />
          ) : projects.error ? (
            <ErrorState message={projects.error} />
          ) : (
            <div className="card-grid three-up">
              {projects.data?.map((project) => (
                <article key={project.id} className={`project-card interactive-card ${expandedCard === `project-${project.id}` ? 'is-expanded' : ''}`} onClick={() => toggleCard(`project-${project.id}`)}>
                  <div className="project-image">
                    <img src={project.image} alt={`${project.title} project`} onError={handleImageError} />
                    <div className="project-shine" />
                    <span>{project.badge}</span>
                  </div>
                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="meta-row">
                      <span><LayoutDashboard size={14} aria-hidden="true" />{project.category}</span>
                      <strong><TrendingUp size={14} aria-hidden="true" />{project.result}</strong>
                    </div>
                    {expandedCard === `project-${project.id}` && (
                      <div className="expanded-content">
                        <p>We combined a sharper story, a faster user journey, and focused conversion moments to create this result.</p>
                        <button type="button" className="inline-action">View case study <ArrowUpRight size={15} aria-hidden="true" /></button>
                      </div>
                    )}
                    <CardToggle
                      expanded={expandedCard === `project-${project.id}`}
                      onToggle={() => toggleCard(`project-${project.id}`)}
                      label="Open project"
                    />
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section id="team" className="content-section">
          <SectionHeader
            eyebrow="Our team"
            title="A compact crew of strategic thinkers"
            text="We blend product thinking, design craft, and performance marketing to create sharp outcomes."
            icon={UserRound}
          />
          {team.loading ? (
            <LoadingState label="team" />
          ) : team.error ? (
            <ErrorState message={team.error} />
          ) : (
            <div className="card-grid four-up">
              {team.data?.map((member) => (
                <article key={member.id} className={`team-card interactive-card ${expandedCard === `member-${member.id}` ? 'is-expanded' : ''}`} onClick={() => toggleCard(`member-${member.id}`)}>
                  <div className="avatar">
                    <img src={member.image} alt={`${member.name} portrait`} onError={handleImageError} />
                    {(() => {
                      const Icon = teamIcons[member.id - 1] || UserRound;
                      return <span className="avatar-badge"><Icon size={14} aria-hidden="true" /></span>;
                    })()}
                  </div>
                  <h3>{member.name}</h3>
                  <span className="role">
                    {(() => {
                      const Icon = teamIcons[member.id - 1] || UserRound;
                      return <Icon size={13} aria-hidden="true" />;
                    })()}
                    {member.role}
                  </span>
                  <p>{member.bio}</p>
                  {expandedCard === `member-${member.id}` && (
                    <div className="expanded-content">
                      <p>Best for early direction, focused decisions, and turning a complex challenge into the next practical move.</p>
                    </div>
                  )}
                  <CardToggle
                    expanded={expandedCard === `member-${member.id}`}
                    onToggle={() => toggleCard(`member-${member.id}`)}
                    label="Meet their approach"
                  />
                </article>
              ))}
            </div>
          )}
        </section>

        <section id="testimonials" className="content-section alt-bg">
          <SectionHeader
            eyebrow="Testimonials"
            title="Loved by growing teams"
            text="We deliver work that feels premium, performs well, and helps brands stand out."
            icon={MessageCircle}
          />
          {testimonials.loading ? (
            <LoadingState label="testimonials" />
          ) : testimonials.error ? (
            <ErrorState message={testimonials.error} />
          ) : (
            <div className="card-grid three-up">
              {testimonials.data?.map((item) => (
                <blockquote key={item.id} className={`quote-card interactive-card ${expandedCard === `quote-${item.id}` ? 'is-expanded' : ''}`} onClick={() => toggleCard(`quote-${item.id}`)}>
                  <MessageCircle className="quote-icon" size={24} aria-hidden="true" />
                  <p>“{item.quote}”</p>
                  <footer>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </footer>
                  {expandedCard === `quote-${item.id}` && (
                    <div className="expanded-content">
                      <p>A clear signal that the work connected strategy, craft, and measurable business momentum.</p>
                    </div>
                  )}
                  <CardToggle
                    expanded={expandedCard === `quote-${item.id}`}
                    onToggle={() => toggleCard(`quote-${item.id}`)}
                    label="Read the impact"
                  />
                </blockquote>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
