import { FC } from "react";

type Props = {
  label: string;
  onClick: () => void;
};
export const DefaultButton: FC<Props> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
