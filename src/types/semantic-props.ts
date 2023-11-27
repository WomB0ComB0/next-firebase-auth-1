import React, { PropsWithChildren } from 'react';
import { HTMLMotionProps } from 'framer-motion';

export type Semantics =
  | 'article'
  | 'div'
  | 'main'
  | 'menu'
  | 'nav'
  | 'section'
  | 'header'
  | 'footer'
  | 'picture';
export interface SemanticProps extends PropsWithChildren {
  framer?: boolean;
  framerProps?: HTMLMotionProps<Semantics>;
  attributes?: React.HTMLAttributes<HTMLElement>;
  key?: string | number;
  style?: React.CSSProperties;
  className?: string;
}
