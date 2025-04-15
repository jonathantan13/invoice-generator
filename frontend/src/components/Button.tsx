"use client";

import React from "react";

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
}

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
