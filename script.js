// to identify dark/light theme
 if (window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark');
    }