export const themes = {
  'Forest & Brass': {
    deepest: '#080E0B',
    bg:      '#0D1410',
    panel1:  '#1A2420',
    panel2:  '#212E29',
    accent:  '#C9A84C',  // brass — borders, structure
    highlight: '#7FA880', // sage — numbers, hovers
    text:    '#E8E4D8',
  },
  'Hunter & Crimson': {
    deepest: '#060D05',
    bg:      '#0A1208',
    panel1:  '#182015',
    panel2:  '#1F2D1C',
    accent:  '#BE2020',  // crimson — borders, structure
    highlight: '#C8A030', // antique gold — numbers, hovers
    text:    '#E8EDE6',
  },
  'Ember': {
    deepest: '#0A0A08',
    bg:      '#0F0F0D',
    panel1:  '#1E1C18',
    panel2:  '#262320',
    accent:  '#D4520A',  // burnt orange — borders, structure
    highlight: '#E8A028', // amber — numbers, hovers
    text:    '#EDEAE4',
  },
  'Admiralty': {
    deepest: '#050810',
    bg:      '#080C14',
    panel1:  '#111828',
    panel2:  '#171F32',
    accent:  '#D4A832',  // nautical gold — borders, structure
    highlight: '#6EB4D4', // steel blue — numbers, hovers
    text:    '#E8E4D8',
  },
  'Equatorial': {
    deepest: '#060C0C',
    bg:      '#0A1414',
    panel1:  '#142020',
    panel2:  '#1A2828',
    accent:  '#2A9D8F',  // teal — borders, structure
    highlight: '#E9C46A', // warm sand — numbers, hovers
    text:    '#E4EDEC',
  },
  'Foundry': {
    deepest: '#0A0808',
    bg:      '#100E0C',
    panel1:  '#1E1A16',
    panel2:  '#262018',
    accent:  '#B87333',  // copper — borders, structure
    highlight: '#8B2020', // oxide red — numbers, hovers
    text:    '#EDE8E0',
  },
  'Dusk': {
    deepest: '#0A0C10',
    bg:      '#101218',
    panel1:  '#1A1E28',
    panel2:  '#202430',
    accent:  '#C47C8A',  // dusty rose — borders, structure
    highlight: '#9B8FB4', // soft lavender — numbers, hovers
    text:    '#EDE8EC',
  },
  'Nocturne': {
    deepest: '#0C080E',
    bg:      '#130E16',
    panel1:  '#1E1624',
    panel2:  '#271C2E',
    accent:  '#D4C090',  // champagne — borders, structure
    highlight: '#A87CB4', // orchid — numbers, hovers
    text:    '#EDE8E4',
  },
};

export const DEFAULT_THEME = 'Ember';

export function applyTheme(theme) {
  const r = document.documentElement;
  r.style.setProperty('--color-deepest',   theme.deepest);
  r.style.setProperty('--color-bg',        theme.bg);
  r.style.setProperty('--color-panel-1',   theme.panel1);
  r.style.setProperty('--color-panel-2',   theme.panel2);
  r.style.setProperty('--color-accent',    theme.accent);
  r.style.setProperty('--color-highlight', theme.highlight);
  r.style.setProperty('--color-text',      theme.text);
}
