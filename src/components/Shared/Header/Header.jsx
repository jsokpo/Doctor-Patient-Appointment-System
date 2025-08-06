import { useEffect, useState } from 'react';
import './index.css';
import useAuthCheck from '../../../redux/hooks/useAuthCheck';
import TopHeader from '../TopHeader/TopHeader';
import { Link, NavLink } from 'react-router-dom';
import img from '../../../images/logo.png';
import avatar from '../../../images/avatar.jpg';
import { Button, Popover, message } from 'antd';
import { loggedOut } from '../../../service/auth.service';
import { FaBars } from "react-icons/fa";
import { BiX } from "react-icons/bi";

const Header = () => {
    const { authChecked, data } = useAuthCheck();
    const [isLoggedIn, setIsLogged] = useState(false);
    const [show, setShow] = useState(true);
    const [mobileNavActive, setMobileNavActive] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleScroll = () => {
        const currentScroll = window.scrollY;
        setShow(currentScroll <= 50);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (authChecked) setIsLogged(true);
    }, [authChecked]);

    const hanldeSignOut = () => {
        loggedOut();
        message.success("Successfully Logged Out");
        setIsLogged(false);
    };

    const toggleMobileMenu = () => {
        setMobileNavActive(prev => !prev);
    };

    const toggleDropdown = (id) => {
        setActiveDropdown(prev => (prev === id ? null : id));
    };

    const content = (
        <div className='nav-popover'>
            <div className='my-2'>
                <h5 className='text-capitalize'>{data?.firstName + ' ' + data?.lastName}</h5>
                <p className='my-0'>{data?.email}</p>
                <Link to="/dashboard">Dashboard</Link>
            </div>
            <Button variant="outline-danger" className='w-100' size="sm" onClick={hanldeSignOut}>
                Logged Out
            </Button>
        </div >
    );

    const isMobile = mobileNavActive ? "navbar-mobile" : "";

    return (
        <>
            <div className={`navbar navbar-expand-lg navbar-light ${!show && "hideTopHeader"}`} expand="lg">
                <TopHeader />
            </div>
            <header id="header" className={`fixed-top ${!show && "stickyHeader"}`}>
                <div className="container d-flex align-items-center">
                    <Link to={'/'} className="logo me-auto">
                        <img src={img} alt="Logo" className="img-fluid" />
                    </Link>

                    <nav id="navbar" className={`navbar order-last order-lg-0 ${isMobile}`}>
                        <ul>
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link scrollto active" : ""}>Home</NavLink></li>
                            <li><NavLink to="/about" className={({ isActive }) => isActive ? "nav-link scrollto active" : ""}>About</NavLink></li>
                            <li><NavLink to={'/service'} className={({ isActive }) => isActive ? "nav-link scrollto active" : ""}>Service</NavLink></li>
                            <li><NavLink to="/doctors" className={({ isActive }) => isActive ? "nav-link scrollto active" : ""}>Doctors</NavLink></li>
                            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link scrollto active" : ""}>Contact</NavLink></li>
                            <li><NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link scrollto active" : ""}>Blog</NavLink></li>
                            {!isLoggedIn && <li><Link to="/login" className="nav-link scrollto">Login</Link></li>}
                        </ul>

                        {isLoggedIn && (
                            <div>
                                <Popover content={content}>
                                    <div className='profileImage'>
                                        <img src={data?.img || avatar} alt="Avatar" className="profileImage shadow img-fluid" />
                                    </div>
                                </Popover>
                            </div>
                        )}

                        {mobileNavActive
                            ? <BiX className='mobile-nav-toggle' onClick={toggleMobileMenu} />
                            : <FaBars className='mobile-nav-toggle' onClick={toggleMobileMenu} />
                        }
                    </nav>

                    <Link to="/appointment" className="appointment-btn scrollto">
                        <span className="d-none d-md-inline">Make an</span> Appointment
                    </Link>
                </div>
            </header>
        </>
    );
};

export default Header;


/*{/* Example Dropdown */}
                            <li className="dropdown">
                                <span
                                    className="nav-link dropdown-toggle"
                                    onClick={() => toggleDropdown("services")}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Services
                                </span>
                                <ul className={activeDropdown === "services" ? "dropdown-active" : ""}>
                                    <li><NavLink to="/service/consultation">Consultation</NavLink></li>
                                    <li><NavLink to="/service/surgery">Surgery</NavLink></li>
                                </ul>
                            </li>*/
