import React from "react";
import Fade from "react-reveal/Fade";

export default function MainContent({ data, current }) {
  return <Fade>{data[current] && data[current].content}</Fade>;
}
