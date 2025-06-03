// src/components/organisms/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { Button } from "antd";
import { LogIn, Menu, X } from "lucide-react";
import Logo from "../atoms/Logo";
import { useEffect, useState, useCallback } from "react";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Throttled scroll handler untuk performa
  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 20;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  }, [scrolled]);

  useEffect(() => {
    let ticking = false;
    
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", throttledScrollHandler);
  }, [handleScroll]);

  const navItems = [
    { href: "#features", label: "Fitur" },
    { href: "#modul", label: "Modul" },
    { href: "#tentang", label: "Tentang" },
    { href: "#kontak", label: "Kontak" },
  ];

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-elegant" : ""
      }`}
      style={{
        background: scrolled
          ? "rgba(241, 233, 219, 0.95)"
          : "linear-gradient(135deg, #FFFFFF 0%, #F1E9DB 100%)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(163, 155, 139, 0.1)" : "none",
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo variant="dark" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-charcoal hover:text-dark transition-colors duration-200 font-medium relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-200"></span>
                </a>
              ))}
            </nav>

            <Link to="/login">
              <Button
                type="primary"
                icon={<LogIn />}
                size="middle"
                className="btn-primary"
                style={{
                  background: "linear-gradient(135deg, #07020D 0%, #716A5C 100%)",
                  color: "#F1E9DB",
                  fontWeight: "600",
                  border: "none",
                  borderRadius: "12px",
                  padding: "8px 24px",
                  height: "auto",
                  boxShadow: "0 4px 15px rgba(7, 2, 13, 0.2)",
                }}
              >
                Masuk
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-cream transition-colors duration-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-dark" />
            ) : (
              <Menu className="w-6 h-6 text-dark" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-sage/20">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-charcoal hover:text-dark transition-colors duration-200 font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              ))}
              <Link to="/login" onClick={closeMobileMenu}>
                <Button
                  type="primary"
                  icon={<LogIn />}
                  block
                  className="btn-primary mt-4"
                  style={{
                    background: "linear-gradient(135deg, #07020D 0%, #716A5C 100%)",
                    color: "#F1E9DB",
                    fontWeight: "600",
                    border: "none",
                    borderRadius: "12px",
                    height: "44px",
                  }}
                >
                  Masuk
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;