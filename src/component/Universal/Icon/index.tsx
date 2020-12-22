import React, { FC } from 'react';
import classNames from 'classnames'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import './style/index.less'

library.add(fas)

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

interface BaseIconProps extends FontAwesomeIconProps {
    theme?: ThemeProps
}

const Icon: FC<BaseIconProps> = (props) => {
    const { className, theme, ...restProps } = props;
    const classes = classNames('tw-icon', className, {
        [`icon-${theme}`]: theme
    })
    return <FontAwesomeIcon className={classes} {...restProps} />
};
export default Icon