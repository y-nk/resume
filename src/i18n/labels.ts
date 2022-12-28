export const labels = {
  contact: 'Contact',
  experiences: 'Experiences',
  about: 'tldr;',
  skillsets: 'Skillsets',
  languages: 'Languages',

  years_old: 'yo',
  living: 'currently in',
  now: 'now',
  summary: 'Summary',
  highlight: 'Highlight',

  human: 'Human',
  programming: 'Programming',
  machine: 'Computers',

  availability: 'Availability',
  technicity: 'Technicity',
  anticipation: 'Anticipation',
  reactivity: 'Reactivity',

  javascript: 'JavaScript',
  htmlcss: 'HTML/CSS',
  actionscript: 'ActionScript',
  php: 'PHP',
  cs: 'C#',
  python: 'Python',
  java: 'Java',
  ruby: 'Ruby',
  bash: 'Bash',

  linux: 'Linux (system)',
  vms: 'Virtualization',
  cloud: 'Cloud Computing',
  automation: 'Automation',
  adobe: 'Adobe CC',
  sketch: 'Sketch',
  figma: 'Figma',

  english: 'English',
  french: 'Français',
  japanese: '日本語'
}

export type Label = keyof typeof labels

export function isLabel(label: string): label is Label {
  return label in labels
}

export function t(label:string, defaultValue = label) {
  return isLabel(label) ? labels[label] : defaultValue
}

export function cap(str: string) {
  return `${str[0].toUpperCase()}${str.slice(1)}`
}
