import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>E-Dalí</div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>ProductsList</Link>
                    </li>
                    <li>
                        <Link href={'/wishlist'}>WishList</Link>
                    </li>
                    <li>
                        <Link href={'/signin'}>Sign In</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;