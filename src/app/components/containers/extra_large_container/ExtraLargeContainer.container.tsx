import ExtraLargeContainerView from "./ExtraLargeContainer.view";

type Props = {
  children: any;
};

export default function ExtraLargeContainerContainer({ children }: Props) {
  return <ExtraLargeContainerView>{children}</ExtraLargeContainerView>;
}
