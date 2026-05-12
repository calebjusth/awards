/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        canvas: 'var(--color-canvas)',
        primary: 'var(--color-primary)',
        muted: 'var(--color-muted)',
        ink: 'var(--color-ink)',
      },
      fontFamily: {
        title: 'var(--font-title)',
        am: 'var(--font-am)',
        body: 'var(--font-body)',
      },
      fontSize: {
        h1: 'var(--text-h1)',
        h2: 'var(--text-h2)',
        h3: 'var(--text-h3)',
        h4: 'var(--text-h4)',
        h5: 'var(--text-h5)',
        h6: 'var(--text-h6)',
        body: 'var(--text-body)',
        caption: 'var(--text-caption)',
      },
      borderRadius: {
        yet: 'var(--radius-yet)',
      },
      fontWeight: {
        body: 'var(--font-weight-body)',
        title: 'var(--font-weight-title)',
      },
    },
  },
};
