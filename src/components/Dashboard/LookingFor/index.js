function LookingFor() {
    return (
      <div className="h-32 w-64 flex flex-col flex-start items-start shadow-2xl rounded-md shadow-white border border-white">
        <div className="font-semibold w-full bg-transparent hover:shadow-lg p-2 border border-white">
          I'm Looking for
        </div>
        <div className="m-auto font-serif">
          <div className="w-22 flex flex-col justify-between">
          <span className="font-extrabold text-5xl">SSE</span>
          <span className="self-end -mr-2 -mt-2 text-base">position</span>
          </div>
        </div>
      </div>
    );
  }
  
  export default LookingFor;
  