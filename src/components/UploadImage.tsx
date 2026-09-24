"use client"; // Required in the App Router, where components render on the server by default.

import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";
type UploadImageProps = {
  onUpload: (url: string[]) => void;
};
function UploadImage({ onUpload }: UploadImageProps) {
  const handleUploadSuccess = (state: any) => {
    // Every upload returns a permanent file UUID and a ready-to-use CDN URL.
    const file = state.successEntries[0];
    if (file) {
      onUpload(file.cdnUrl);
    }
  };

  return (
    <FileUploaderRegular
      pubkey="6275f748ccdab035773e"
      sourceList="local, url, camera, dropbox"
      onCommonUploadSuccess={handleUploadSuccess}
      multipleMin={0}
      multipleMax={3}
    />
  );
}

export default UploadImage;
