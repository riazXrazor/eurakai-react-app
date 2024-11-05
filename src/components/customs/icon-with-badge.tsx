function IconWithBadge({
  badgeValue = 0,
  children,
}: {
  badgeValue?: number;
  children: React.ReactNode;
}) {
  return (
    <div className="relative inline-flex justify-center items-center cursor-pointer hover:bg-blue-200">
      {children}
      {!!badgeValue && (
        // <span className="absolute top-0 end-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white">
        //   {badgeValue > 99 ? `99+` : badgeValue}
        // </span>
        <div className="absolute top-0 right-0 p-1 rounded-full transform translate-x-1/2 -translate-y-1/2 bg-red-500" />
      )}
    </div>
  );
}

export default IconWithBadge;
