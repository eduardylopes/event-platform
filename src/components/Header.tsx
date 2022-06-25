import { List, X } from "phosphor-react";
import { Logo } from "./Logo";
import { Sidebar } from "./Sidebar";

interface SidebarProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export function Header({ onToggleSidebar, isSidebarOpen }: SidebarProps) {
  function handleToggleSidebar() {
    onToggleSidebar();
  }

  return (
    <div>
      <header className="w-full py-5 px-6 lg:px-0 flex items-center justify-between lg:justify-center bg-gray-700 border-b border-gray-600 fixed z-50">
        <Logo height={24} />
        <div className="flex gap-2 items-center lg:hidden">
          <span>Aulas</span>
          <button onClick={() => handleToggleSidebar()}>
            {isSidebarOpen ? (
              <X size={32} color="#81D8F7" />
            ) : (
              <List size={32} color="#81D8F7" />
            )}
          </button>
        </div>
      </header>
      {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} />}
    </div>
  );
}
