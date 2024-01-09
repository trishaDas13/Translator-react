import React, {useState} from 'react'

function CopyText(props) {

    const [copyStatus, setCopyStatus] = useState('Copy');

    function copyToClipboard() {
        if (copyStatus === 'Copy'){
            navigator.clipboard.writeText(props.text);
            setCopyStatus('Copied!');
            setTimeout(() => {
                setCopyStatus('Copy');
            }, 100);
        }
    }   
  return (
    <button 
        onClick={copyToClipboard}
    >{copyStatus}</button>
  )
}

export default CopyText