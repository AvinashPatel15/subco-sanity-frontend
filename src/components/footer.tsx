import Link from "next/link";
import SubcoLogo from "./icons/subco-logo";
import { Button } from "./ui/button";

const footerColumns = [
  {
    heading: "Engineering",
    links: [
      "FEED Studies",
      "Structural FEA",
      "Risk Assessment",
      "FEA",
      "Automation",
    ],
  },
  {
    heading: "Project Lifecycle",
    links: ["Front-End Phase Model", "Supply Chain", "Offshore Support"],
  },
  {
    heading: "Our Offerings",
    links: [
      "Sea Fastening",
      "Lift Planning",
      "Weld Mapping",
      "Method Statements",
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#E5E7EB] bg-[#F5F7F8]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
        {/* Top: Nav row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-12">
          <Link href="/" className="shrink-0">
            <SubcoLogo />
          </Link>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {["Capabilities", "Process", "Technical Papers", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[#4B5563] font-medium text-sm hover:text-[#1B69AC] transition-colors font-sans"
                >
                  {item}
                </a>
              ),
            )}
          </nav>
          <Button variant="outline" size="sm" className="hidden sm:inline-flex">
            Client Portal
          </Button>
        </div>

        {/* Columns */}
        <div className="flex flex-col sm:flex-row gap-12 pb-12 items-start justify-center">
          {footerColumns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <p className="font-mono text-xs font-bold text-[#9CA3AF] uppercase tracking-[1.2px]">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#4B5563] text-sm font-medium hover:text-[#1B69AC] transition-colors font-sans"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-12 border-t border-[#E5E7EB]">
          <p className="font-mono text-xs text-[#9CA3AF]">
            © 2024 Subco Engineering. Outcomes Owned. Scope Locked.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="font-mono text-xs text-[#9CA3AF] hover:text-[#6B7280] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-mono text-xs text-[#9CA3AF] hover:text-[#6B7280] transition-colors"
            >
              Terms of Business
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
