import React from 'react';

type ResizableButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: number | string; // number -> px, string -> any valid CSS size
  children: React.ReactNode;
};

const ResizableButton: React.FC<ResizableButtonProps> = ({ size = '16px', children, style, className = '', ...rest }) => {
  const fontSize = typeof size === 'number' ? `${size}px` : size;
  const combinedStyle = { fontSize, ...(style || {}) } as React.CSSProperties;

  return (
    <button
      {...rest}
      style={combinedStyle}
      className={`inline-block px-1 py-2 rounded-full border-2 border-theme-red font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default ResizableButton;
