'use client'
import React from "react";

function ToggleColor() {
    const [theme, setTheme] = React.useState('light');
    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    // initially set the theme and "listen" for changes to apply them to the HTML tag
    React.useEffect(() => {
      document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);
    return (
      <label className="swap swap-rotate">
        <input onClick={toggleTheme} type="checkbox" />
        <div className="swap-on text-xs ">DARKMODE</div>
        <div className="swap-off text-xs   ">LIGHTMODE</div>
      </label>
    );
  }

  export default ToggleColor