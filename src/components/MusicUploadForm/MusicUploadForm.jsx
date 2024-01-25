// MusicUploadForm.js

import React, { useState } from 'react';
import s from './MusicUploadForm.module.scss';

const MusicUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    setIsUploading(true);

    // Simulate a mock progress indicator
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress === 100) {
          clearInterval(interval);
          setIsUploading(false);
        }
        return newProgress;
      });
    }, 500);

    setUploadProgress(0);
  };

  return (
    <div className={s.uploadFormContainer}>

      <h2>Upload Music</h2>

      <input
        type="file"
        accept=".mp3, .wav"
        onChange={handleFileChange}
        className={s.fileInput}
      />
      {selectedFile && <p className={s.selectedFile}>Selected File: {selectedFile.name}</p>}
      <button onClick={handleUpload} disabled={!selectedFile || isUploading} className={s.uploadButton}>
        Upload
        {isUploading && <div className={s.spinner}>&#8634;</div>}
      </button>
      {isUploading && (
        <div className={s.uploadProgressContainer}>
          <div
            className={s.uploadProgressBar}
            style={{ width: `${uploadProgress}%` }}
          />
        </div>
      )}
      {isUploading && <p className={s.uploadProgress}>Uploading: {uploadProgress}%</p>}
    </div>
  );
};

export default MusicUploadForm;
