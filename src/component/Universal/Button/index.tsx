import React, { FC, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames'
import './style/index.less'

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm',
}
export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Dashed = 'dashed',
    Danger = 'danger',
    Link = 'link',
}
interface BaseButtonProps {
    className?: string,
    size?: ButtonSize,
    type?: ButtonType,
    htmlType?: 'button' | 'submit' | 'reset',
    disabled?: boolean,
    block?: boolean,
    children: React.ReactNode
}

type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

type PartialButtonProps = Partial<ButtonProps>

const Button: FC<PartialButtonProps> = (props) => {
    const {
        className,
        size,
        type: butType = ButtonType.Default,
        disabled = false,
        block,
        children,
        htmlType = 'button',
        ...restProps
    } = props;
    const classes = classNames(
        'btn',
        className,
        {
            [`btn-${butType}`]: butType,
            [`btn-${size}`]: size,
            ['btn-block']: block,
        })
    return (
        <button
            className={classes}
            disabled={disabled}
            {...restProps}
            type={htmlType}
        >
            {children}
        </button>
    )
}

export default Button

