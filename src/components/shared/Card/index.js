function SummaryCard() {
    const styles=`w-green h-40 w-80 flex flex-col flex-start items-start shadow-2xl p-4 rounded-md m-3`
    return ( 
        <div className={styles}>
            <div className="font-semibold w-full bg-dark-current">
                Experince
            </div>
            <div>
                <span>content summary</span>
            </div>
        </div>
     );
}

export default SummaryCard;