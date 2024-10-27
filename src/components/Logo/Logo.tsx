import { FC } from 'react'

type LogoProps = {
  mode?: 'light' | 'dark'
}

export const Logo: FC<LogoProps> = ({ mode = 'dark' }) => {
  return (
    <div className="text-2xl font-bold">
      <span className={mode === 'light' ? 'text-white' : 'text-[#003B5C]'}>
        PARALLEL
      </span>
      <span className="text-[#00A4BD]">TEXT</span>
    </div>
  )
}
