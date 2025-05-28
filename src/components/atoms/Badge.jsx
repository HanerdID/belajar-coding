const Badge = ({ children, variant = "default", className = "" }) => {
  const baseStyles = "inline-block rounded-full text-xs font-medium px-3 py-1";

  const variants = {
    default: "bg-[#f5ebe0] text-[#d5bdaf] border border-primary/20",
    primary: "bg-[#d5bdaf] text-white",
    accent: "bg-[#e3d5ca] text-[#d5bdaf]",
    outline: "bg-transparent border border-primary text-[#d5bdaf]",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
