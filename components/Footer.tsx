const Footer = () => {
  const footerLinks = {
    company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
    support: [
      { label: "FAQ", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Terms of Use", href: "#" },
      { label: "Privacy", href: "#" },
    ],
    social: [
      { label: "Twitter", href: "#", icon: "𝕏" },
      { label: "Facebook", href: "#", icon: "f" },
      { label: "Instagram", href: "#", icon: "📸" },
      { label: "YouTube", href: "#", icon: "▶" },
    ],
  };

  return (
    <footer className="border-t border-gray-800/30 bg-black/20 backdrop-blur-sm px-4 py-12 text-gray-400">
      <div className="container mx-auto">
        {/* Logo and Description */}
        <div className="mb-8">
          <h2 className="mb-2 text-2xl font-bold text-red-600">Flixtor</h2>
          <p className="text-sm">Your ultimate destination for movies and TV shows.</p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Company Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-4 font-semibold text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full bg-gray-800 p-2 text-sm hover:bg-gray-700 hover:text-white"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-4 font-semibold text-white">Stay Updated</h3>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm">
            {new Date().getFullYear()} Flixtor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
