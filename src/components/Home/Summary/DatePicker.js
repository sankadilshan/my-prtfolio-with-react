import moment from "moment";

function DatePicker() {
   const date = moment();
  return (
    <div className="block rounded-t overflow-hidden bg-white shadow-2xl text-center w-32 m-4">
      <div className="bg-green font-bold py-1">{date.format('MMM')}</div>
      <div className="pt-1">
        <span className="text-4xl font-bold">{date.get('date')}</span>
      </div>
      <div className="pt-2 px-2 rounded-b flex justify-between">
        <span className="text-xs font-bold">{date.format('ddd')}</span>
        <span className="text-xs font-bold">{date.get('year')}</span>
      </div>
    </div>
  );
}

export default DatePicker;
