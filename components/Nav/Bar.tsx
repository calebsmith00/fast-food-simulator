import NavLinks from "./Links";
import NavLogo from "./Logo";

export default function NavBar() {
  return (
    <div className="flex justify-between my-2">
      <NavLogo />
      <NavLinks />
    </div>
  );
}
