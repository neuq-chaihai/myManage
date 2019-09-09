import React from 'react';
import './index.less';

const a = [
    {
        title: '标题一',
        content: '标题一的内容'
    },
    {
        title: '标题二',
        content: '标题二的内容'
    },
    {
        title: '标题三',
        content: '标题三的内容'
    },
    {
        title: '标题四',
        content: '标题四的内容'
    }
]

function Test () {
    return (
        <div>
            {
                a.map(item => (
                    <div className='test-wrapper'>
                        <h2>{item.title}</h2>
                        <div>{item.content}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Test;
