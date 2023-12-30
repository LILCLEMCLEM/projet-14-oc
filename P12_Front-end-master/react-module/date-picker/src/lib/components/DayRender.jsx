
function DayRender({month , year}) {
    let D = new Date();

    const day = [
        "lun",
        "mar",
        "mer",
        "jeu",
        "ven",
        "sam",
        "dim"
    ]

    console.log(D.getDay())
    let firstDay = new Date(year, month, 1);
    let lastDay = new Date(year, month + 1, 0);
    let lastMonth = new Date(year, month, 0)


    console.log("first day : " + firstDay ,"last day : " + lastDay, "last month : " + lastMonth)
    let index = firstDay.getDay()



    for(let i = 1; i <= lastDay.getDate(); i++) {
        if (index > 7) index = 1
        console.log(day[index - 1] , i);
        index++
    }


    return(
        <div>
            
        </div>
    )
}

export default DayRender