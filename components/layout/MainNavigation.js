import classes from './MainNavigation.module.css';
import Link from 'next/link';
import cookie from "js-cookie";
import {useRouter} from "next/router";



function MainNavigation() {
    const router = useRouter();

    async function signout() {
        await fetch('/api/signout').then(function () {
            cookie.remove('username');
            router.push('/signin');
        }).catch(function (e) {
            console.error(e);
        })
    }

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
                    {
                        !!cookie.get('username') ||
                        <li>
                            <Link href={'/signup'}>Sign Up</Link>
                        </li>
                    }
                    {
                        !!cookie.get('username') ||
                        <li>
                            <Link href={'/signin'}>Sign In</Link>
                        </li>
                    }
                    {
                        <li>
                            <b>{cookie.get('username')}</b>
                        </li>
                    }
                    {
                        cookie.get('username') &&
                        <li>
                            <button onClick={signout}>Sign Out</button>
                        </li>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;