import NavLink, { LinkProps } from "./Link";

const linkObjects = [
  { url: "/", displayText: "Home" },
  { url: "/", displayText: "Order" },
  { url: "/login", displayText: "Login" },
];

export default function NavLinks() {
  const links = linkObjects.map((link: LinkProps) => (
    <NavLink key={link.displayText} props={link} />
  ));

  return <div className="flex px-5">{links}</div>;
}
