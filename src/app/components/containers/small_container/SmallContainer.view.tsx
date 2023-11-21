type Props = {
  children: any;
};

export default function SmallContainerView({ children }: Props) {
  return <div className="mx-auto w-1/4 border-2">{children}</div>;
}
