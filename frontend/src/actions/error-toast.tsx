"use client";

import toast from "react-hot-toast";

export default function ErrorToast() {
  return toast.error("Cannot submit empty invoice!", {
    duration: 3000,
  });
}
