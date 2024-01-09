import React, {useState} from 'react'

function CopyText(props) {

    const [copyStatus, setCopyStatus] = useState('Copy');

    function copyToClipboard() {
        if (copyStatus === 'Copy'){
            navigator.clipboard.writeText(props.text);
            setCopyStatus('Copied!');
            setTimeout(() => {
                setCopyStatus('Copy');
            }, 300);
        }
    }   
  return (
    <button 
        className="copy"
        onClick={copyToClipboard}
    >{copyStatus}</button>
  )
}

export default CopyText