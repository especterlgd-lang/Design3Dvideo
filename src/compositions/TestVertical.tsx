import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { ThreeCanvas } from "@remotion/three";
import { Object3DTest } from "../scenes/Object3DTest";

export const testVerticalDefaults = {
  durationInFrames: 150,
  fps: 30,
};

export const TestVertical: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 200 },
  });
  const titleY = interpolate(titleProgress, [0, 1], [120, 0]);
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const subtitleOpacity = interpolate(frame, [30, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0d12", color: "#f5f5f5" }}>
      <div
        style={{
          position: "absolute",
          top: 160,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: 800,
          fontSize: 120,
          letterSpacing: -2,
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        TheTarF
      </div>

      <div
        style={{
          position: "absolute",
          top: 330,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 48,
          opacity: subtitleOpacity,
          color: "#8fd3ff",
        }}
      >
        Teste de composição 3D · 1080 × 1920
      </div>

      <div
        style={{
          position: "absolute",
          top: 620,
          left: (1080 - width) / 2,
          width: 1080,
          height: 900,
        }}
      >
        <ThreeCanvas width={1080} height={900} camera={{ position: [0, 0, 5], fov: 45 }}>
          <Object3DTest />
        </ThreeCanvas>
      </div>
    </AbsoluteFill>
  );
};
