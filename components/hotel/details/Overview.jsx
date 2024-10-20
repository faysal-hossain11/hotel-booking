const Overview = ({ overview }) => {

  console.log("this the overview", overview);
  
  return (
    <section>
      <div className="container py-8 mx-auto">
        <h2 className="font-bold text-xl my-4">Overview</h2>
        <p className="text-gray-600 leading-8 whitespace-pre-wrap">
          {overview}
        </p>
      </div>
    </section>
  );
};

export default Overview;
