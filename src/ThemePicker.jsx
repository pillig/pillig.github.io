import React, { Component } from 'react';
import { themes, DEFAULT_THEME, applyTheme } from './themes';

export default class ThemePicker extends Component {
  constructor(props) {
    super(props);
    const saved = localStorage.getItem('theme') || DEFAULT_THEME;
    this.state = { active: saved };
    applyTheme(themes[saved] || themes[DEFAULT_THEME]);
  }

  select(name) {
    applyTheme(themes[name]);
    localStorage.setItem('theme', name);
    this.setState({ active: name });
  }

  render() {
    return (
      <div className="theme-picker">
        {Object.entries(themes).map(([name, t]) => (
          <button
            key={name}
            className={`theme-swatch${this.state.active === name ? ' active' : ''}`}
            style={{ background: `linear-gradient(135deg, ${t.accent} 50%, ${t.highlight} 50%)` }}
            title={name}
            onClick={() => this.select(name)}
          />
        ))}
      </div>
    );
  }
}
