// ChildComponent.js
import React from "react";

function ChildComponent({ children }) {
  return (
    <div>
      <h2>I'm the child component!</h2>
      <div>{children}</div>
    </div>
  );
}

// ParentComponent.js
function ParentComponent({ showChildren, children }) {
  return (
    <div>
      <ChildComponent>children content</ChildComponent>
      {children}
    </div>
  );
}

function GrandparentComponent() {
  return (
    <ParentComponent showChildren={true}>
      <ChildComponent>
        <p>Grandchild content</p>
      </ChildComponent>
    </ParentComponent>
  );
}

export { ParentComponent, ChildComponent, GrandparentComponent };
