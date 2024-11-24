import classes from './index.module.css'
import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return (
            <nav className={classes.nav}>
                <h1 className={classes.title}>Logo</h1>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
    )
}
