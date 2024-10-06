import React from "react";
import "./Panel.scss";
interface PanelProps {
  children: React.ReactElement;
  title?: React.ReactNode;
  backgroundColor?: string;
}
const Panel = ({ children, title, backgroundColor }: PanelProps) => {
  return (
    <section className="panel-section-main-container">
      <div
        className="panel-container"
        style={{ backgroundColor: backgroundColor || "#f1efef" }}
      >
        <div className="container-title">{title}</div>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Panel;
