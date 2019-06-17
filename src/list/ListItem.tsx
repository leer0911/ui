/* tslint:disable:jsx-no-multiline-js */
import classnames from 'classnames';
import * as React from 'react';
import TouchFeedback from 'rmc-feedback';
import { ListItemPropsType as ListItemBasePropsType } from './PropsType';

export interface ListItemProps extends ListItemBasePropsType {
  prefixCls?: string;
  className?: string;
  role?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const ListItem: React.SFC<ListItemProps> = (props) => {
  const {
    prefixCls = 'am-list',
    align = 'middle',
    error = false,
    multipleLine = false,
    wrap = false,
    className,
    activeStyle,
    disabled,
    children,
    thumb,
    extra,
    arrow,
    onClick,
    ...restProps
  } = props;
  const { platform = 'ios', ...otherProps } = restProps;

  const wrapCls = classnames(`${prefixCls}-item`, className, {
    [`${prefixCls}-item-disabled`]: disabled,
    [`${prefixCls}-item-error`]: error,
    [`${prefixCls}-item-top`]: align === 'top',
    [`${prefixCls}-item-middle`]: align === 'middle',
    [`${prefixCls}-item-bottom`]: align === 'bottom',
  });

  const lineCls = classnames(`${prefixCls}-line`, {
    [`${prefixCls}-line-multiple`]: multipleLine,
    [`${prefixCls}-line-wrap`]: wrap,
  });

  const arrowCls = classnames(`${prefixCls}-arrow`, {
    [`${prefixCls}-arrow-horizontal`]: arrow === 'horizontal',
    [`${prefixCls}-arrow-vertical`]: arrow === 'down' || arrow === 'up',
    [`${prefixCls}-arrow-vertical-up`]: arrow === 'up',
  });

  const content = (
    <div {...otherProps} className={wrapCls}>
      {thumb ? (
        <div className={`${prefixCls}-thumb`}>
          {typeof thumb === 'string' ? <img src={thumb} /> : thumb}
        </div>
      ) : null}
      <div className={lineCls}>
        {children !== undefined && (
          <div className={`${prefixCls}-content`}>{children}</div>
        )}
        {extra !== undefined && (
          <div className={`${prefixCls}-extra`}>{extra}</div>
        )}
        {arrow && <div className={arrowCls} aria-hidden="true" />}
      </div>
    </div>
  );

  const touchProps: any = {};
  Object.keys(otherProps).forEach((key) => {
    if (/onTouch/i.test(key)) {
      touchProps[key] = (otherProps as any)[key];
      delete (otherProps as any)[key];
    }
  });

  return (
    <TouchFeedback
      {...touchProps}
      disabled={disabled || !onClick}
      activeStyle={activeStyle}
      activeClassName={`${prefixCls}-item-active`}
    >
      {content}
    </TouchFeedback>
  );
};

export default ListItem;
