import styles from './input.module.scss';
import { InputHTMLAttributes } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
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
