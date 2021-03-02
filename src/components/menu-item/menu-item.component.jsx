import './menu-item.styles.scss'

const MenuItem = ({title, subtitle="SHOP NOW", imageUrl, size}) => {
    return (
        <div className={`${size} menu-item`}>
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}}></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">{subtitle}</span>
            </div>
        </div>
    );
}

export default MenuItem;