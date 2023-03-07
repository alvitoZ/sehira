import React, { useState } from "react";
import Map from "../atoms/Map";
import Button from "../atoms/ButtonOri";

type props = {
  TileLayer: any;
  Marker: any;
};

const Maps = () => {
  /* prettier-ignore */
  const DEFAULT_CENTER: number[] = [-6.209820, 106.708148];
  return (
    <div>
      <Map width="800" height="400" center={DEFAULT_CENTER} zoom={12}>
        {({ TileLayer, Marker }: props) => (
          <>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={DEFAULT_CENTER}></Marker>
          </>
        )}
      </Map>
    </div>
  );
};

export default Maps;
