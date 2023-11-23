import LargeContainerView from "./LargeContainer.view";

type Props = {
  children: any;
};

export default function LargeContainerContainer({ children }: Props) {
  return <LargeContainerView>{children}</LargeContainerView>;
}
