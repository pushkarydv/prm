import React from "react";
import TextTransition, { presets } from "react-text-transition";

const AnimatedText = ({ words }) => {
  const TEXTS = words;
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1500);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      {" "}
      <TextTransition
        text={TEXTS[index % TEXTS.length]}
        springConfig={presets.wobbly}
        inline
        className="text-cyan-900"
      />
    </>
  );
};
export default AnimatedText;
