import CardStat from "./CardStat";

const Card = () => {
  return (
    <div className="Card">
      <div className="Card__image"></div>
      <div className="Card__body">
        <h1 className="card-header">
          Get <span>insights</span> that help your business grow.
        </h1>
        <p className="card-description">
          Discover the benefits of data analytics and make better
          decisionsregarding revenue, customer experience and overall
          efficiency.
        </p>

        <div className="card-stats">
          <CardStat heading={"10k+"} paragraph={"Companies"} />
          <CardStat heading={"314"} paragraph={"Templates"} />
          <CardStat heading={"12M+"} paragraph={"Queries"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
