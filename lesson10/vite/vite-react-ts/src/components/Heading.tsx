import { ReactElement } from "react";

type Props = {
  title: string;
};

const Heading = ({ title }: Props): ReactElement => {
  return <h1>{title}</h1>;
};

export default Heading;
