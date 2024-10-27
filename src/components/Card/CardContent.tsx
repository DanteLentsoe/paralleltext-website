import { FC, ReactNode } from 'react'

export const CardContent: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={className + 'p-6'}>{children}</div>
