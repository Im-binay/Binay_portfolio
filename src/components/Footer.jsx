const Footer = () => {
  return (
    <footer className="bg-[#e9e9e3] border-t border-neutral-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-5 md:py-6">

        {/* Arranges both items side-by-side on mobile, and adapts to a 3-column layout from tablet upwards */}
        <div className="flex flex-row md:flex-row items-center justify-between gap-2 md:gap-4 w-full">

          {/* Copyright Segment - Slightly smaller font size on mobile/tablet */}
          <p className="text-[10px] sm:text-xs md:text-xs lg:text-sm text-neutral-600 text-left">
            © 2023–{new Date().getFullYear()}{" "}
            <span className="font-semibold text-black whitespace-nowrap">
              Binay Sharma
            </span>
          </p>

          {/* Role Segment - Hidden entirely on mobile viewports */}
          <p className="hidden md:block md:text-xs lg:text-sm text-neutral-500 font-medium text-center">
            UI/UX Designer
          </p>

          {/* Credit Segment - Slightly smaller font size on mobile/tablet */}
          <p className="text-[10px] sm:text-xs md:text-xs lg:text-sm text-neutral-600 text-right">
            Designed & Developed by{" "}
            <span className="font-semibold text-black whitespace-nowrap">
              Binay Sharma
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;