import styles from './input.module.scss';
import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const Input = ({ label, ...rest }: IInput) => {
  return (
    <label className={styles.container}>
      <div className={styles.label}>{label}</div>
      <input className={styles.input} {...rest} />
    </label>
  );
};

export const TextArea = ({ label, ...rest }: ITextArea) => {
  return (
    <label className={styles.container}>
      <div className={styles.label}>{label}</div>
      <textarea
        className={`${styles.textarea} ${styles.field}`}
        placeholder=' '
        {...rest}
      />
    </label>
  );
};
