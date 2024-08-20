import React from "react";
import MultiImageDisplay from "./displayAsset";

const App = () => {
  const imagePaths = [
    "gs://svrwebsite-1e892.appspot.com/gallery/Screenshot 2024-08-17 at 8.52.04 AM.png",
    "gs://svrwebsite-1e892.appspot.com/gallery/svr_modifications.jpeg"
  ];

  return (
    <div>

    <h1>SVR Gallery Page</h1>
      <MultiImageDisplay imagePaths={imagePaths} />
    </div>
  );
};

export default App;
