import MediumContainerView from "./MediumContainer.view";

type Props = {
  children: any;
};

export default function MediumContainerContainer({ children }: Props) {
  return <MediumContainerView>{children}</MediumContainerView>;
}
