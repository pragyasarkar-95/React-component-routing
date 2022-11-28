import React from "react";
import { useParams } from "react-router-dom";

export default function CafeComponent() {
  const { id } = useParams();
  return (
    <div>
      <h1>I am Cafe</h1>
      <h3>{id}</h3>
    </div>
  );
}
