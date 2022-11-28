import React from "react";
import { useLocation, useParams } from "react-router-dom";
import BookComponent from "./Books";
import CafeComponent from "./Cafe";

export default function RestaurantComponent() {
  const { id } = useParams();
  const search = useLocation().search;
  const name = new URLSearchParams(search).get('name');
  console.log(id);
  return (
    <div>
      <h1>I am Restaurant</h1>
      <h3>{id}</h3>
      {/* {type==='book' && <BookComponent />}
      {type==='cafe' && <CafeComponent />} */}
    </div>
  );
}
