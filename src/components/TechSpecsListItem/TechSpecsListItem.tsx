import styles from './TechSpecsListItem.module.scss';

type Props = {
  name: string;
  value: string | string[];
  className?: string;
};

export const TechSpecsListItem: React.FC<Props> = ({
  name,
  value,
  className,
  ...props
}) => {
  if (!value) {
    return;
  }

  return (
    <li
      className={`${styles['tech-spec']} ${className}`}
      {...props}>
      <span className={styles['tech-spec__name']}>{name}</span>
      <span className={styles['tech-spec__value']}>
        {Array.isArray(value) ? value.join(', ') : value}
      </span>
    </li>
  );
};
