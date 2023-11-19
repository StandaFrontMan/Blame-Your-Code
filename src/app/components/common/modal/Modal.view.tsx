import { Dispatch, SetStateAction } from "react";
import "./modal.css";

type Props = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  children: any;
};

export default function ModalView({ active, setActive, children }: Props) {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
