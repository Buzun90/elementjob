const colors = require('tailwindcss/colors');

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			...colors,
			primary: withOpacity("--color-text-base"),
      accent: withOpacity("--color-accent"),
      inverted: withOpacity("--color-fill"),
		},
    backgroundColor: {
      ...colors,
      primary: withOpacity("--color-fill"),
      accent: withOpacity("--color-accent"),
      inverted: withOpacity("--color-text-base"),
      card: withOpacity("--color-card"),
      "card-muted": withOpacity("--color-card-muted"),
    },
		extend: {},
	},
	plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
