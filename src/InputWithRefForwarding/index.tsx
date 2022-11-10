import React, { forwardRef, ComponentPropsWithoutRef } from "react";
import styles from "./index.module.css";

type Props = ComponentPropsWithoutRef<"input">;

export const InputWithRefForwarding: React.FC<Props> = forwardRef<
  HTMLInputElement,
  Props
>(({ ...props }, ref) => {
  return <input {...props} ref={ref} className={styles.input} />;
});
