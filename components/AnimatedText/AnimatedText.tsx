import React from "react";
// @ts-ignore
import "./AnimatedText.css";

type AnimatedTextProps = {
  prefix?: string;
  textContent: string;
};

/**
 * AnimatedText component to display animated text which simulates a typing effect
 * with an optional prefix that are not animated.
 * Note: This component can only handle upto 6 characters and is not dynamic.
 * Note: CSS animations are handled in the accompanying AnimatedText.css file.
 * @param prefix - Optional static text prefix (not animated)
 * @param textContent - Main text content to be animated (up to 6 characters)
 */
export default function AnimatedText({
  prefix,
  textContent,
}: AnimatedTextProps) {
  return (
    <div className="container">
      {prefix ? <span className="text first-text">{prefix}</span> : null}
      <span className="text sec-text">{textContent}</span>
    </div>
  );
}
