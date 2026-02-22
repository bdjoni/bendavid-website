/**
 * Lightweight framer-motion mock for SSR pre-rendering.
 * Replaces motion.* animated components with plain HTML elements,
 * stripping all animation props so the output is clean static HTML.
 */

import React, { forwardRef } from 'react';

// Strip these animation-specific props, pass everything else through
const ANIMATION_PROPS = new Set([
  'initial', 'animate', 'exit', 'whileInView', 'whileHover', 'whileTap',
  'whileFocus', 'whileDrag', 'variants', 'transition', 'viewport',
  'layout', 'layoutId', 'layoutDependency', 'layoutScroll',
  'onAnimationStart', 'onAnimationComplete', 'onUpdate',
  'drag', 'dragConstraints', 'dragElastic', 'dragMomentum', 'dragTransition',
  'dragListener', 'dragControls', 'dragSnapToOrigin', 'dragPropagation',
  'onDrag', 'onDragStart', 'onDragEnd', 'onDirectionLock',
  'custom', 'inherit',
]);

function createMotionComponent(Tag: string) {
  return forwardRef<unknown, Record<string, unknown>>(
    function MotionSSR(props, ref) {
      const cleanProps: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(props)) {
        if (!ANIMATION_PROPS.has(key)) {
          cleanProps[key] = value;
        }
      }
      return React.createElement(Tag, { ...cleanProps, ref });
    }
  );
}

// Proxy: motion.div → plain <div>, motion.h1 → plain <h1>, etc.
const cache: Record<string, ReturnType<typeof createMotionComponent>> = {};
export const motion = new Proxy({} as Record<string, ReturnType<typeof createMotionComponent>>, {
  get: (_, tag: string) => {
    if (!cache[tag]) cache[tag] = createMotionComponent(tag);
    return cache[tag];
  },
});

// Re-export common framer-motion wrappers as pass-through
export const AnimatePresence = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
export const MotionConfig = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
export const LazyMotion = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
export const domAnimation = {};
export const domMax = {};

// Hooks (no-op versions for SSR)
export function useAnimation() { return { start: () => Promise.resolve(), stop: () => {}, set: () => {} }; }
export function useInView() { return false; }
export function useScroll() { return { scrollX: { get: () => 0 }, scrollY: { get: () => 0 }, scrollXProgress: { get: () => 0 }, scrollYProgress: { get: () => 0 } }; }
export function useTransform() { return 0; }
export function useMotionValue(initial: number = 0) { return { get: () => initial, set: () => {}, onChange: () => () => {} }; }
export function useReducedMotion() { return false; }
export function useSpring(value: unknown) { return value; }
export function useVelocity() { return { get: () => 0 }; }
export function useAnimationControls() { return useAnimation(); }
