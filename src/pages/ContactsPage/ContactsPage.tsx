import { useTranslation } from 'react-i18next';
import style from './ContactsPage.module.scss';
import { PersonCard } from '@/components/PersonCard';

const contacts = [
  {
    imgSrc: 'https://avatars.githubusercontent.com/u/120860193?v=4',
    fullName: 'Dmytro Kononenko',
    githubLink: 'https://github.com/EustasTheMonk',
    linkedinLink: 'https://www.linkedin.com/in/dmitry-k-817565339/',
  },
  {
    imgSrc: 'https://avatars.githubusercontent.com/u/98977935?v=4',
    fullName: 'Maksym Linnyk',
    githubLink: 'https://github.com/Sukulynt',
    linkedinLink: 'https://www.linkedin.com/in/maksym-linnyk-902108230/',
  },
  {
    imgSrc: 'https://avatars.githubusercontent.com/u/174612235?v=4',
    fullName: 'Mariia Bulchak',
    githubLink: 'https://github.com/mbulchak',
    linkedinLink: 'https://www.linkedin.com/in/mariia-bulchak-0b52a633a/',
  },
  {
    imgSrc: 'https://avatars.githubusercontent.com/u/86889634?v=4',
    fullName: 'Rostyslav Sharuiev',
    githubLink: 'https://github.com/RostyslavSharuiev',
    linkedinLink: 'https://www.linkedin.com/in/463a06217/',
  },
  {
    imgSrc: 'https://avatars.githubusercontent.com/u/135324676?v=4',
    fullName: 'Stanislav Hohulia',
    githubLink: 'https://github.com/Sholudyvyy',
    linkedinLink: 'https://www.linkedin.com/in/stanislav-hohulia/',
  },
];

export const ContactsPage = () => {
  const { t } = useTranslation();

  return (
    <div className={style.ContactsPage}>
      <h1 className={style.ContactsPage__title}>{t('contactsPage.title')}</h1>

      <div className={style.ContactsPage__content}>
        {contacts.map((contact) => (
          <PersonCard
            imgSrc={contact.imgSrc}
            fullName={contact.fullName}
            githubLink={contact.githubLink}
            linkedinLink={contact.linkedinLink}
          />
        ))}
      </div>
    </div>
  );
};
