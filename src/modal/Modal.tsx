import classnames from 'classnames';
import * as React from 'react';
import Dialog from 'rmc-dialog';
import TouchFeedback from 'rmc-feedback';
import { Action, ModalPropsType } from './PropsType';

export interface ModalProps extends ModalPropsType<React.CSSProperties> {
  prefixCls?: string;
  transitionName?: string;
  maskTransitionName?: string;
  className?: string;
  wrapClassName?: string;
  wrapProps?: Partial<React.HTMLProps<HTMLDivElement>>;
  platform?: string;
  style?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
}

const renderFooterButton = (
  button: Action<React.CSSProperties>,
  prefixCls: string | undefined,
  i: number,
) => {
  let buttonStyle = {};
  if (button.style) {
    buttonStyle = button.style;
    if (typeof buttonStyle === 'string') {
      const styleMap: {
        [key: string]: object;
      } = {
        cancel: {},
        default: {},
        destructive: { color: 'red' },
      };
      buttonStyle = styleMap[buttonStyle] || {};
    }
  }

  const onClickFn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (button.onPress) {
      button.onPress();
    }
  };

  return (
    <TouchFeedback activeClassName={`${prefixCls}-button-active`} key={i}>
      <a
        className={`${prefixCls}-button`}
        role="button"
        style={buttonStyle}
        onClick={onClickFn}
      >
        {button.text || `Button`}
      </a>
    </TouchFeedback>
  );
};

const Modal: React.SFC<ModalProps> = (props) => {
  const {
    prefixCls = 'am-modal',
    className,
    wrapClassName,
    transitionName,
    maskTransitionName,
    style,
    platform,
    footer = [],
    operation,
    animated,
    transparent,
    popup,
    animationType,
    ...restProps
  } = props;

  const btnGroupClass = classnames(
    `${prefixCls}-button-group-${
      footer.length === 2 && !operation ? 'h' : 'v'
    }`,
    `${prefixCls}-button-group-${operation ? 'operation' : 'normal'}`,
  );
  const footerDom = footer.length ? (
    <div className={btnGroupClass} role="group">
      {footer.map((button, i) =>
        // tslint:disable-next-line:jsx-no-multiline-js
        renderFooterButton(button, prefixCls, i),
      )}
    </div>
  ) : null;

  let transName;
  let maskTransName;
  if (animated) {
    // tslint:disable-next-line:prefer-conditional-expression
    if (transparent) {
      transName = maskTransName = 'am-fade';
    } else {
      transName = maskTransName = 'am-slide-up';
    }
    if (popup) {
      transName =
        animationType === 'slide-up' ? 'am-slide-up' : 'am-slide-down';
      maskTransName = 'am-fade';
    }
  }

  const wrapCls = classnames(wrapClassName, {
    [`${prefixCls}-wrap-popup`]: popup,
  });

  const cls = classnames(className, {
    [`${prefixCls}-transparent`]: transparent,
    [`${prefixCls}-popup`]: popup,
    [`${prefixCls}-popup-${animationType}`]: popup && animationType,
    [`${prefixCls}-android`]: platform === 'android',
  });

  return (
    <Dialog
      {...restProps}
      prefixCls={prefixCls}
      className={cls}
      wrapClassName={wrapCls}
      transitionName={transitionName || transName}
      maskTransitionName={maskTransitionName || maskTransName}
      style={style}
      footer={footerDom}
    />
  );
};

export default Modal;
