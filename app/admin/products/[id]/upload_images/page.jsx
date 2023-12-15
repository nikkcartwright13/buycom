import React from "react";
import UploadImages from "@/components/admin/UploadImages";



const UpImage = async ({ params }) => {
 

  return <UploadImages id={params.id} />;
};

export default UpImage;