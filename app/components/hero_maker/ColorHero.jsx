const SolidColorHero = ({ children, color, height }) => {
    return (
        <div style={{ position: 'relative', width: '100%', height: `${height}vh`, backgroundColor: color }}>
            <div style={{ position: 'absolute', zIndex: 1 }}>
                {children}
            </div>
        </div>
    )
};

export default SolidColorHero;
