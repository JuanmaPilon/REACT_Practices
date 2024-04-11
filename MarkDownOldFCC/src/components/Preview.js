import React from 'react';
import { marked } from 'marked';

const Preview = ({ markdown }) => {
    const convertedMarkdown = marked(markdown);
    
    return (
      <div>
        <h2>Preview</h2>
        <div id="preview" dangerouslySetInnerHTML={{ __html: convertedMarkdown }} />
      </div>
    );
  };
  
  export default Preview;