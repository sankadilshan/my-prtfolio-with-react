import Icon from "../../../shared/Icon";

function DownloadMyCV() {
  return (
    <div className="h-40 w-96 flex flex-col flex-start items-start shadow-2xl rounded-md m-3">
      <div className="font-semibold w-full bg-dark-current bg-yellow shadow-2xl p-2">
        Download My CV
      </div>
      <div className="m-auto font-serif">
        <div className="w-22 flex flex-col justify-between">
          <div>
            <Icon
              name="downloadCV"
              colorClass="green"
              size={40}
              paths={[
                "M23,24H1c-.55,0-1-.45-1-1s.45-1,1-1H23c.55,0,1,.45,1,1s-.45,1-1,1Zm-8.23-5.14s6.35-6.75,6.35-6.75c.87-.87,1.12-2.11,.65-3.24-.47-1.13-1.52-1.84-2.75-1.85h-2.07s-.03-3.05-.03-3.05c0-2.19-1.78-3.97-3.97-3.97h-1.98c-2.19,0-3.97,1.78-3.97,3.98v3.02s-2.05,0-2.05,0c-1.23,0-2.28,.71-2.75,1.85-.47,1.13-.22,2.38,.63,3.22l6.33,6.8c.77,.77,1.79,1.16,2.81,1.16s2.03-.39,2.81-1.16Zm-6.77-9.86c.27,0,.52-.11,.71-.29,.19-.19,.29-.44,.29-.71V3.97c0-1.09,.88-1.97,1.97-1.97h1.98c1.09,0,1.97,.89,1.97,1.98l.03,4.05c0,.55,.45,.99,1,.99h3.05c.61,0,.85,.47,.9,.61,.06,.14,.22,.64-.24,1.09l-6.33,6.73c-.77,.76-2.01,.75-2.75,.01l-6.33-6.8c-.43-.43-.27-.93-.21-1.07,.06-.14,.3-.61,.9-.61h3.06Z",
              ]}
            />
          </div>
          <div>
          <button type="button" className="text-white bg-green-700 hover:bg-green focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadMyCV;
