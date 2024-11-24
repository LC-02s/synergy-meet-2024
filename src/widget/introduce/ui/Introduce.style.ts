import { css } from '@emotion/react'
import { $variable } from '@/shared/constants'
import { SESSION_LIST } from '../constants'

export const introduceSectionStyle = css`
  position: relative;
  padding: 6rem 0rem 8rem;
`

export const introduceStyle = css`
  position: relative;
  margin: 0rem 0rem 12rem;
  padding: 0rem 2.5rem;
  @media ${$variable.breakpoint.xl} {
    margin: 0rem 0rem 10rem;
  }
  @media ${$variable.breakpoint.md} {
    margin: 0rem 0rem 8rem;
  }
  @media ${$variable.breakpoint.sm} {
    padding: 0rem 1.25rem;
  }
  & > h2 {
    margin: 0rem 0rem 3rem;
    font-size: ${$variable.font.size900};
    font-weight: ${$variable.font.bold};
    color: ${$variable.color.gray000};
    text-align: center;
    line-height: ${$variable.leading.normal};
    white-space: nowrap;
    @media ${$variable.breakpoint.xl} {
      margin: 0rem 0rem 2rem;
      font-size: ${$variable.font.size800};
    }
    @media ${$variable.breakpoint.md} {
      margin: 0rem 0rem 1.5rem;
      font-size: ${$variable.font.size700};
    }
    @media ${$variable.breakpoint.xs} {
      font-size: ${$variable.font.size600};
    }
  }
  & > p {
    font-size: ${$variable.font.size600};
    font-weight: ${$variable.font.regular};
    color: ${$variable.color.gray100};
    text-align: center;
    line-height: ${$variable.leading.relaxed};
    word-break: keep-all;
    @media ${$variable.breakpoint.xl} {
      font-size: ${$variable.font.size500};
    }
    @media ${$variable.breakpoint.md} {
      font-size: ${$variable.font.size400};
    }
    @media ${$variable.breakpoint.sm} {
      font-size: ${$variable.font.size300};
    }
    & > br {
      @media ${$variable.breakpoint.md} {
        display: none;
      }
    }
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4.75rem 0rem 0rem;
    @media ${$variable.breakpoint.xl} {
      margin: 3.25rem 0rem 0rem;
    }
    @media ${$variable.breakpoint.sm} {
      margin: 2.25rem 0rem 0rem;
    }
    & > a > span {
      display: block;
      padding: 0.625rem 1.25rem 0.5rem;
      font-size: ${$variable.font.size500};
      font-weight: inherit;
      color: inherit;
      line-height: ${$variable.leading.normal};
      white-space: nowrap;
      @media ${$variable.breakpoint.xl} {
        padding: 0.5rem 1.25rem;
        font-size: ${$variable.font.size400};
      }
      @media ${$variable.breakpoint.md} {
        padding: 0.5rem 0.75rem;
      }
      @media ${$variable.breakpoint.sm} {
        padding: 0.25rem 0.75rem;
        font-size: ${$variable.font.size300};
      }
    }
  }
`

export const sessionStyle = css`
  position: relative;
  display: flex;
  @media ${$variable.breakpoint.xl} {
    display: block;
  }
  & > .title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 20rem;
    padding: 3rem 1.5rem 2.75rem 2.75rem;
    @media ${$variable.breakpoint.xl} {
      flex-direction: row;
      align-items: center;
      width: 100%;
      margin: 0rem auto 2.75rem;
      padding: 0rem 2.5rem;
    }
    @media ${$variable.breakpoint.md} {
      margin: 0rem 0rem 2rem;
      padding: 0rem 1.25rem;
    }
    @media ${$variable.breakpoint.sm} {
      display: block;
    }
    & > h3 {
      padding: 0rem 0rem 0rem 0.5rem;
      font-size: ${$variable.font.size700};
      font-weight: ${$variable.font.bold};
      line-height: ${$variable.leading.normal};
      @media ${$variable.breakpoint.md} {
        padding: 0.25rem 0rem 0rem 0.5rem;
        font-size: ${$variable.font.size600};
      }
      @media ${$variable.breakpoint.sm} {
        display: flex;
        justify-content: space-between;
        padding: 0rem 0.5rem;
        text-align: center;
      }
      & > span {
        font-size: ${$variable.font.size500};
        font-weight: ${$variable.font.regular};
        color: ${$variable.color.gray100};
        @media ${$variable.breakpoint.sm} {
          font-size: ${$variable.font.size400};
        }
      }
    }
    & > p {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;
      & > button {
        font-size: ${$variable.font.size600};
        &:last-of-type {
          margin: 0rem 0rem 0rem 1rem;
          font-size: ${$variable.font.size500};
        }
      }
    }
  }
  & > .wrapper {
    position: relative;
    flex: 1;
    overflow: hidden;
    @media ${$variable.breakpoint.xl} {
      width: 100%;
      padding: 0rem 0rem 0rem 2.25rem;
    }
    @media ${$variable.breakpoint.md} {
      padding: 0rem 0rem 0rem 1.25rem;
    }
    @media ${$variable.breakpoint.sm} {
      padding: 0rem;
      overflow: visible;
    }
    & > ul {
      position: relative;
      width: 100%;
      height: auto;
      z-index: 1;
      display: flex;
      @media ${$variable.breakpoint.sm} {
        display: block;
        padding: 0rem 1.25rem;
      }
      & > li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 24rem;
        height: 18rem;
        padding: 2rem;
        background-color: ${$variable.color.gray800};
        border-radius: 1rem;
        @media ${$variable.breakpoint.sm} {
          display: none;
          width: 100%;
          height: auto;
          padding: 1.5rem 1.25rem;
          ${SESSION_LIST.map((_, idx) => `&:nth-of-type(${idx + 1})`).join(',')} {
            display: block;
          }
        }
        & + li {
          @media ${$variable.breakpoint.sm} {
            margin: 1rem 0rem 0rem;
          }
        }
        & > h4 {
          font-size: ${$variable.font.size500};
          font-weight: ${$variable.font.bold};
          word-break: keep-all;
          line-height: ${$variable.leading.normal};
          @media ${$variable.breakpoint.sm} {
            font-size: ${$variable.font.size400};
            line-height: ${$variable.leading.relaxed};
          }
          & > span {
            display: block;
            margin: 0rem 0rem 1rem;
            font-size: ${$variable.font.size300};
            font-weight: ${$variable.font.regular};
            color: ${$variable.color.gray100};
            line-height: ${$variable.leading.normal};
            @media ${$variable.breakpoint.sm} {
              margin: 0rem 0rem 0.75rem;
            }
          }
        }
        & > ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 0.5rem;
          @media ${$variable.breakpoint.sm} {
            margin: 3rem 0rem 0rem;
          }
          & > li {
            padding: 0.625rem 0.75rem 0.5rem;
            font-size: ${$variable.font.size400};
            font-weight: ${$variable.font.medium};
            white-space: nowrap;
            background-color: ${$variable.color.gray700};
            border-radius: 0.5rem;
            @media ${$variable.breakpoint.sm} {
              padding: 0.5rem 0.75rem;
              font-size: ${$variable.font.size200};
            }
          }
        }
      }
    }
  }
`