import React from "react";
import { Card } from "../Card";
import { homesMocks } from "../../mocks/homesMocks";

export const ContentBox = () => (
    <ul className="homes__row">
        { homesMocks.slice(0,4).map(data =>(
            <Card key={data.id}
                  name={data.name}
                  city={data.city}
                  country={data.country}
                  imageUrl={data.imageUrl}
            />
        ))}
    </ul>
)
