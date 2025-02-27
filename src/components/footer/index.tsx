import reactLogo from '@/assets/react.svg';
import viteLogo from '@/assets/vite.svg';

export function Footer() {
    return <footer className='flex justify-center gap-2 py-2'>
        <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    </footer>
}