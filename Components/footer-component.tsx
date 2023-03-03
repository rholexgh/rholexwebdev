import Link from "next/link";
import { Socials } from "./array_items";
import Copytext from "./copyright-component";

export default function FooterComponent() {
  return (
    <footer className="flex flex-col py-2">
      {/* copyrightsection */}
      <div className="border-alt-400 flex flex-col items-center border-t p-4">
        <div className="flex w-full max-w-7xl flex-col items-center justify-between md:flex-row">
          <div className="order-last md:order-first">
            <Copytext />
          </div>
          <div className="text-alt-100 flex items-center space-x-6  py-2 pb-5 md:pb-0">
            {Socials.map((social) => (
              <div key={social.id}>
                <Link
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <span>{social.icon}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
