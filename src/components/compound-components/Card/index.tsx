import React, { HTMLAttributes, ReactNode } from "react";
import {
  CardBody,
  CardButton,
  CardCatchLine,
  CardContainer,
  CardFeature,
  CardFeatureList,
  CardPrice,
  CardTitle,
  CardTopic,
  CardTopicList,
} from "./Card.styled";

interface TEmotionComponent extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

export function Card({ children, ...restProps }: TEmotionComponent) {
  return <CardContainer {...restProps}>{children}</CardContainer>;
}

Card.Body = ({ children, ...restProps }: TEmotionComponent) => {
  return <CardBody {...restProps}>{children}</CardBody>;
};

Card.Title = ({ children, ...restProps }: TEmotionComponent) => {
  return <CardTitle {...restProps}>{children}</CardTitle>;
};

Card.Button = ({ children, ...restProps }: TEmotionComponent) => {
  return <CardButton {...restProps}>{children}</CardButton>;
};

Card.Price = ({ children, ...restProps }: TEmotionComponent) => {
  return <CardPrice {...restProps}>{children}</CardPrice>;
};

Card.CatchLine = ({ children, ...restProps }: TEmotionComponent) => {
  return <CardCatchLine {...restProps}>{children}</CardCatchLine>;
};

Card.FeatureList = ({ children, ...restProps }: TEmotionComponent) => {
  return <CardFeatureList {...restProps}>{children}</CardFeatureList>;
};

Card.Feature = ({ children, ...restProps }: TEmotionComponent) => {
  return <CardFeature {...restProps}>{children}</CardFeature>;
};

Card.TopicList = ({ children, ...restProps }: TEmotionComponent) => {
  return <CardTopicList {...restProps}>{children}</CardTopicList>;
};

Card.Topic = ({ children, ...restProps }: TEmotionComponent) => {
  return <CardTopic {...restProps}>{children}</CardTopic>;
};

// https://epicreact.dev/
// https://www.educative.io/unlimited
