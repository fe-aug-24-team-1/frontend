import style from './PersonCard.module.scss';
import { FaSquareGithub, FaLinkedin } from 'react-icons/fa6';

type Props = {
  imgSrc: string;
  fullName: string;
  githubLink: string;
  linkedinLink: string;
};

export const PersonCard: React.FC<Props> = ({
  imgSrc,
  fullName,
  githubLink,
  linkedinLink,
}) => {
  return (
    <div className={style.card}>
      <div className={style.card__imageWrapper}>
        <img
          src={imgSrc}
          alt={`${fullName} photo`}
          className={style.card__image}
        />
      </div>

      <div className={style.card__content}>
        <h3 className={style.card__name}>{fullName}</h3>

        <div className={style.card__social}>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className={style.card__link}>
            <FaSquareGithub size={24} />
            <span>GitHub</span>
          </a>

          <a
            href={linkedinLink}
            target="_blank"
            rel="noreferrer"
            className={style.card__link}>
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};
