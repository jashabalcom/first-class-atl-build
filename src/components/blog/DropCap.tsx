import { ReactNode } from "react";

interface DropCapProps {
  children: ReactNode;
}

const DropCap = ({ children }: DropCapProps) => {
  return (
    <p className="first-letter:font-playfair first-letter:text-7xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-[0.8] first-letter:text-accent font-cormorant text-[19px] leading-[1.8] text-foreground/90">
      {children}
    </p>
  );
};

export default DropCap;
