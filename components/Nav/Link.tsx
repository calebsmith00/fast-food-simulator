import Link from "next/link";

export type LinkProps = {
  url: string;
  displayText: string;
  shouldUseAnchor?: boolean;
};

export default function NavLink({ props }: { props: LinkProps }) {
  return (
    <div className="px-10">
      {props.shouldUseAnchor ? (
        <a href={props.url}>{props.displayText}</a>
      ) : (
        <Link href={props.url}>
          <a>{props.displayText}</a>
        </Link>
      )}
    </div>
  );
}
