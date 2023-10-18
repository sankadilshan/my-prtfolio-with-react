function LookingFor() {
    return (
      <div className="h-40 w-52 flex flex-col flex-start items-start shadow-2xl rounded-md m-3 shadow-purple">
        <div className="font-semibold w-full bg-dark-current bg-green shadow-2xl p-2">
          I'm Looking for
        </div>
        <div className="m-auto font-serif">
          <div className="w-22 flex flex-col justify-between">
          <span className="font-extrabold text-7xl">SSE</span>
          <span className="self-end -mr-2 -mt-2 text-base">position</span>
          </div>
        </div>
      </div>
    );
  }
  
  export default LookingFor;
  