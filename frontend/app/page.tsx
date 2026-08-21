'use client'

import { ChangeEvent, DragEvent, useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  Clock3,
  FileImage,
  HeartPulse,
  History,
  Home,
  Info,
  Layers3,
  Menu,
  RefreshCw,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UploadCloud,
  X,
} from 'lucide-react'

type PredictionResult = {
  label: string
  confidence: number
  probabilities: Record<string, number>
}

type ScreeningRecord = {
  id: string
  date: string
  timestamp: number
  prediction: PredictionResult
  imageUrl: string
  status: string
  tone: 'success' | 'warning'
}

type TeamMember = {
  name: string
  role: string
  description: string
}

const TEAM_NAME = 'Ahad Dev Team'
const API_URL = 'http://127.0.0.1:5000/api/predict'

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Abdul Ahad',
    role: 'Team Leader ',
    description: 'ROLL NO : IT-0123-008',
  },
  {
    name: 'Anees Ahmed',
    role: '',
    description: 'ROLL NO : IT-0123-049',
  },
  {
    name: 'Shahzaman',
    role: '',
    description: 'ROLL NO : IT-0123-081',
  },
]

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="brand-mark">
        <HeartPulse size={18} />
      </div>
      <span className="font-semibold tracking-[-0.02em]">
        RetinaCare <span className="text-primary">AI</span>
      </span>
    </div>
  )
}

function SeverityBadge({
  children,
  tone = 'neutral',
}: {
  children: React.ReactNode
  tone?: string
}) {
  return (
    <span className={`status-badge ${tone}`}>
      <span className="status-dot" />
      {children}
    </span>
  )
}

function LandingPage({ onEnter }: { onEnter: () => void }) {
  const [googleMessage, setGoogleMessage] = useState(false)

  return (
    <div className="landing-page">
      <header className="landing-nav">
        <Logo />

        <nav className="landing-nav-links">
          <a href="#how-it-works">How it works</a>
          <a href="#about">About</a>
          <a href="#team">Team</a>
        </nav>

        <div className="landing-nav-actions">
          <button
            className="landing-login-button"
            onClick={() => setGoogleMessage(true)}
          >
            Continue with Google
          </button>

          <button
            className="primary-button landing-guest-button"
            onClick={onEnter}
          >
            Continue as Guest
            <ArrowRight size={16} />
          </button>
        </div>
      </header>

      <main>
        <section className="landing-hero">
          <div className="landing-hero-content">
            <div className="live-pill">
              <span />
              AI-assisted retinal screening
            </div>

            <h1>
              A clearer view of
              <br />
              retinal health.
            </h1>

            <p className="landing-hero-copy">
              RetinaCare AI helps clinicians review retinal images with fast,
              AI-assisted screening insights designed to support—not replace—
              professional clinical judgment.
            </p>

            <div className="landing-hero-actions">
              <button
                className="primary-button landing-main-button"
                onClick={onEnter}
              >
                Continue as Guest
                <ArrowRight size={17} />
              </button>

              <button
                className="landing-secondary-button"
                onClick={() => setGoogleMessage(true)}
              >
                Continue with Google
              </button>
            </div>

            {googleMessage && (
              <div className="landing-auth-message">
                <Info size={15} />
                Google authentication will be connected when the authentication
                provider is configured.
              </div>
            )}

            <div className="landing-trust-row">
              <span><ShieldCheck size={14} /> Privacy focused</span>
              <span><ScanLine size={14} /> AI-assisted analysis</span>
              <span><Stethoscope size={14} /> Clinician-first</span>
            </div>
          </div>

          <div className="landing-hero-visual">
            <div className="landing-retina-card">
              <div className="landing-retina-top">
                <span>RETINAL ANALYSIS</span>
                <span className="model-status"><span /> MODEL READY</span>
              </div>
              <div className="retina-visual">
                <div className="retina-circle"><div className="retina-inner" /></div>
              </div>
              <div className="landing-analysis-card">
                <div>
                  <span>AI screening</span>
                  <strong>Ready to analyze</strong>
                </div>
                <Check size={18} />
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="landing-section">
          <div className="landing-section-heading">
            <span className="eyebrow">How it works</span>
            <h2>From image to insight<br />in a few simple steps.</h2>
            <p>A streamlined workflow designed to keep the clinician in control.</p>
          </div>

          <div className="how-it-works-grid">
            {[
              ['01', UploadCloud, 'Upload', 'Upload a clear retinal fundus image in PNG format.'],
              ['02', ScanLine, 'Analyze', 'Our trained computer vision model analyzes the retinal image.'],
              ['03', BarChart3, 'Review', 'Receive the predicted class and model confidence for review.'],
              ['04', Stethoscope, 'Decide', 'Use the result as supporting information alongside professional evaluation.'],
            ].map(([number, Icon, title, description]) => (
              <div className="workflow-card" key={String(number)}>
                <span className="workflow-number">{String(number)}</span>
                <div className="workflow-icon"><Icon size={21} /></div>
                <h3>{String(title)}</h3>
                <p>{String(description)}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="landing-about">
          <div className="about-visual">
            <div className="about-orbit orbit-one" />
            <div className="about-orbit orbit-two" />
            <div className="about-center">
              <HeartPulse size={34} />
              <span>RetinaCare</span>
              <strong>AI</strong>
            </div>
          </div>

          <div className="about-content">
            <span className="eyebrow">About RetinaCare AI</span>
            <h2>Built to support better<br />screening workflows.</h2>
            <p>RetinaCare AI is an AI-assisted diabetic retinopathy screening platform built around retinal image analysis.</p>
            <p>The goal is not to replace clinicians. Instead, the system provides a fast model-based screening result that can help organize image review and support clinical decision-making.</p>
            <div className="about-points">
              <div><Check size={15} /><span>Five-class retinal classification</span></div>
              <div><Check size={15} /><span>Confidence-based model output</span></div>
              <div><Check size={15} /><span>Simple screening workflow</span></div>
            </div>
          </div>
        </section>

        <section id="team" className="landing-section team-section">
          <div className="landing-section-heading">
            <span className="eyebrow">Our team</span>
            <h2>People behind<br />RetinaCare AI.</h2>
            <p>A multidisciplinary team combining clinical, machine learning, and software engineering perspectives.</p>
          </div>

          <div className="team-grid">
            {TEAM_MEMBERS.map((member, index) => (
              <article className="team-card" key={member.name}>
                <div className="team-avatar">0{index + 1}</div>
                <span className="team-role">{member.role}</span>
                <h3>{member.name}</h3>
                <p>{member.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="landing-cta">
          <div>
            <span className="eyebrow">Ready to begin?</span>
            <h2>Start a retinal screening<br />in seconds.</h2>
          </div>
          <button className="primary-button landing-main-button" onClick={onEnter}>
            Continue as Guest
            <ArrowRight size={17} />
          </button>
        </section>
      </main>

      <footer className="landing-footer">
        <div>
          <Logo />
          <p>AI-assisted retinal screening for better clinical workflows.</p>
        </div>
        <div className="footer-links">
          <a href="#how-it-works">How it works</a>
          <a href="#about">About</a>
          <a href="#team">Team</a>
        </div>
        <p className="disclaimer">
          <strong>Clinical disclaimer:</strong> RetinaCare AI is an assistive
          screening tool and does not provide a medical diagnosis. Always
          consult a qualified healthcare professional.
        </p>
      </footer>
    </div>
  )
}

function ScreeningReport({
  record,
  onClose,
}: {
  record: ScreeningRecord
  onClose: () => void
}) {
  const confidence = Math.round(record.prediction.confidence * 100)

  return (
    <div className="report-overlay" role="dialog" aria-modal="true">
      <div className="report-panel">
        <header className="report-header">
          <div>
            <span className="eyebrow">RetinaCare AI</span>
            <h2>Screening report</h2>
            <p>AI-assisted retinal image screening summary</p>
          </div>
          <button className="report-close" onClick={onClose} aria-label="Close report">
            <X size={18} />
          </button>
        </header>

        <div className="report-meta">
          <div><span>Screening ID</span><strong>{record.id}</strong></div>
          <div><span>Date & time</span><strong>{record.date}</strong></div>
          <div><span>Status</span><strong>{record.status}</strong></div>
        </div>

        <div className="report-body">
          <section>
            <div className="report-section-title">
              <span className="eyebrow">Retinal image</span>
              <h3>Uploaded fundus photograph</h3>
            </div>
            <div className="report-image-wrap">
              <img src={record.imageUrl} alt="Retinal image used for screening" />
            </div>
          </section>

          <section>
            <div className="report-section-title">
              <span className="eyebrow">AI screening result</span>
              <h3>{record.prediction.label}</h3>
            </div>

            <div className="report-confidence">
              <div>
                <span>Model confidence</span>
                <strong>{confidence}%</strong>
              </div>
              <div className="report-confidence-track">
                <span style={{ width: `${confidence}%` }} />
              </div>
            </div>

            <div className="report-probabilities">
              <h4>Class probabilities</h4>
              {Object.entries(record.prediction.probabilities).map(([label, value]) => (
                <div className="report-probability-row" key={label}>
                  <div><span>{label}</span><strong>{Math.round(value * 100)}%</strong></div>
                  <div className="report-probability-track">
                    <span style={{ width: `${Math.min(100, Math.max(0, value * 100))}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="report-disclaimer">
          <ShieldCheck size={18} />
          <div>
            <strong>Clinical disclaimer</strong>
            <p>
              RetinaCare AI provides AI-assisted screening information and
              does not provide a medical diagnosis. Results should be reviewed
              by a qualified healthcare professional before clinical decisions.
            </p>
          </div>
        </section>

        <footer className="report-footer">
          <span>Generated by RetinaCare AI · {record.id}</span>
          <button className="primary-button" onClick={onClose}>Done</button>
        </footer>
      </div>
    </div>
  )
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [state, setState] = useState<'idle' | 'analyzing' | 'error' | 'ready'>('idle')
  const [prediction, setPrediction] = useState<PredictionResult | null>(null)
  const [screeningId, setScreeningId] = useState<string | null>(null)
  const [records, setRecords] = useState<ScreeningRecord[]>([])
  const [reportRecord, setReportRecord] = useState<ScreeningRecord | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('retinacare_guest_screenings')
      if (stored) setRecords(JSON.parse(stored))
    } catch {
      // Ignore invalid session data.
    }
  }, [])

  function persistRecords(next: ScreeningRecord[]) {
    setRecords(next)
    try {
      sessionStorage.setItem('retinacare_guest_screenings', JSON.stringify(next))
    } catch {
      // Session persistence is best-effort.
    }
  }

  function chooseFile(next: File | undefined) {
    if (!next) return

    if (next.type !== 'image/png') {
      setState('error')
      setErrorMessage('Please upload a PNG image.')
      return
    }

    if (next.size > 10 * 1024 * 1024) {
      setState('error')
      setErrorMessage('Image size must be less than 10 MB.')
      return
    }

    if (preview) URL.revokeObjectURL(preview)

    setFile(next)
    setPreview(URL.createObjectURL(next))
    setPrediction(null)
    setScreeningId(null)
    setErrorMessage('')
    setState('idle')
  }

  function onInput(event: ChangeEvent<HTMLInputElement>) {
    chooseFile(event.target.files?.[0])
  }

  function onDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault()
    chooseFile(event.dataTransfer.files?.[0])
  }

  async function analyzeImage() {
    if (!file) return

    setState('analyzing')
    setErrorMessage('')

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch(API_URL, {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Unable to analyze the image.')
      }

      if (!data.prediction) {
        throw new Error('The prediction service returned an invalid response.')
      }

      const nextPrediction: PredictionResult = {
        label: data.prediction.label,
        confidence: data.prediction.confidence,
        probabilities: data.prediction.probabilities ?? {},
      }

      const now = new Date()
      const id = `RC-${String(now.getFullYear()).slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}`

      const noDR = nextPrediction.label === 'No Diabetic Retinopathy'
      const record: ScreeningRecord = {
        id,
        date: now.toLocaleString(),
        timestamp: now.getTime(),
        prediction: nextPrediction,
        imageUrl: URL.createObjectURL(file),
        status: noDR ? 'No finding detected' : 'Review recommended',
        tone: noDR ? 'success' : 'warning',
      }

      persistRecords([record, ...records].sort((a, b) => b.timestamp - a.timestamp))
      setPrediction(nextPrediction)
      setScreeningId(id)
      setState('ready')
    } catch (error) {
      console.error('Prediction error:', error)
      setState('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Unable to connect to the prediction service.'
      )
    }
  }

  function resetScreening() {
    if (preview) URL.revokeObjectURL(preview)
    setFile(null)
    setPreview(null)
    setPrediction(null)
    setScreeningId(null)
    setReportRecord(null)
    setErrorMessage('')
    setState('idle')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function goHome() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function goHistory() {
    document.getElementById('recent-screenings')?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  const recentRecords = useMemo(() => records.slice(0, 3), [records])
  const screeningsCount = records.length
  const reviewCount = records.filter((record) => record.tone === 'warning').length

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileOpen ? 'open' : ''}`}>
        <div className="sidebar-top">
          <Logo />
          <button className="icon-button mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={18} />
          </button>
        </div>

        <div className="workspace">
          <span className="eyebrow">Workspace</span>
          <div className="workspace-switcher">
            <span className="workspace-avatar">AD</span>
            <span className="flex-1 text-left">
              <strong>{TEAM_NAME}</strong>
              <small>Development team</small>
            </span>
          </div>
        </div>

        <nav className="nav-list" aria-label="Primary navigation">
          <button className="nav-item active" onClick={goHome}>
            <Home size={18} />
            Home
          </button>

          <button className="nav-item" onClick={resetScreening}>
            <RefreshCw size={18} />
            New screening
          </button>

          <button className="nav-item" onClick={goHistory}>
            <History size={18} />
            History
          </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="guest-session">
            <div className="guest-avatar">G</div>
            <div>
              <strong>Guest Session</strong>
              <small>Session-only screening</small>
            </div>
          </div>

          <button className="logout-button" onClick={onLogout}>
            <X size={16} />
            Exit session
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <button className="icon-button menu-button" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={20} />
          </button>

          <div className="page-title">
            <strong>Retina Screening</strong>
            <span>Guest workspace</span>
          </div>

          <div className="top-actions">
            <span className="model-ready"><span /> Model ready</span>
            <button className="help-button" aria-label="Information">
              <Info size={18} />
            </button>
          </div>
        </header>

        <div className="content-wrap">
          <section className="screening-intro">
            <div>
              <span className="eyebrow">Retinal screening</span>
              <h1>Ready for a new screening</h1>
              <p>Upload a clear fundus image to begin AI-assisted diabetic retinopathy screening.</p>
            </div>
            <button className="intro-reset" onClick={resetScreening}>
              <RefreshCw size={16} />
              New screening
            </button>
          </section>

          <section className="metric-grid" aria-label="Session summary">
            <div className="metric-card">
              <div className="metric-icon mint"><ScanLine size={18} /></div>
              <div>
                <span>Screenings in this session</span>
                <strong>{screeningsCount}</strong>
                <small>Guest session</small>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon sand"><Clock3 size={18} /></div>
              <div>
                <span>Review recommended</span>
                <strong>{reviewCount}</strong>
                <small>Current session</small>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon blue"><BarChart3 size={18} /></div>
              <div>
                <span>Model classes</span>
                <strong>5</strong>
                <small>DR classifications</small>
              </div>
            </div>
          </section>

          <section className="section-heading">
            <div>
              <span className="eyebrow">New screening</span>
              <h2>Upload a retinal image</h2>
              <p>PNG format · Maximum file size 10 MB</p>
            </div>
          </section>

          <section className="screening-layout">
            <div className="upload-card">
              <div className="upload-header">
                <div>
                  <h3>Retinal image</h3>
                  <p>One image per screening</p>
                </div>
                <FileImage size={20} className="muted-icon" />
              </div>

              {preview ? (
                <div className="preview-wrap">
                  <img src={preview} alt="Selected retinal image preview" />
                  <button onClick={resetScreening} className="remove-preview">
                    <X size={15} /> Remove
                  </button>
                </div>
              ) : (
                <div className="dropzone" onDrop={onDrop} onDragOver={(event) => event.preventDefault()}>
                  <div className="upload-icon"><UploadCloud size={25} /></div>
                  <strong>Drop your image here</strong>
                  <span>
                    or{' '}
                    <label htmlFor="image-upload">
                      browse files
                      <input id="image-upload" type="file" accept="image/png" onChange={onInput} />
                    </label>
                  </span>
                  <small>PNG format · Maximum file size 10 MB</small>
                </div>
              )}

              {state === 'error' && (
                <div className="error-message">
                  <Info size={15} /> {errorMessage}
                </div>
              )}

              <button
                className="primary-button w-full"
                disabled={!file || state === 'analyzing'}
                onClick={analyzeImage}
              >
                {state === 'analyzing' ? (
                  <>
                    <span className="spinner" /> Analyzing image...
                  </>
                ) : (
                  <>
                    <Sparkles size={17} /> Run AI screening
                  </>
                )}
              </button>

              <p className="privacy-note">
                <ShieldCheck size={14} />
                Images are encrypted and never used to train our models.
              </p>
            </div>

            <div className="result-card">
              {state === 'ready' && prediction ? (
                <>
                  <div className="result-top">
                    <div>
                      <span className="eyebrow">Screening complete</span>
                      <h3>{prediction.label === 'No Diabetic Retinopathy' ? 'No finding detected' : 'Review recommended'}</h3>
                    </div>
                    <SeverityBadge tone={prediction.label === 'No Diabetic Retinopathy' ? 'success' : 'warning'}>
                      {prediction.label === 'No Diabetic Retinopathy' ? 'No finding detected' : 'Needs review'}
                    </SeverityBadge>
                  </div>

                  <div className="result-summary">
                    <div className="result-ring">
                      <strong>{Math.round(prediction.confidence * 100)}%</strong>
                      <span>confidence</span>
                    </div>
                    <div>
                      <p><strong>{prediction.label}</strong></p>
                      <p>
                        The model returned this screening class for the uploaded
                        retinal image. This result is not a diagnosis.
                      </p>
                      {Object.keys(prediction.probabilities).length > 0 && (
                        <div className="prediction-probabilities">
                          {Object.entries(prediction.probabilities).map(([label, value]) => (
                            <div className="prediction-probability" key={label}>
                              <div className="prediction-probability-label">
                                <span>{label}</span>
                                <strong>{Math.round(value * 100)}%</strong>
                              </div>
                              <div className="prediction-probability-track">
                                <span style={{ width: `${Math.min(100, Math.max(0, value * 100))}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      {screeningId && (
                        <button
                          className="outline-button"
                          onClick={() => {
                            const record = records.find((item) => item.id === screeningId)
                            if (record) setReportRecord(record)
                          }}
                        >
                          Open full report <ArrowUpRight size={15} />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="result-note">
                    <Stethoscope size={16} />
                    Discuss this finding with a qualified healthcare professional before making care decisions.
                  </div>
                </>
              ) : (
                <>
                  <div className="empty-result-visual"><Layers3 size={27} /></div>
                  <h3>Your screening result will appear here</h3>
                  <p>Upload an image to receive an AI-assisted screening summary. Results are intended to support—not replace—professional medical evaluation.</p>
                  <div className="result-features">
                    <span><Check size={14} /> Pattern analysis</span>
                    <span><Check size={14} /> Confidence output</span>
                    <span><Check size={14} /> Shareable report</span>
                  </div>
                </>
              )}
            </div>
          </section>

          <section id="recent-screenings" className="history-section">
            <div className="section-heading compact">
              <div>
                <span className="eyebrow">Activity</span>
                <h2>Recent screenings</h2>
              </div>
              {records.length > 0 && <span className="history-limit">Showing latest 3</span>}
            </div>

            <div className="history-table">
              <div className="history-head">
                <span>Screening ID</span>
                <span>Date</span>
                <span>Result</span>
                <span />
              </div>

              {recentRecords.length > 0 ? recentRecords.map((record) => (
                <button
                  className="history-row"
                  key={record.id}
                  onClick={() => setReportRecord(record)}
                >
                  <strong>{record.id}</strong>
                  <span>{record.date}</span>
                  <SeverityBadge tone={record.tone}>{record.status}</SeverityBadge>
                  <span className="row-arrow"><ArrowUpRight size={16} /></span>
                </button>
              )) : (
                <div className="history-empty">
                  <History size={22} />
                  <strong>No screenings yet</strong>
                  <span>Your completed guest-session screenings will appear here.</span>
                </div>
              )}
            </div>
          </section>

          <footer className="footer">
            <div>
              <Logo />
              <p>AI-assisted retinal screening for better clinical workflows.</p>
            </div>
            <p className="disclaimer">
              <strong>Clinical disclaimer:</strong> RetinaCare AI is an assistive
              screening tool and does not provide a medical diagnosis. Always
              consult a qualified healthcare professional.
            </p>
          </footer>
        </div>
      </main>

      {reportRecord && (
        <ScreeningReport record={reportRecord} onClose={() => setReportRecord(null)} />
      )}
    </div>
  )
}

export default function Page() {
  const [entered, setEntered] = useState(false)

  return entered ? (
    <Dashboard onLogout={() => setEntered(false)} />
  ) : (
    <LandingPage onEnter={() => setEntered(true)} />
  )
}
