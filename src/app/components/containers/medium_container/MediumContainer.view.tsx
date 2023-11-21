type Props = {
  children: any;
};

export default function MediumContainerView({ children }: Props) {
  return <div className="mx-auto w-2/4 border-2">{children}</div>;
}
