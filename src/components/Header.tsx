import { Phone, Mail, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// TO REPLACE LOGO: 
// 1. Place your logo image in src/assets/ folder (e.g., logo.png)
// 2. Uncomment the line below and update with your image filename:
// import logo from "@/assets/logo.png";
// 3. Comment out or delete the placeholder logo line below

// Placeholder logo (replace with your own)
const logo = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:0422-2345678" className="flex items-center gap-1 hover:underline">
                <Phone className="w-4 h-4" />
                <span>0422-2345678</span>
              </a>
              <a href="mailto:info@ccmc.gov.in" className="flex items-center gap-1 hover:underline">
                <Mail className="w-4 h-4" />
                <span>info@ccmc.gov.in</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/80">
                தமிழ்
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/80">
                English
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="CCMC Logo" 
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-primary">
                Coimbatore City Municipal Corporation
              </h1>
              <p className="text-sm text-muted-foreground">கோவை மாநகராட்சி</p>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </Button>
        </div>

        {/* Navigation */}
        <nav className={`mt-4 ${mobileMenuOpen ? 'block' : 'hidden md:block'}`}>
          <ul className="flex flex-col md:flex-row gap-1 md:gap-0 md:items-center md:justify-center">
            {['Home', 'About Us', 'Services', 'Departments', 'Tenders', 'Contact'].map((item) => (
              <li key={item}>
                <Button variant="ghost" className="w-full md:w-auto justify-start md:justify-center">
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
