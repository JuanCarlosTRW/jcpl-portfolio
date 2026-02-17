import { forwardRef } from "react";

interface MetricPanelProps {
  label: string;
  value: number;
  suffix?: string;
}

const MetricPanel = forwardRef<HTMLDivElement, MetricPanelProps>(
  ({ label, value, suffix }, ref) => (
    <div
      ref={ref}
      className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-lg px-8 py-6 text-center shadow-sm"
    >
      <div className="text-4xl font-bold text-[var(--brand-accent)]">
        {value}
        {suffix}
      </div>
      <div className="text-xs uppercase tracking-wider text-[var(--text-muted)] mt-1">
        {label}
      </div>
    </div>
  )
);

MetricPanel.displayName = "MetricPanel";

export default MetricPanel;
