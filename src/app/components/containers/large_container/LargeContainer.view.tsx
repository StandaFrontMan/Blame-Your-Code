type Props = {
  children: any;
};

export default function LargeContainerView({ children }: Props) {
  return <div className="mx-auto w-3/4 border-2">{children}</div>;
}
