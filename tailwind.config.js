module.exports = {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        system: ['system-ui']
      },
      backgroundImage: {
        'switch-bg':
          'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%22-4 -4 8 8%22%3E%3Ccircle r=%223%22 fill=%22%23fff%22/%3E%3C/svg%3E")',
        'checkbox-bg':
          'url("data:image/svg+xml,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22%3e%3cpath fill=%22none%22 stroke=%22%23fff%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%223%22 d=%22M6 10l3 3l6-6%22/%3e%3c/svg%3e")',
        'select-bg':
          'url("data:image/svg+xml,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22%3e%3cpath fill=%22none%22 stroke=%22%23343a40%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M2 5l6 6 6-6%22/%3e%3c/svg%3e")',
        'radio-bg':
          'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%22-4 -4 8 8%22%3E%3Ccircle r=%222%22 fill=%22%23fff%22/%3E%3C/svg%3E")'
      },
      backgroundPosition: {
        search: '95% center',
        18: 'center 18px'
      },
      backgroundSize: {
        0: '0',
        full: '100%'
      },
      colors: {
        blue: '#2359c4',
        green: '#01b56e',
        yellow: '#ffb43e',
        red: '#da3539'
      }
    }
  },
  plugins: []
}
