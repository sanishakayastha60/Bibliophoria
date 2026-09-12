"use client";
import TypewriterComponent from "typewriter-effect";

export default function Typewriter({ text }: { text: string }) {
  return (
    <TypewriterComponent
      onInit={(typewriter) => {
        typewriter.typeString(`${text}`).pauseFor(250).start();
      }}
    />
  );
}
