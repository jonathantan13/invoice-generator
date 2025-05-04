"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function FormUploadLogo() {
  const [image, setImage] = useState<string | null>(null);

  function showImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      if (e.target) setImage(e.target.result as string);
    };
    reader.readAsDataURL(file);
  }

  return (
    <>
      <div className="relative col-start-4 h-56 text-center text-2xl">
        {image ? (
          <>
            <Image src={image} alt="user's profile picture" fill />
            <button
              onClick={() => setImage(null)}
              className="absolute top-0 right-0"
            >
              ❌
            </button>
          </>
        ) : (
          <label htmlFor="upload-img">Add your logo</label>
        )}
      </div>
      <input
        id="upload-img"
        type="file"
        name="logo"
        accept="image/*"
        className="hidden"
        onChange={showImage}
      />
    </>
  );
}
