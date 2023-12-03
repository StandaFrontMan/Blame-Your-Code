"use client";

import React from "react";
import ModalView from "./Modal.view";

export default function ModalContainer({ children }: any) {
  const [active, setActive] = React.useState(true);

  return (
    <div>
      <button onClick={() => setActive(!active)}>Click</button>
      {active && (
        <ModalView active={active} setActive={setActive}>
          {children}
        </ModalView>
      )}
    </div>
  );
}
