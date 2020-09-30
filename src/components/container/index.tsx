import React from "react";
import withChildren from "types/with-children";

import "./style.scss";

export default function Container({ children }: withChildren) {
  return <div className="container">{children}</div>;
}
