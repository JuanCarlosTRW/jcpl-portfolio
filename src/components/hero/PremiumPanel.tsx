"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PremiumPanel() {
  return (
    <motion.div
      className="premium-panel"
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden="true"
    >
      <div className="panel-edge-glow" aria-hidden="true" />
      <div className="panel-inner-glow" aria-hidden="true" />

      <div className="panel-content">
        <div className="panel-header">
          <div className="panel-badge">
            <span className="badge-icon">◆</span>
            <span>Growth Systems Dashboard</span>
          </div>
          <div className="panel-status">
            <span className="status-dot" />
            <span className="status-text">Live Analytics</span>
          </div>
        </div>

        <div className="panel-preview">
          <div className="preview-grid">
            <motion.div
              className="preview-card"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 1.35 }}
            >
              <div className="card-metric">
                <div className="metric-value">+147%</div>
                <div className="metric-label">Conversion Rate</div>
              </div>
              <div className="card-graph">
                <div className="graph-bar" style={{ height: "40%" }} />
                <div className="graph-bar" style={{ height: "65%" }} />
                <div className="graph-bar" style={{ height: "85%" }} />
                <div className="graph-bar" style={{ height: "100%" }} />
              </div>
            </motion.div>

            <motion.div
              className="preview-card"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 1.45 }}
            >
              <div className="card-metric">
                <div className="metric-value">–38%</div>
                <div className="metric-label">Cost Per Lead</div>
              </div>
              <div className="card-chart">
                <svg viewBox="0 0 100 40" className="chart-line">
                  <path
                    d="M 0 35 Q 25 30, 50 20 T 100 5"
                    fill="none"
                    stroke="rgba(100, 200, 150, 0.6)"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </motion.div>

            <motion.div
              className="preview-card"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 1.55 }}
            >
              <div className="card-metric">
                <div className="metric-value">&lt;42s</div>
                <div className="metric-label">Speed-to-Lead</div>
              </div>
              <div className="card-progress">
                <div className="progress-ring">
                  <svg viewBox="0 0 36 36" className="circular-chart">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="rgba(100, 140, 255, 0.12)"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="rgba(100, 140, 255, 0.8)"
                      strokeWidth="2"
                      strokeDasharray="85, 100"
                      className="progress-ring-circle"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="panel-reflection" aria-hidden="true" />
    </motion.div>
  );
}
