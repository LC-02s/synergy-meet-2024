import { css } from '@emotion/react'
import { $variable, DEADLINE } from '@/shared/constants'
import { formatDeadline } from '@/shared/utils'
import ParallaxText from './ParallaxText'

const keywordStyle = css`
  padding: 10rem 0rem;
  @media ${$variable.breakpoint.lg} {
    padding: 8rem 0rem;
  }
  @media ${$variable.breakpoint.sm} {
    padding: 6rem 0rem;
  }
  & > div:first-of-type {
    transform: rotate(-1.6deg);
  }
  & > div:last-of-type {
    background-color: ${$variable.color.green700};
    transform: rotate(0.4deg);
  }
`

export default function Keyword() {
  return (
    <section id="keyword" css={keywordStyle}>
      <ParallaxText baseVelocity={80}>2024 SYNERGY MEET</ParallaxText>
      <ParallaxText baseVelocity={-80}>
        GOORM-SQUARE &nbsp; {formatDeadline(DEADLINE)} 13:30&nbsp;
      </ParallaxText>
    </section>
  )
}
