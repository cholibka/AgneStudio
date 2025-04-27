import { useState } from "react";
import {
    Menu,
    Phone,
    Facebook,
    Instagram,
    Linkedin,
    Printer,
} from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "STRONA GŁÓWNA", href: "#" },
        { name: "PORTFOLIO", href: "#" },
        {
            name: "OFERTA",
            href: "#",
            subItems: [
                { name: "PROJEKTOWANIE WNĘTRZ", href: "#" },
                { name: "ARCHITEKTURA BUDYNKÓW", href: "#" },
                { name: "STREFA DEWELOPERA", href: "#" },
                { name: "POZOSTAŁE USŁUGI PROJEKTOWE", href: "#" },
            ],
        },
        { name: "INTERAKTYWNE NARDZĘDZIA", href: "#" },
        { name: "O NAS", href: "#" },
        { name: "KONTAKT", href: "#" },
    ];

    return (
        <div className="relative">
            <nav className="fixed w-full z-50 bg-[#3D1515] backdrop-blur-sm h-16">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Left side - Contact & Social */}
                        <div className="flex items-center gap-6">
                            <div className="hidden sm:flex items-center gap-4">
                                <a
                                    href="tel:+1234567890"
                                    className="text-[#C4A14D]  hover:text-[#ffd662] flex items-center gap-2 "
                                >
                                    <Phone size={16} />
                                    <span className="text-sm">
                                        +123 456 7890
                                    </span>
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <a
                                    href="#"
                                    className="text-[#C4A14D]  hover:text-[#ffd662]"
                                >
                                    <Facebook size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="text-[#C4A14D]  hover:text-[#ffd662]"
                                >
                                    <Instagram size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="text-[#C4A14D]  hover:text-[#ffd662]"
                                >
                                    <Linkedin size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="text-[#C4A14D]  hover:text-[#ffd662]"
                                >
                                    <Printer size={18} />
                                </a>
                            </div>
                        </div>

                        <div className="flex justify-items-center">
                            <button
                                type="button"
                                className="py-2.5 px-16 text-sm font-medium focus:outline-none rounded-full border border-[#C4A14D] hover:shadow-[0_0_10px_#C4A14D]  font-playfair"
                            >
                                WYCEŃ SWÓJ PROJEKT
                            </button>

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-[#C4A14D] ml-[10px] hover:text-[#ffd662]"
                            >
                                <Menu size={28} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div
                className="fixed z-50 left-1/2 transform -translate-x-1/2"
                style={{ top: "-10px" }}
            >
                <div
                    className="bg-[#3D1515] rounded-full flex items-center justify-center"
                    style={{
                        width: "150px",
                        height: "150px",
                    }}
                >
                    <span
                        className="text-[#C4A14D] text-7xl font-serif tracking-widest"
                        style={{ fontFamily: "serif" }}
                    >
                        AS
                    </span>
                </div>
            </div>
            <div
                className={`fixed top-[64px] right-0 z-50 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } w-80`}
            >
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                ></div>
                <div className="relative bg-dark h-[calc(100vh-60px)] p-6 shadow-lg">
                    <div className="flex flex-col space-y-6">
                        {menuItems.map((item) => (
                            <div key={item.name}>
                                <a
                                    href={item.href}
                                    className="font-playfair text-gray-200 hover:text-[#ffd662] px-3 py-2 text-xl font-medium transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>

                                {item.subItems && item.subItems.length > 0 && (
                                    <ul className="ml-6 space-y-4 mt-4 list-disc">
                                        {item.subItems.map((subItem) => (
                                            <li key={subItem.name}>
                                                <a
                                                    href={subItem.href}
                                                    className="font-playfair text-gray-300 hover:text-[#ffd662] px-3 py-2 text-lg font-medium transition-colors"
                                                    onClick={() =>
                                                        setIsOpen(false)
                                                    }
                                                >
                                                    {subItem.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
