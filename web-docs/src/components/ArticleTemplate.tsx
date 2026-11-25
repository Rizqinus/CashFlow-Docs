import React from 'react';
import { ArrowLeft, Play } from 'lucide-react';
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
        <div className="article-meta author-card-header">
          <div className="author-avatar-circle">C</div>
          <div className="author-meta-info">
            <span className="author-name">{article.author || 'Product Specialist'}</span>
            {article.role && (
              <span className="author-role" style={{ display: 'block', fontSize: '12px', color: '#64748b', marginBottom: '2px' }}>{article.role}</span>
            )}
            <span className="author-subtext">
              {article.publishDate ? `Dipublikasikan: ${article.publishDate}` : 'Dipublikasikan: 21 April 2026'}
              {' · '}
              {article.updateDate ? `Diperbarui: ${article.updateDate}` : 'Diperbarui: 17 Juli 2026'}
            </span>
          </div>
        </div>
      </div>

      {/* Video Tutorial Card */}
      <div className="video-tutorial-box">
        <div className="video-tutorial-badge" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Play size={14} fill="#0284c7" color="#0284c7" style={{ flexShrink: 0 }} />
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
        <div className="article-summary">
          {article.summary.split('\n\n').map((para, i) => (
            <p key={i} style={{ marginBottom: '12px', lineHeight: '1.7', color: '#374151' }}>{para}</p>
          ))}
        </div>

        <div className="steps-container">
          {article.steps.map((step) => (
            <div key={step.num} className="step-section">
              <h3 className="step-title">{step.num}. {step.title}</h3>
              <div className="step-description">
                {step.desc.split('\n\n').map((block, bi) => (
                  <p key={bi} style={{ marginBottom: '10px', lineHeight: '1.7', color: '#374151' }}>
                    {block.split('\n').map((line, li, arr) => (
                      <span key={li}>{line}{li < arr.length - 1 && <br />}</span>
                    ))}
                  </p>
                ))}
              </div>

              {/* Browser Capture Mockup / Real Image */}
              {step.image && (
                <div className="capture-image-frame" style={{ marginTop: '14px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #cbd5e1', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.08)' }}>
                  <img src={step.image} alt={step.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
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
