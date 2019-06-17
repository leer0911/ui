import * as React from 'react';
import { BriefProps as BriefBasePropsType } from './PropsType';

export interface BriefProps extends BriefBasePropsType {
  prefixCls?: string;
  className?: string;
  role?: string;
}

const Brief: React.SFC<BriefProps> = ({ style, children }) => {
  return (
    <div className="am-list-brief" style={style}>
      {children}
    </div>
  );
};

export default Brief;
