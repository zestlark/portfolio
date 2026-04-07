import React from "react";
import "@/assets/styles/TextWithImageFill.css";

interface TextWithImageFillProps {
  children: React.ReactNode;
  imageUrl: string;
  className?: string;
}

export const TextWithImageFill: React.FC<TextWithImageFillProps> = ({
  children,
  imageUrl,
  className = "",
}) => {
  return (
    <div
      className={`text-image-fill ${className}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {children}
    </div>
  );
};
