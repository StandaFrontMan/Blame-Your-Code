type Props = {
  children: any;
};

export default function LargeContainerView({ children }: Props) {
  return <div className="mx-auto w-3/4 my-6">{children}</div>;
}
