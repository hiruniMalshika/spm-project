import {useState, useEffect} from 'react'
import axios from 'axios'

function ReportsAPI() {
    const [reports, setReports] = useState([])
    const [callback, setCallback] = useState(false)
    const [sort, setSort] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)
    

    useEffect(()=>{
        const getSavedReports = async ()=>{
            const res = await axios.get(`/api/savedreport?limit=${page*9}&${sort}`)
            setReports(res.data.savedReports)
            setResult(res.data.result)
        }
        getSavedReports()
    }, [callback, sort, page])



    return {
        reports: [reports, setReports],
        callback: [callback, setCallback],
        sort: [sort, setSort],
        page:[page, setPage],
        result:[result, setResult]
        
    }
}

export default ReportsAPI
