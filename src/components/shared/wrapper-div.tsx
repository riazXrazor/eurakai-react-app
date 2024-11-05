import React from "react";
import { cn } from "../../lib/utils";

export default function WrapperDiv({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("pt-6 gap-4 mx-12 mb-5", className)}>{children}</div>
  );
}
