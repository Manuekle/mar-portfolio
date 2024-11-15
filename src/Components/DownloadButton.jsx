// DownloadButton.js
import React from 'react';

function DownloadButton({ fileUrl, fileName = 'documento.docx' }) {
  return (
    <a
      href={fileUrl}
      download={fileName}
      className="underline text-md text-blue-600"
    >
      download file
    </a>
  );
}

export default DownloadButton;
