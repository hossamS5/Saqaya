import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "icon" | "danger";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  const base =
    "transition focus:outline-none focus:ring-2 focus:ring-violet-300 cursor-pointer";
  const variants: Record<string, string> = {
    primary:
      "flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-100 text-violet-700 font-medium hover:bg-violet-200 active:bg-violet-300",
    icon: "p-2 rounded hover:bg-gray-200 text-violet-400 flex items-center justify-center",
    danger:
      "p-2 rounded hover:bg-gray-200 text-red-500 flex items-center justify-center",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
