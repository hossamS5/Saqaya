import React, { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";

interface DropdownMenuProps {
  button: ReactNode;
  children: ReactNode;
  align?: "right" | "left";
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  button,
  children,
  align = "right",
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <span onClick={() => setOpen((o) => !o)}>
        {/* Responsive menu button */}
        {React.isValidElement(button)
          ? React.cloneElement(
              button as React.ReactElement<
                React.ButtonHTMLAttributes<HTMLButtonElement>
              >,
              {
                className:
                  "p-2 md:p-2.5 rounded-full hover:bg-gray-100 transition w-10 h-10 flex items-center justify-center " +
                  ((
                    button as React.ReactElement<
                      React.ButtonHTMLAttributes<HTMLButtonElement>
                    >
                  ).props.className || ""),
              }
            )
          : button}
      </span>
      <div
        className={`origin-top-${align} absolute ${align}-0 mt-2 w-40 sm:w-48 rounded-md shadow-lg bg-white transition-all duration-200 z-10
          ${
            open
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          } right-0`}
        style={{ minWidth: "10rem", maxWidth: "90vw" }}
      >
        <div className="py-1">{children}</div>
      </div>
    </div>
  );
};

export default DropdownMenu;
