type Props = {
  children: any;
};

export default function ExtraLargeContainerView({ children }: Props) {
  return <div className="mx-auto my-5 px-3 w-full">{children}</div>;
}
