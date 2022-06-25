import { List, X } from "phosphor-react";
import { useState } from "react";
import { Logo } from "./Logo";

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="flex lg:hidden"
      >
        {isSidebarOpen ? <List size={24} /> : <X size={24} />}
      </button>
    </header>
  );
}
