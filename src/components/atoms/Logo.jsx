import { Link } from "react-router-dom";
import { Code } from "lucide-react";

const Logo = ({ size = "default", variant = "dark" }) => {
  const sizes = {
    small: "text-xl",
    default: "text-2xl",
    large: "text-3xl",
  };

  const variants = {
    dark: "#07020D",
    light: "#F1E9DB",
    sage: "#A39B8B",
  };

  return (
    <Link
      to="/"
      className={`font-extrabold ${sizes[size]} flex items-center gap-3 group`}
    >
      <div className="w-10 h-10 rounded-full bg-none flex items-center justify-center">
        <img src="images/belajar-coding.png" alt="Logo" />
      </div>
      <span
        style={{ color: variants[variant] }}
        className="group-hover:text-sage transition-colors duration-300"
      >
        BelajarNgoding
      </span>
    </Link>
  );
};

export default Logo;
