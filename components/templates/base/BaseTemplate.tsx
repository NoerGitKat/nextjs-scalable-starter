import "./BaseTemplate.module.scss";

export interface IBaseTemplateProps {
  sampleText: string;
}

const BaseTemplate: React.FC<IBaseTemplateProps> = ({ sampleText }) => {
  return <div className="container">{sampleText}</div>;
};

export default BaseTemplate;
