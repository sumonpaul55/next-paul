export type Tmenu = {
  name: string;
  url: string;
};

export type TINput = {
  name: string;
  required?: boolean;
  type?: string;
  label: string;
  className?: string;
  size?: "md" | "sm" | "lg";
  variant?: "flat" | "bordered" | "faded" | "underlined";
  disabled?: boolean;
};
