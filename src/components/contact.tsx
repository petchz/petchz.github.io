import React, { useRef, useState, useEffect } from "react";
import { useSpring, a } from "@react-spring/web";
import useMeasure from "react-use-measure";
import { Container, Title, Frame, Content, toggle } from "../styles";
import * as Icons from "../icons";

function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}

const Tree = React.memo<
  React.HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean;
    name: string | JSX.Element;
  }
>(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [ref, { height: viewHeight }] = useMeasure();
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20,
    },
  });
  const Icon =
    Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`];
  return (
    <Frame>
      <Icon
        // @ts-ignore
        style={{ ...toggle, opacity: children ? 1 : 0.3 }}
        onClick={() => setOpen(!isOpen)}
      />
      <Title style={style}>{name}</Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <a.div ref={ref} style={{ y }} children={children} />
      </Content>
    </Frame>
  );
});

export default function Contact() {
  return (
    <Tree name="Contact" defaultOpen>
      <a href="mailto:taewapon.b@gmail.com">
        <Tree name="Email" style={{ color: "#EA4335" }} />
      </a>
      <a href="https://taewapon.site/todgame">
        <Tree name="Linkedin" style={{ color: "#0A66C2" }} />
      </a>
      <a href="https://taewaponb.medium.com">
        <Tree name="Medium" style={{ color: "#000000" }} />
      </a>
      <a href="https://github.com/taewaponb">
        <Tree name="Github" style={{ color: "#181717" }} />
      </a>
    </Tree>
  );
}
