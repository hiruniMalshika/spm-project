import {useState, useEffect} from 'react'
import axios from 'axios'

function ReportsAPI() {
    const [sreports, setsReports] = useState([])
    const [callback, setCallback] = useState(false)
    const [sort, setSort] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)
    

    useEffect(()=>{
        const getSavedReports = async ()=>{
            const res = await axios.get(`/api/submitreport?limit=${page*9}&${sort}`)
            setsReports(res.data.submitReports)
            setResult(res.data.result)
        }
        getSavedReports()
    }, [callback, sort, page])



    return {
        sreports: [sreports, setsReports],
        callback: [callback, setCallback],
        sort: [sort, setSort],
        page:[page, setPage],
        result:[result, setResult]
        
    }
}

export default ReportsAPI
