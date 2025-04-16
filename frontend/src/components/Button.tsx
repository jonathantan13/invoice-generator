"use client";

import React from "react";

interface Button {
  label: string;
}

export default function Button({ label }: Button) {
  if (label === "submit") {
    return (
      <button
        type="submit"
        className="w-16 bg-blue-500 text-white hover:cursor-pointer"
      >
        Submit
      </button>
    );
  }

  if (label === "clear") {
    return (
      <button type="reset" className="w-16 border hover:cursor-pointer">
        Clear
      </button>
    );
  }
}
