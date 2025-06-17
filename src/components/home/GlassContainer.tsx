import React from "react";

interface GlassContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`glass ${className}`} {...props}>
    {children}
  </div>
);

export default GlassContainer;
