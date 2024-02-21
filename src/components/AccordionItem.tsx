import {useState} from "react";
import IAccordionItemProps from "../interfaces/IAccordionItemProps.ts";

export default function AccordionItem({title,children}:IAccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border border-gray-300 rounded-lg mb-2 w-full">
            <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={toggleAccordion}
            >
                <h2 className="text-lg font-semibold">{title}</h2>
                <svg
                    className={`w-6 h-6 ${isOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
            {isOpen && (
                <div className="p-4 border-t border-gray-300">
                    {children}
                </div>
            )}
        </div>
    );
}
