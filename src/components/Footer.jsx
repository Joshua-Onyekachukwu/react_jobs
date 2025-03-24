import React from "react";
import logo from "../assets/logo.png";



const navigation = {
  main: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
            />
          </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427C2.013 15.987 2 15.643 2 13v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 017.315 2c1.064-.049 1.407-.06 4.123-.06h.08zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 2a4.162 4.162 0 110 8.324 4.162 4.162 0 010-8.324zm5.338-1.86a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"
                clipRule="evenodd"
            />
          </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.93 3c-2.45 0-4.15 2.17-4.15 4.38v1A10.66 10.66 0 013 4.07S-2 15 8 20.44A11.64 11.64 0 0016 21c7.5 0 12-6.93 12-12.94v-.73A8.5 8.5 0 0023 3z" />
          </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M4 3a2 2 0 10.01 4.01A2 2 0 004 3zm0 4a2 2 0 10.01-4.01A2 2 0 004 7zM2 9h4v12H2zM9 9h4v2.2h.1c.8-1.5 2.8-2.2 4.8-2.2 5 0 6 3.3 6 7.6V21h-4v-7.2c0-2.5-1-3.8-3-3.8-1.6 0-2.5 1.1-2.9 2.1-.2.5-.1 1.3-.1 2V21H9z" />
          </svg>
      ),
    },
  ],
};


export default function Footer() {
  return (
      <footer className="relative isolate overflow-hidden bg-gray-900 text-gray-300 py-32">
        {/* Background Pattern */}
        <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern id="footer-pattern" x="50%" y={-1} width={200} height={200} patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect fill="url(#footer-pattern)" width="100%" height="100%" strokeWidth={0} />
        </svg>

        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="flex justify-center mb-8">
            <img src={logo} alt="Logo" className="h-12"/>
            <span className="hidden md:block text-white text-2xl font-bold ml-2 py-2">
                                React Jobs
            </span>
          </div>
          {/* Navigation */}
          <nav className="mb-6 flex justify-center space-x-6">
            {navigation.main.map((item) => (
                <a key={item.name} href={item.href} className="hover:text-white">
                  {item.name}
                </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="mt-6 flex justify-center space-x-6">
            {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="hover:text-white" aria-label={item.name}>
                  <item.icon className="h-6 w-6"/>
                </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="mt-6 text-sm text-gray-500">&copy; {new Date().getFullYear()} React Jobs. All rights
            reserved.</p>
        </div>
      </footer>
  );
}
