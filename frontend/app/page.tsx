'use client'

import { ChangeEvent, DragEvent, useState } from 'react'
import {
  Activity, ArrowUpRight, BarChart3, BookOpen, Check, ChevronRight, CircleHelp,
  Clock3, FileImage, FolderOpen, Grid2X2, HeartPulse, History, Info, Layers3,
  Menu, ScanLine, ShieldCheck, Sparkles, Stethoscope, UploadCloud, Users, X,
} from 'lucide-react'

const navItems = [
  { label: 'Overview', icon: Grid2X2 },
  { label: 'New screening', icon: ScanLine },
  { label: 'History', icon: History },
  { label: 'Education', icon: BookOpen },
]

const recentStudies = [
  { id: 'RC-240318', date: 'Mar 18, 2024', eye: 'Right eye', status: 'Review needed', tone: 'warning' },
  { id: 'RC-240314', date: 'Mar 14, 2024', eye: 'Left eye', status: 'No finding detected', tone: 'success' },
  { id: 'RC-240309', date: 'Mar 09, 2024', eye: 'Right eye', status: 'No finding detected', tone: 'success' },
]

function Logo() {
  return <div className="flex items-center gap-3"><div className="brand-mark"><HeartPulse size={18} /></div><span className="font-semibold tracking-[-0.02em]">RetinaCare <span className="text-primary">AI</span></span></div>
}

function SeverityBadge({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: string }) {
  return <span className={`status-badge ${tone}`}><span className="status-dot" />{children}</span>
}

export default function Page() {
  const [active, setActive] = useState('Overview')
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [state, setState] = useState<'idle' | 'analyzing' | 'error' | 'ready'>('idle')
  const [mobileOpen, setMobileOpen] = useState(false)

  function chooseFile(next: File | undefined) {
    if (!next) return
    if (!next.type.startsWith('image/')) { setState('error'); return }
    setFile(next)
    setPreview(URL.createObjectURL(next))
    setState('idle')
  }
  function onInput(event: ChangeEvent<HTMLInputElement>) { chooseFile(event.target.files?.[0]) }
  function onDrop(event: DragEvent<HTMLDivElement>) { event.preventDefault(); chooseFile(event.dataTransfer.files?.[0]) }
  function analyzeImage() {
    if (!file) return
    setState('analyzing')
    // Integration seam: replace this demo delay with a POST to the existing Flask /predict endpoint.
    window.setTimeout(() => setState('ready'), 1200)
  }
  function reset() { setFile(null); setPreview(null); setState('idle') }

  return <div className="app-shell">
    <aside className={`sidebar ${mobileOpen ? 'open' : ''}`}>
      <div className="sidebar-top"><Logo /><button className="icon-button mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X size={18} /></button></div>
      <div className="workspace"><span className="eyebrow">Workspace</span><button className="workspace-switcher"><span className="workspace-avatar">SC</span><span className="flex-1 text-left"><strong>Sunrise Clinic</strong><small>Clinical team</small></span><ChevronRight size={16} /></button></div>
      <nav className="nav-list" aria-label="Primary navigation">{navItems.map((item) => <button key={item.label} onClick={() => { setActive(item.label); setMobileOpen(false) }} className={`nav-item ${active === item.label ? 'active' : ''}`}><item.icon size={18} />{item.label}{item.label === 'New screening' && <span className="nav-plus">+</span>}</button>)}</nav>
      <div className="sidebar-bottom"><div className="support-card"><CircleHelp size={18} /><div><strong>Need a hand?</strong><small>Visit the help center</small></div><ArrowUpRight size={14} /></div><div className="profile"><div className="profile-avatar">AM</div><div className="flex-1"><strong>Alex Morgan</strong><small>Clinician account</small></div><button className="icon-button"><ChevronRight size={16} /></button></div></div>
    </aside>
    <main className="main-content">
      <header className="topbar"><button className="icon-button menu-button" onClick={() => setMobileOpen(true)} aria-label="Open menu"><Menu size={20} /></button><div className="breadcrumb"><span>Workspace</span><ChevronRight size={14} /><strong>{active}</strong></div><div className="top-actions"><button className="top-link"><Info size={16} />Clinical guide</button><button className="help-button" aria-label="Help"><CircleHelp size={18} /></button></div></header>
      <div className="content-wrap">
        <section className="hero-row"><div><div className="live-pill"><span />AI-assisted screening workspace</div><h1>Good morning, Alex.</h1><p className="hero-copy">Review retinal images with a second set of eyes. Fast, private, and designed to support your clinical judgment.</p></div><div className="hero-art"><img src="/retina-scan.png" alt="Abstract retinal scan visualization" /><div className="hero-art-label"><Activity size={15} /><span>Model ready</span><Check size={15} /></div></div></section>
        <section className="metric-grid" aria-label="Workspace summary"><div className="metric-card"><div className="metric-icon mint"><ScanLine size={18} /></div><div><span>Screenings this month</span><strong>24</strong><small><span className="positive">+18%</span> vs. last month</small></div></div><div className="metric-card"><div className="metric-icon sand"><Clock3 size={18} /></div><div><span>Pending review</span><strong>03</strong><small>Across your team</small></div></div><div className="metric-card"><div className="metric-icon blue"><BarChart3 size={18} /></div><div><span>Avg. review time</span><strong>2.4<span className="metric-unit"> min</span></strong><small>Per screening</small></div></div></section>
        <section className="section-heading"><div><span className="eyebrow">New screening</span><h2>Upload a retinal image</h2><p>Start with a clear fundus photograph in JPG, PNG, or JPEG format.</p></div><button className="text-button" onClick={() => setActive('Education')}>Image guidelines <ArrowUpRight size={15} /></button></section>
        <section className="screening-layout"><div className="upload-card"><div className="upload-header"><div><h3>Retinal image</h3><p>One image per screening</p></div><FileImage size={20} className="muted-icon" /></div>{preview ? <div className="preview-wrap"><img src={preview} alt="Selected retinal image preview" /><button onClick={reset} className="remove-preview"><X size={15} />Remove</button></div> : <div className="dropzone" onDrop={onDrop} onDragOver={(e) => e.preventDefault()}><div className="upload-icon"><UploadCloud size={25} /></div><strong>Drop your image here</strong><span>or <label htmlFor="image-upload">browse files<input id="image-upload" type="file" accept="image/*" onChange={onInput} /></label></span><small>Maximum file size 10 MB</small></div>}{state === 'error' && <div className="error-message"><Info size={15} />Please choose a valid image file.</div>}<button className="primary-button w-full" disabled={!file || state === 'analyzing'} onClick={analyzeImage}>{state === 'analyzing' ? <><span className="spinner" />Analyzing image...</> : <><Sparkles size={17} />Run AI screening</>}</button><p className="privacy-note"><ShieldCheck size={14} />Images are encrypted and never used to train our models.</p></div><div className="result-card">{state === 'ready' ? <><div className="result-top"><div><span className="eyebrow">Screening complete</span><h3>Review recommended</h3></div><SeverityBadge tone="warning">Needs review</SeverityBadge></div><div className="result-summary"><div className="result-ring"><strong>—</strong><span>confidence</span></div><div><p>The screening model flagged patterns that may warrant a closer look. This result is not a diagnosis.</p><button className="outline-button">Open full report <ArrowUpRight size={15} /></button></div></div><div className="result-note"><Stethoscope size={16} /><span>Discuss this finding with an ophthalmology specialist before making care decisions.</span></div></> : <><div className="empty-result-visual"><Layers3 size={27} /></div><h3>Your screening result will appear here</h3><p>Upload an image to receive an AI-assisted screening summary. Results are intended to support—not replace—professional medical evaluation.</p><div className="result-features"><span><Check size={14} />Pattern analysis</span><span><Check size={14} />Clear explanations</span><span><Check size={14} />Shareable report</span></div></>}</div></section>
        <section className="history-section"><div className="section-heading compact"><div><span className="eyebrow">Activity</span><h2>Recent screenings</h2></div><button className="text-button" onClick={() => setActive('History')}>View all <ArrowUpRight size={15} /></button></div><div className="history-table"><div className="history-head"><span>Screening ID</span><span>Date</span><span>Eye</span><span>Result</span><span /></div>{recentStudies.map((study) => <div className="history-row" key={study.id}><strong>{study.id}</strong><span>{study.date}</span><span>{study.eye}</span><SeverityBadge tone={study.tone}>{study.status}</SeverityBadge><button className="row-arrow" aria-label={`Open ${study.id}`}><ArrowUpRight size={16} /></button></div>)}</div></section>
        <footer className="footer"><div><Logo /><p>AI-assisted retinal screening for better clinical workflows.</p></div><div className="footer-links"><a href="#about">About</a><a href="#security">Privacy & security</a><a href="#contact">Contact support</a></div><p className="disclaimer"><strong>Clinical disclaimer:</strong> RetinaCare AI is an assistive screening tool and does not provide a medical diagnosis. Always consult a qualified healthcare professional.</p></footer>
      </div>
    </main>
  </div>
}
