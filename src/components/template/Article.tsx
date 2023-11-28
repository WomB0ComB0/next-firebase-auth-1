import React, { memo } from 'react';
import { MotionArticle } from '@/components/constants/Motion';
import { SemanticProps } from '@/types/semantic-props';
import { cn } from '@/lib/utils';

function Article({ framer, children, className = 'pre-wrap break-words', style, framerProps, attributes, key }: SemanticProps) {
  type SectionMotionProps = typeof MotionArticle extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionArticle {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionArticle>
      ) : (
        <article {...attributes} className={cn('', className)} style={style}>
          {children}
        </article>
      )}
    </>
  );
}
export default memo(Article);
