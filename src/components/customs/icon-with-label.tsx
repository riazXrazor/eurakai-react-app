import React, { Children } from "react";

import { cn } from "../../lib/utils";

function IconsWithLabels({
  className = "",
  isLink = false,
  href = "",
  onClick = () => {},
  ariaLabel = "",
  children,
}: {
  className?: string;
  isLink?: boolean;
  href?: string;
  onClick?: React.MouseEventHandler;
  ariaLabel?: string;
  children: React.ReactNode;
}) {
  if (Children.count(children) !== 2)
    throw new Error(
      `Expected number of children for IconsWithLabels to be 2. Found the number of childrens to be ${
        Children.count(children) > 2 ? "greater than 2" : "less than 2"
      }`
    );

  if (isLink && href === "") throw new Error("href cannot be an empty string.");
  return (
    <div
      className={cn("inline-flex justify-start items-center gap-2", className)}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {isLink ? <a href={href}>{children}</a> : children}
    </div>
  );
}

export default IconsWithLabels;
