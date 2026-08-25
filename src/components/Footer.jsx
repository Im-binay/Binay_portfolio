const Footer = () => {
  return (
    <footer
      className="bg-[var(--card-color)] border-t border-[var(--border-color)]"
      aria-label="Website footer"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-6 md:py-8">
        <div className="flex flex-row items-center justify-between gap-2 md:gap-4 w-full">

          {/* Copyright */}
          <small className="text-[10px] sm:text-xs md:text-sm text-[var(--text-muted)] text-left tracking-normal">
            © 2023–{new Date().getFullYear()}{" "}
            <span className="font-medium text-[var(--text-color)] whitespace-nowrap">
              Binay Sharma
            </span>
          </small>

          {/* Professional Role */}
          <p className="hidden md:block md:text-xs lg:text-sm text-[var(--accent-color)] font-medium text-center tracking-wide">
            UI/UX Designer & Interaction Designer
          </p>

          {/* Credit */}
          <small className="text-[10px] sm:text-xs md:text-sm text-[var(--text-muted)] text-right tracking-normal">
            Designed & Developed by{" "}
            <span className="font-medium text-[var(--text-color)] whitespace-nowrap">
              Binay Sharma
            </span>
          </small>

        </div>
      </div>
    </footer>
  );
};

export default Footer;