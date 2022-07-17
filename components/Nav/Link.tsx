import Link from "next/link";

export type LinkProps = {
  url: string;
  displayText: string;
};

export default function NavLink({ props }: { props: LinkProps }) {
  return (
    <div className="px-10">
      <Link href={props.url}>
        <a>{props.displayText}</a>
      </Link>
    </div>
  );
}
