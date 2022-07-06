import React from "react";
import { Card } from "../components/compound-components/Card";
import data from "../components/compound-components/Card/card-data.json";
import { ICard } from "../types/Card";

type Props = {};

const CompoundComponentsPage = (props: Props) => {
  return (
    <>
      <div>
        <h1>Compound component version 1</h1>
        <div style={{ display: "flex" }}>
          {data.map((card: ICard) => (
            <Card>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Price>
                  {card.price.currency === "dollar" ? "$" : "Rs."}
                  {card.price.value}
                </Card.Price>
                <Card.Button>Learn React</Card.Button>
                <Card.CatchLine>{card.catchLine}</Card.CatchLine>
                <Card.FeatureList>
                  {card.features.map((feature: string) => (
                    <Card.Feature>{feature}</Card.Feature>
                  ))}
                </Card.FeatureList>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <h1>Compound component version 2</h1>
        <div style={{ display: "flex" }}>
          {data.map((card: ICard) => (
            <Card>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Price>
                  {card.price.currency === "dollar" ? "$" : "Rs."}
                  {card.price.value}
                </Card.Price>
                <Card.CatchLine>{card.catchLine}</Card.CatchLine>
                <Card.FeatureList>
                  {card.features.map((feature: string) => (
                    <Card.Feature>{feature}</Card.Feature>
                  ))}
                </Card.FeatureList>
                <h4>INCLUDES</h4>
                <Card.TopicList>
                  {card.topics.map((topic: string) => (
                    <Card.Topic>{topic}</Card.Topic>
                  ))}
                </Card.TopicList>
                <Card.Button>Learn React</Card.Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default CompoundComponentsPage;
