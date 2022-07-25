import NavLink, { LinkProps } from "./Link";

const linkObjects = [
  { url: "/", displayText: "Home" },
  { url: "/order", displayText: "Order" },
  { url: "/api/auth/login", displayText: "Login", shouldUseAnchor: true },
  { url: "/api/auth/logout", displayText: "Logout", shouldUseAnchor: true },
];

export default function NavLinks() {
  const links = linkObjects.map((link: LinkProps) => (
    <NavLink key={link.displayText} props={link} />
  ));

  return <div className="flex px-5">{links}</div>;
}
