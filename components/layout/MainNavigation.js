import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>E-Dalí</div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>Products list</Link>
                    </li>
                    <li>
                        <Link href='/'>Wishlist</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;