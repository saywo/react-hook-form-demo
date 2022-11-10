import React, { ComponentProps } from "react";
import styles from "./index.module.css";

type Props = ComponentProps<"input">;

export const InputWithoutRefForwarding: React.FC<Props> = ({ ...props }) => {
  return <input {...props} className={styles.input} />;
};
