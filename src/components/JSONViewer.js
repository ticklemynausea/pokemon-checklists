import React from "react";

const JSONViewer = ({ content, ...props }) => (<textarea
  {...props}
  style={{fontFamily: "monospace", width: "100%", }}
  rows={12}
  defaultValue={JSON.stringify(content, false, " ")}
/>);

export default JSONViewer;
