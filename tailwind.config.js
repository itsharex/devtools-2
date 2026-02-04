/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // 使用系统自带的高质量字体栈
        sans: [
          // macOS 系统字体
          '-apple-system',
          'BlinkMacSystemFont',
          // Windows 系统字体
          '"Segoe UI"',
          // 旧版 Windows
          '"Microsoft YaHei"',
          'sans-serif',
          // 备用字体
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(', '),
        // 代码字体栈
        mono: [
          // macOS 代码字体
          '"SF Mono"',
          'Monaco',
          // Windows 代码字体
          '"Cascadia Code"',
          '"Consolas"',
          // Linux 代码字体
          '"Ubuntu Mono"',
          // 备用等宽字体
          'monospace',
        ].join(', '),
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
    },
  },
  plugins: [],
}