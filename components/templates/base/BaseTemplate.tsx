import styles from "./BaseTemplate.module.scss";

export interface IBaseTemplateProps {
  sampleText: string;
}

const BaseTemplate: React.FC<IBaseTemplateProps> = ({ sampleText }) => {
  return <section className={styles.container}>{sampleText}</section>;
};

export default BaseTemplate;
