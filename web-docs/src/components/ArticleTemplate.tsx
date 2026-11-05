import React from 'react';
import { ArrowLeft, Clock, Play, Camera } from 'lucide-react';
import { ArticleData } from '../types/article';

interface ArticleProps {
  article: ArticleData;
  onBack: () => void;
}

export const ArticleTemplate: React.FC<ArticleProps> = ({ article, onBack }) => {
  return (
    <article className="article-container">
      <div className="article-header">
        <button onClick={onBack} className="btn-back">
          <ArrowLeft size={16} /> Kembali ke {article.category}
        </button>
        <h1 className="article-title">{article.title}</h1>
        <div className="article-meta">
          {article.author && <span className="author-badge">{article.author}</span>}
          {article.author && <span className="dot">•</span>}
          {article.role && <span className="author-badge">{article.role}</span>}
          {article.role && <span className="dot">•</span>}
          <span className="badge-category">{article.category}</span>
          <span className="dot">•</span>
          <span className="meta-time">
            <Clock size={14} /> Waktu baca: {article.readTime}
          </span>
          {article.updateDate && (
            <>
              <span className="dot">•</span>
              <span className="meta-time">Diperbarui: {article.updateDate}</span>
            </>
          )}
        </div>
      </div>

      {/* Video Tutorial Card */}
      <div className="video-tutorial-box">
        <div className="video-tutorial-badge">
          <Play size={14} fill="#0284c7" color="#0284c7" />
          <span>Video Tutorial: {article.title}</span>
        </div>
        <div className="video-tutorial-preview">
          <div className="video-play-btn">
            <Play size={24} fill="#ffffff" color="#ffffff" />
          </div>
          <span className="video-duration">{article.readTime}</span>
        </div>
      </div>

      <div className="article-content">
        <p className="article-summary">{article.summary}</p>

        <div className="steps-container">
          {article.steps.map((step) => (
            <div key={step.num} className="step-section">
              <h3 className="step-title">{step.num}. {step.title}</h3>
              <p className="step-description">{step.desc}</p>

              {/* Browser Capture Mockup / Real Image */}
              {step.image ? (
                <div className="capture-image-frame" style={{ marginTop: '14px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #cbd5e1', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.08)' }}>
                  <div className="capture-header-bar">
                    <div className="window-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <div className="browser-address-pill">
                      appcashflow.id/{article.category.toLowerCase().replace(/\s+/g, '-')}
                    </div>
                  </div>
                  <img src={step.image} alt={step.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  {step.caption && (
                    <div style={{ padding: '8px 12px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', fontSize: '13px', color: '#64748b' }}>
                      {step.caption}
                    </div>
                  )}
                </div>
              ) : (
                <div className="capture-placeholder-frame">
                  <div className="capture-header-bar">
                    <div className="window-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <div className="browser-address-pill">
                      appcashflow.id/{article.category.toLowerCase().replace(/\s+/g, '-')}
                    </div>
                  </div>
                  <div className="capture-body-content">
                    <Camera size={32} className="camera-icon-muted" />
                    <span className="capture-label">Area Tangkapan Layar: {step.title}</span>
                    <span className="capture-sublabel">
                      Aset visual: {step.screenshotNote || 'Tangkapan layar langkah transaksi'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {article.note && (
          <div className="callout-box warning" style={{ borderLeft: '4px solid #f59e0b', backgroundColor: '#fffbeb', padding: '14px 18px', margin: '24px 0', borderRadius: '6px' }}>
            <strong style={{ color: '#b45309', display: 'block', marginBottom: '6px' }}>Catatan Penting:</strong>
            <p style={{ margin: 0, fontSize: '14px', color: '#78350f', lineHeight: 1.6 }}>{article.note}</p>
          </div>
        )}
      </div>
    </article>
  );
};
