import { Link } from "react-router-dom";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="w-full pl-6 pr-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-[36px] font-medium font-montserrat tracking-[0.05em] antialiased">
            <span className="text-[#666666]">SPIRALN</span>
            <span className="text-[#ff4d4d] text-[38px]">O</span>
            <span className="text-[#666666]">TES</span>
          </h1>

          {/* New Note Button */}
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
