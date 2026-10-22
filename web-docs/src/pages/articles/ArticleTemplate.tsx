import React from 'react';
import { ArrowLeft, Clock, Play, FileText, Camera } from 'lucide-react';

interface ArticleProps {
  title: string;
  category: string;
  readTime: string;
  onBack: () => void;
  summary: string;
  steps: {
    num: number;
    title: string;
    desc: string;
    screenshotNote: string;
  }[];
}

export const ArticleTemplate: React.FC<ArticleProps> = ({
  title,
  category,
  readTime,
  onBack,
  summary,
  steps
}) => {
  return (
    <article className="article-container">
      <div className="article-header">
        <button onClick={onBack} className="btn-back">
          <ArrowLeft size={16} /> Kembali ke {category}
        </button>
        <h1 className="article-title">{title}</h1>
        <div className="article-meta">
          <span className="badge-category">{category}</span>
          <span className="meta-time">
            <Clock size={14} /> Waktu baca: {readTime}
          </span>
        </div>
      </div>

      {/* Video Tutorial Card */}
      <div className="video-tutorial-box">
        <div className="video-tutorial-badge">
          <Play size={14} fill="#0284c7" color="#0284c7" />
          <span>Video Tutorial: {title}</span>
        </div>
        <div className="video-tutorial-preview">
          <div className="video-play-btn">
            <Play size={24} fill="#ffffff" color="#ffffff" />
          </div>
          <span className="video-duration">{readTime}</span>
        </div>
      </div>

      <div className="article-content">
        <p className="article-summary">{summary}</p>

        <div className="steps-container">
          {steps.map((step) => (
            <div key={step.num} className="step-item">
              <div className="step-header">
                <span className="step-number">{step.num}</span>
                <h3 className="step-title">{step.title}</h3>
              </div>
              <p className="step-description">{step.desc}</p>

              {/* Browser Capture Mockup / Placeholder Aset */}
              <div className="capture-placeholder-frame">
                <div className="capture-header-bar">
                  <div className="window-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <div className="browser-address-pill">
                    appcashflow.id/{category.toLowerCase().replace(/\s+/g, '-')}
                  </div>
                </div>
                <div className="capture-body-content">
                  <Camera size={32} className="camera-icon-muted" />
                  <span className="capture-label">Area Tangkapan Layar: {step.title}</span>
                  <span className="capture-sublabel">
                    Aset visual: {step.screenshotNote}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
