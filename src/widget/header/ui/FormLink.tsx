import { css } from '@emotion/react'
import { Icon } from '@/shared/ui'
import { $variable } from '@/shared/constants'
import { useBreakpoint } from '@/shared/hooks'

export default function FormLink() {
  const sm = useBreakpoint('sm')

  return (
    <a
      href=""
      title="새창이동: 참가 신청하러 가기"
      target="_blank"
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2.5rem;
        padding: 0.5rem 0.75rem 0.5rem;
        border-radius: 3rem;
        background-color: ${$variable.color.cyan600};
        transition: background 0.2s ease-in-out;
        &:focus,
        &:hover,
        &:active {
          background-color: ${$variable.color.cyan500};
        }

        & > span {
          display: block;
          margin-top: 0.125rem;
          padding: ${sm ? '0rem 0.25rem' : '0rem 0rem 0rem 0.25rem'};
          font-size: ${$variable.font.size300};
          font-weight: ${$variable.font.medium};
          color: ${$variable.color.gray000};
          white-space: nowrap;
          line-height: ${$variable.leading.normal};
        }
        & > svg {
          display: block;
          margin-left: 0.5rem;
          font-size: ${$variable.font.size600};
        }
      `}
    >
      <span>참가 신청하기</span>
      {!sm && <Icon.ArrowRightUp />}
    </a>
  )
}
