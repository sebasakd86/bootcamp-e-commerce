import './menu-item.styles.scss'

import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, subtitle = "SHOP NOW", imageUrl, size, linkUrl, match, history }) => {
    
    const handleClick = (e) => history.push(`${match.url}${linkUrl}`);

    return (
        <div className={`${size} menu-item`} onClick={handleClick}>
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">{subtitle}</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem); //Like this we have access to history