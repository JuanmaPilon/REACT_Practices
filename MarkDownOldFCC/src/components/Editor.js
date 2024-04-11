import React, { useState } from 'react';
import Preview from './Preview';


const Editor = () => {
    const [text, setText] = useState('');


const handleChange = (e) => {
    setText(e.target.value);
};

return (
    <div>
        <h2>Editor</h2>
        <textarea id="editor" value={text} onChange={handleChange}/>
        <Preview markdown={text}/>
    </div>
);
};

export default Editor;