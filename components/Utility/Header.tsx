type HeaderProps = {
  text: string;
};

export default function Header(props: HeaderProps) {
  return <div className="py-5 text-center text-2xl">{props.text}</div>;
}
