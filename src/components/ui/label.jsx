import React from 'react';
import { cn } from '../../lib/utils';

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      'text-sm font-semibold uppercase tracking-[0.18em] text-slate-800',
      className,
    )}
    {...props}
  />
));

Label.displayName = 'Label';

export { Label };
