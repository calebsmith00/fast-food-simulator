import NavLinks from "./Links";
import NavLogo from "./Logo";

const links = [
  { url: "/", displayText: "Home" },
  { url: "/", displayText: "Order" },
  { url: "/", displayText: "Login" },
];

export default function NavBar() {
  return (
    <div className="flex justify-between my-2">
      <NavLogo />
      <NavLinks links={links} />
    </div>
  );
}
