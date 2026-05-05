import React, { useState } from "react";
import { Search, User, ShoppingBag, Truck, ShieldCheck, Headphones, X, Menu } from "lucide-react";
import { navLinks } from "../../constants/perfumeData";
import { useCart } from "../../context/CartContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Header() {
  const { cartCount } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchVal.trim())}`);
      setIsSearchOpen(false);
      setSearchVal("");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#ead7cf] bg-[#fffaf7]/90 backdrop-blur-xl">
      <div className="border-b border-[#ead7cf] bg-[#f0dfd7] px-4 py-2 text-xs text-[#8f5f4c]">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="flex items-center gap-2">
            <Truck size={14} /> شحن مجاني للطلبات فوق 299 ريال
          </span>
          <span className="hidden items-center gap-2 md:flex">
            <ShieldCheck size={14} /> عينات مجانية مع كل طلب
          </span>
          <span className="flex items-center gap-2">
            <Headphones size={14} /> الدعم 24/7
          </span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
        <div className="flex items-center gap-3 text-[#8f5f4c]">
          <Link to="/cart" className="relative rounded-full p-2 transition hover:bg-[#f4e7e1]">
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-[#bd7f6d] text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="rounded-full p-2 transition hover:bg-[#f4e7e1]">
            <User size={22} />
          </button>
          <button
            onClick={() => setIsSearchOpen(true)}
            className="rounded-full p-2 transition hover:bg-[#f4e7e1]"
          >
            <Search size={22} />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full p-2 transition hover:bg-[#f4e7e1] lg:hidden"
          >
            <Menu size={22} />
          </button>
        </div>

        <nav className="hidden items-center gap-10 text-sm font-medium text-[#745044] lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative transition hover:text-[#bd7f6d] ${
                location.pathname === link.path ? "text-[#bd7f6d]" : ""
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-3 right-0 h-0.5 w-full bg-[#bd7f6d]" />
              )}
            </Link>
          ))}
        </nav>

        <Link to="/" className="text-left cursor-pointer group">
          <div className="text-3xl font-bold tracking-wide text-[#b47763] transition group-hover:text-[#bd7f6d]">نفحات</div>
          <div className="-mt-1 text-xs text-[#b47763] transition group-hover:text-[#bd7f6d]">للعطور</div>
        </Link>
      </div>

      {isMenuOpen && (
        <div className="bg-[#fffaf7] border-t border-[#ead7cf] lg:hidden px-4 py-6">
          <nav className="flex flex-col gap-4 text-sm font-medium text-[#745044]">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`transition hover:text-[#bd7f6d] ${
                  location.pathname === link.path ? "text-[#bd7f6d]" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {isSearchOpen && (
        <div className="absolute inset-0 z-50 flex items-center bg-[#fffaf7] px-4">
          <form onSubmit={handleSearch} className="mx-auto flex w-full max-w-3xl items-center gap-4">
            <Search className="text-[#bd7f6d]" size={24} />
            <input
              autoFocus
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="ابحث عن عطرك المفضل..."
              className="flex-1 bg-transparent py-4 text-xl text-[#6f4a3d] outline-none"
            />
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              className="rounded-full p-2 text-[#8f5f4c] hover:bg-[#f4e7e1]"
            >
              <X size={24} />
            </button>
          </form>
        </div>
      )}
    </header>
  );
}
