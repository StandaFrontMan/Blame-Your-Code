import NewsContainerView from "./NewsContainer.view";

type Props = {
  children: any;
  date: string;
};

export default function NewsContainerContainer({ children, date }: Props) {
  return <NewsContainerView date={date}>{children}</NewsContainerView>;
}
