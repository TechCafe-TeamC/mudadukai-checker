import { ReactNode } from 'react'

type Props = {
    OnClick?: () => void,
    children: ReactNode,
    HtmlFor?: string
}

const Button = ({OnClick, children, HtmlFor}: Props) => {
  return (
    <label htmlFor={HtmlFor} onClick={OnClick}
        className='
        bg-gray-800
        cursor-pointer
        m-5
        rounded-full
        border-gray
        origin-shadow
        flex
        justify-center
        overflow-hidden
        max-h-[78px]
        '
    >
            <div className='
            bg-gray-800
            p-[14px]
            w-16
            h-16
            rounded-full
            border-gold'
            >
                {children}
            </div>
    </label>

)
}

export default Button
