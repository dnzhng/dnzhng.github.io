import useDarkMode from "../hooks/useDarkMode";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const icon = darkMode ? 'sun' : 'moon'

  return (
    <button className="dark-mode-toggle" onClick={ toggleDarkMode }>
      <i aria-hidden className={`fas fa-${icon}`}></i>
    </button>
  );
};

export default DarkModeToggle;
