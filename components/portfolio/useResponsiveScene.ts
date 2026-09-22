"use client";

import { useMemo } from "react";
import { useThree } from "@react-three/fiber";

export interface ResponsiveSceneConfig {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  targetPosition: [number, number, number];
  targetScale: [number, number, number];
  maxRotation: number;
}

const PORTRAIT_ASPECT = 1212 / 1297; // 0.93446

export function useResponsiveScene(): ResponsiveSceneConfig {
  const { viewport, size } = useThree();

  return useMemo(() => {
    const isMobile = size.width < 768;
    const isTablet = size.width >= 768 && size.width < 1024;
    const isDesktop = size.width >= 1024;

    if (isMobile) {
      // Mobile: Centered, lower half of screen
      const height = Math.min(
        viewport.height * 0.52,
        (viewport.width * 0.78) / PORTRAIT_ASPECT
      );
      const width = height * PORTRAIT_ASPECT;

      return {
        isMobile,
        isTablet,
        isDesktop,
        targetPosition: [0, -viewport.height * 0.12, 0],
        targetScale: [width, height, 1],
        maxRotation: 0.02,
      };
    }

    if (isTablet) {
      // Tablet: Slightly shifted right, medium scale
      const height = Math.min(
        viewport.height * 0.62,
        (viewport.width * 0.55) / PORTRAIT_ASPECT
      );
      const width = height * PORTRAIT_ASPECT;

      return {
        isMobile,
        isTablet,
        isDesktop,
        targetPosition: [viewport.width * 0.12, -viewport.height * 0.08, 0],
        targetScale: [width, height, 1],
        maxRotation: 0.035,
      };
    }

    // Desktop (>= 1024px):
    const maxDesktopWidth = Math.min(
      viewport.width,
      1280 / (size.width / viewport.width)
    );
    const rightColCenter = maxDesktopWidth * 0.235;

    const height = Math.min(
      viewport.height * 0.72,
      (maxDesktopWidth * 0.44) / PORTRAIT_ASPECT
    );
    const width = height * PORTRAIT_ASPECT;

    return {
      isMobile,
      isTablet,
      isDesktop,
      targetPosition: [rightColCenter, -viewport.height * 0.04, 0],
      targetScale: [width, height, 1],
      maxRotation: 0.05,
    };
  }, [viewport.width, viewport.height, size.width]);
}
