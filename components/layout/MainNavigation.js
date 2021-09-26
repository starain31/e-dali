import classes from './MainNavigation.module.css';
import Link from 'next/link';
import cookie from "js-cookie";
import {useRouter} from "next/router";


function MainNavigation() {
    const router = useRouter();

    async function signout() {
        await fetch('/api/signout').then(function () {
            cookie.remove('email');
            router.push('/signin');
        }).catch(function (e) {
            console.error(e);
        })
    }

    return (
        <header className={classes.header}>
            <Link className={classes.logo} href='/'>E-Dalí</Link>

            <div><b>{cookie.get('email')}</b></div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>ProductsList</Link>
                    </li>
                    <li>
                        <Link href={'/wishlist'}>WishList</Link>
                    </li>
                    {
                        !!cookie.get('email') ||
                        <li>
                            <Link href={'/signup'}>Sign Up</Link>
                        </li>
                    }
                    {
                        !!cookie.get('email') ||
                        <li>
                            <Link href={'/signin'}>Sign In</Link>
                        </li>
                    }
                    {
                        cookie.get('email') &&
                        <li onClick={signout}>
                            <Link href={`/signin`}>Sign Out</Link>
                        </li>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;