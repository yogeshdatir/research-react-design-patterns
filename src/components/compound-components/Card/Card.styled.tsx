import styled from "@emotion/styled";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: 250px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`;

export const CardTitle = styled.h3`
  font-size: 2.25rem;
  font-weight: bold;
  margin: 0;
`;

export const CardPrice = styled.span`
  font-size: 4.5rem;
  font-weight: 800;
`;

export const CardCatchLine = styled.p`
  font-size: 1.25rem;
  padding-bottom: 1.5rem;
  padding-top: 0.5rem;
`;

export const CardButton = styled.button`
  font-size: 1.125rem;
`;

export const CardFeatureList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CardFeature = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  line-height: 1.5rem;
`;

export const CardTopicList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CardTopic = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-sizing: border-box;
`;
