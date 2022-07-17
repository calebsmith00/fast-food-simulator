import NavLink, { LinkProps } from "./Link";

type LinksProps = {
  links: LinkProps[];
};

export default function NavLinks(props: LinksProps) {
  const links = props.links.map((link: LinkProps) => (
    <NavLink key={link.displayText} props={link} />
  ));

  return <div className="flex px-5">{links}</div>;
}
