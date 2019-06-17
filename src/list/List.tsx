/* tslint:disable:jsx-no-multiline-js */
import classnames from 'classnames';
import * as React from 'react';
import { ListPropsType } from './PropsType';

export interface ListProps extends ListPropsType {
  prefixCls?: string;
  className?: string;
  role?: string;
  style?: React.CSSProperties;
}

const List: React.SFC<ListProps> = (props) => {
  const {
    prefixCls = 'am-list',
    children,
    className,
    style,
    renderHeader,
    renderFooter,
    ...restProps
  } = props;
  const wrapCls = classnames(prefixCls, className);

  return (
    <div className={wrapCls} style={style} {...restProps}>
      {renderHeader ? (
        <div className={`${prefixCls}-header`}>
          {typeof renderHeader === 'function' ? renderHeader() : renderHeader}
        </div>
      ) : null}
      {children ? <div className={`${prefixCls}-body`}>{children}</div> : null}
      {renderFooter ? (
        <div className={`${prefixCls}-footer`}>
          {typeof renderFooter === 'function' ? renderFooter() : renderFooter}
        </div>
      ) : null}
    </div>
  );
};

export default List;
