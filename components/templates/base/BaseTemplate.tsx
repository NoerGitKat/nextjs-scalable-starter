import styles from "./BaseTemplate.module.scss";

export interface IBaseTemplateProps {
  sampleText: string;
}

const BaseTemplate: React.FC<IBaseTemplateProps> = ({ sampleText }) => {
  return <div className={styles.container}>{sampleText}</div>;
};

export default BaseTemplate;
