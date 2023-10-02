import React from 'react';

class FileHandler extends React.Component {
  handleDownloadClick = () => {
    // Create a URL for the file located in the public directory.
    const fileUrl = 'public/portfolio/files/test.zip';
    console.log('Button clicked!');
    // Simulate a file download by opening a new tab/window with a link to the specified file URL.
    window.open(fileUrl, '_blank');
  };

  handleOpenDefaultFileClick = () => {
    // Create a URL for the default file located in the public directory.
    const defaultFileUrl = 'public/portfolio/files/default.html';

    // Simulate opening the default file by opening a new tab/window with a link to the specified default file URL.
    window.open(defaultFileUrl, '_blank');
  };

  render() {
    return (
      <div>
        <button onClick={this.handleDownloadClick}>Download Directory</button>
        <button onClick={this.handleOpenDefaultFileClick}>Open Default File</button>
      </div>
    );
  }
}

export default FileHandler;
