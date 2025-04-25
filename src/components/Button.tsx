"use client";

import { ButtonProps } from "@/interfaces";
import React from "react";

export default function Button({ onClick, label }: ButtonProps) {
  if (label === "Submit") {
    return (
      <button
        onClick={onClick}
        className="w-16 bg-blue-500 text-white hover:cursor-pointer"
        type="button"
      >
        {label}
      </button>
    );
  }

  if (label === "Clear") {
    return (
      <button
        onClick={onClick}
        className="w-16 border hover:cursor-pointer"
        type="button"
      >
        {label}
      </button>
    );
  }
}
