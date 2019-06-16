import classnames from 'classnames';
import * as React from 'react';
import loadSprite from './loadSprite';
import { IconPropsType } from './PropsType';

export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type SvgProps = Omit<React.HTMLProps<SVGSVGElement>, 'size' | 'type'>;
export interface IconProps extends IconPropsType, SvgProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

const { useEffect } = React;

const Icon: React.SFC<IconProps> = (props) => {
  const { type, className, size = 'md', ...restProps } = props;
  useEffect(() => {
    return () => {
      loadSprite();
    };
  });
  const cls = classnames(
    className,
    'am-icon',
    `am-icon-${type}`,
    `am-icon-${size}`,
  );
  return (
    <svg className={cls} {...restProps}>
      <use xlinkHref={`#${type}`} />
    </svg>
  );
};

export default Icon;
