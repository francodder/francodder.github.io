window.onload = function() {
    const data = loadData()
    const values = getValues(data)
    setValues(values)
    
}

const loadData = () => {
    
    if(localStorage.getItem('counter-data')) {
        const stringData = localStorage.getItem('counter-data')
        data = JSON.parse(stringData)
        
        data.viewedTimes = data.viewedTimes + 1
 
        localStorage.setItem("counter-data", JSON.stringify(data))

        return data
        
    } else {

        const data = {
            viewed: true,
            viewedTimes: 1
        }
        localStorage.setItem("counter-data", JSON.stringify(data))
    }
}

const getValues = ({viewed, viewedTimes}) => {

    const initialViews = 100
    let viewTimes = 0

    if(!data) {
        // Iniciación de variables en coso de que no haya cookies
        
    }

    const getBaseViews = () => {
        // Tiempo total en milisegundos
        const totalMs = Date.now()
                        // Días * Horas * Minutos * Segundos * Milisegundos
        const correctionMs = (19.029 * 24 * 60 * 60 * 1000)
        console.log(totalMs - correctionMs) 
        const hours = (totalMs - correctionMs) / 60 / 60
        // console.log(hours)
    }

    getBaseViews()

    const getViewsString = () => {
        const views = initialViews + 114 + viewedTimes
        if(views <= 10) return '000' + views
        else if(views <= 100) return '00' + views
        else if(views <= 1000) return '0' + views
        else return views
    }

    const viewString = getViewsString()

    const viewDigits = []

    for (let i = 0; i < viewString.length; i++) {
        viewDigits.push(viewString[i]) 
        
    }

    return {viewDigits, viewed}
}

const setValues = ({viewDigits}) => {

    const htmlCounts = document.querySelectorAll('.view-counter__count')
    
    htmlCounts.forEach((count, i) => {
        count.innerHTML = viewDigits[i]
    })
}