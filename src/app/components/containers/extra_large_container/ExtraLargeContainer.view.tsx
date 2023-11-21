type Props = {
  children: any;
};

export default function ExtraLargeContainerView({ children }: Props) {
  return <div className="mx-auto w-full border-2">{children}</div>;
}
