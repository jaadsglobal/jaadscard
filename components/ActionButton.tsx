import type { LucideIcon } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";

type ActionButtonProps = ComponentPropsWithoutRef<"a"> & {
  icon: LucideIcon;
  label: string;
  variant?: "default" | "accent";
};

export function ActionButton({
  icon: Icon,
  label,
  variant = "default",
  className = "",
  ...props
}: ActionButtonProps) {
  const classes =
    variant === "accent"
      ? "bg-[var(--accent)] text-white shadow-[0_16px_38px_rgba(225,25,45,0.3)] hover:brightness-110 active:scale-[0.99]"
      : "border border-white/10 bg-white/[0.055] text-white hover:border-white/20 hover:bg-white/[0.09]";

  return (
    <a
      className={`flex min-h-14 min-w-0 items-center justify-center gap-2 rounded-2xl px-3 text-sm font-semibold transition ${classes} ${className}`}
      {...props}
    >
      <Icon aria-hidden="true" size={19} strokeWidth={2.1} />
      <span className="min-w-0 truncate">{label}</span>
    </a>
  );
}
