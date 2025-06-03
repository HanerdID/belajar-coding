// src/components/organisms/DashboardNavbar.jsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Dropdown, Avatar } from "antd";
import {
  BookOpen,
  Code2,
  MessageCircle,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import Logo from "../atoms/Logo";
import { useEffect, useState, useCallback } from "react";

const DashboardNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

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

    window.addEventListener("scroll", throttledScrollHandler, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", throttledScrollHandler);
  }, [handleScroll]);

  const navItems = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard className="w-4 h-4" />,
    },
    {
      href: "/modules",
      label: "Modul",
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      href: "/exercises",
      label: "Latihan",
      icon: <Code2 className="w-4 h-4" />,
    },
    {
      href: "/forum",
      label: "Forum",
      icon: <MessageCircle className="w-4 h-4" />,
    },
  ];

  const userMenuItems = [
    {
      key: "1",
      label: "Profile",
      icon: <User className="w-4 h-4" />,
    },
    {
      key: "2",
      label: "Settings",
      icon: <Settings className="w-4 h-4" />,
    },
    {
      type: "divider",
    },
    {
      key: "3",
      label: "Logout",
      icon: <LogOut className="w-4 h-4" />,
      onClick: () => {
        // Handle logout logic
        navigate("/login");
      },
    },
  ];

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

          {/* Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 font-medium ${
                    location.pathname === item.href
                      ? "bg-dark text-cream"
                      : "text-charcoal hover:text-dark hover:bg-cream/50"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* User Profile Dropdown */}
            <Dropdown
              menu={{ items: userMenuItems }}
              placement="bottomRight"
              arrow
            >
              <Button
                type="text"
                className="flex items-center space-x-2 px-3 py-2 h-auto"
              >
                <Avatar
                  size={32}
                  style={{
                    background: "linear-gradient(135deg, #A39B8B, #716A5C)",
                    color: "#F1E9DB",
                  }}
                >
                  U
                </Avatar>
                <span className="text-charcoal font-medium">User</span>
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
