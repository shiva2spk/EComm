import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return (
    <div className={`max-w-6xl mx-auto w-full px-3 sm:px-4 ${className}`}>
      {children}
    </div>
  );
}
