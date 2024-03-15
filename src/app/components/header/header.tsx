import variables from './header.module.scss';

export const Header = () => {
  return (
    <header className={variables.header}>
      <span className={variables.header__logo}>Хобл: мифы и реальность</span>
    </header>
  );
};
