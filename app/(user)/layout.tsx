import './globals.css'
import type { Metadata } from 'next'
import Header from '@/app/_components/Header'

const keywords = [
  'React.js',
  'React components',
  'React hooks',
  'React state management',
  'React props',
  'React router',
  'React context',
  'Next.js',
  'Server-side rendering (SSR) with Next.js',
  'Static site generation (SSG) with Next.js',
  'Next.js routing',
  'Next.js API routes',
  'Next.js data fetching',
  'Context API',
  'React Context API',
  'Context API in React',
  'State management with Context API',
  'useContext and useReducer',
  'Global state in React',
  'Zustand',
  'Zustand state management',
  'Zustand vs. Redux',
  'Lightweight state management',
  'Zustand hooks',
  'Redux',
  'Redux state management',
  'Redux actions and reducers',
  'Redux store',
  'Redux middleware',
  'Redux architecture',
  'Redux Toolkit',
  'Redux Toolkit introduction',
  'Redux Toolkit setup',
  'Simplified Redux with Redux Toolkit',
  'createSlice in Redux Toolkit',
  'Redux Toolkit vs. plain Redux',
  'React.js best practices',
  'React.js performance optimization',
  'Component reusability',
  'Component lifecycle',
  'React patterns and techniques',
  'JavaScript in React',
  'ES6/ES7 syntax in React',
  'Promises and async/await in React',
  'Destructuring in React',
  'Front-end development',
  'Web development techniques',
  'UI/UX design',
  'Web accessibility',
  'Responsive web design',
  'Step-by-step tutorial',
  'Guide',
  'Troubleshooting',
  'Common errors',
  'Solutions',
  'Front-end technologies',
  'Axios',
  'Material-UI',
  'Development',
  'Fullstack Development',
  'Query Optimization',
  'NoSQL'
];


export const metadata: Metadata = {
  title: 'DForDev',
  description: 'Generated by DFORDEV',
  authors: [{ name: 'Digvijay Edake', url: 'blog-dse.vercel.app' }],
  keywords: keywords
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-white text-xl'>
        <Header />
        {children}
      </body>
    </html>
  )
}
