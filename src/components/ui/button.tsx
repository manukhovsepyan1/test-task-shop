import React from 'react';

type PropsType = {
  text: string; 
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
};

const Button = ({ text, onClick, variant = 'primary', size = 'medium', className = '' }: PropsType) => {
  const baseStyles = `rounded-lg shadow-md font-medium transition-all duration-200 ${className}`;

  const variantStyles: Record<string, string> = {
    primary: 'text-white bg-blue-600 hover:bg-blue-700',
    secondary: 'text-blue-600 bg-blue-100 hover:bg-blue-200',
  };

  const sizeStyles: Record<string, string> = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-sm',
    large: 'px-8 py-4 text-lg',
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`;

  return (
    <button className={styles} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;