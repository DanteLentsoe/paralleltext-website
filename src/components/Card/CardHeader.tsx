import { FC, ReactNode } from 'react'

export const CardHeader: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => <div className={className + 'px-6 py-4 border-b'}>{children}</div>
