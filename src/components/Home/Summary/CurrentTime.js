import moment from "moment";

function CurrentTime() {
  const time = moment();
  const hour = `${time.get("hour").toString().length === 1 ? '0':''}${time.get("hour").toString()}`;
  const minute = `${time.get("minute").toString().length === 1 ? '0':''}${time.get("minute").toString()}`;
  return (
    <div className="w-full h-full p-4 flex items-center font-smeibold text-center  text-7xl">
      <div className="w-28 h-28 shadow-2xl rounded-md">
        <div className="w-full h-8 bg-green"></div>
        <span className="relative -top-4">{hour}</span>
      </div>
      <div className="m-2">:</div>
      <div className="w-28 h-28 rounded-md shadow-2xl">
        <div className="w-full h-8 bg-green"></div>
        <span className="relative -top-4">{minute}</span>
      </div>
    </div>
  );
}

export default CurrentTime;
