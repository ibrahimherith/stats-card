const CardStat = ({ heading, paragraph }) => {
  return (
    <div className="stat">
      <h2 className="stat-header">{heading}</h2>
      <p className="stat-description">{paragraph}</p>
    </div>
  );
};

export default CardStat;
