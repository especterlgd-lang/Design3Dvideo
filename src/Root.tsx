import React from "react";
import { Composition } from "remotion";
import { TestVertical, testVerticalDefaults } from "./compositions/TestVertical";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TestVertical"
        component={TestVertical}
        durationInFrames={testVerticalDefaults.durationInFrames}
        fps={testVerticalDefaults.fps}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
    </>
  );
};
