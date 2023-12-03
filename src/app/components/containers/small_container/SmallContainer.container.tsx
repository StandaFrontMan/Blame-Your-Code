import SmallContainerView from "./SmallContainer.view";

type Props = {
  children: any;
};

export default function SmallContainerContainer({ children }: Props) {
  return <SmallContainerView>{children}</SmallContainerView>;
}
