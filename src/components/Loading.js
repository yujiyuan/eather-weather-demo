import React from 'react';


const Loading = ({ status = true }) => {
    return <div className={`loading ${'isShow' && status}`}>
        <div className="overlay"></div>
        <div className="loading-icon">
            <i className="fa fa-cog fa-spin"></i>
            <span>加载中。。。</span>
        </div>
      </div>
}
export default Loading