import React from "react";
import clsx from "clsx";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div className="px-6">
      <div className={clsx("mx-auto w-full max-w-7xl", className)}>
        {children}
      </div>
    </div>
  );
};
