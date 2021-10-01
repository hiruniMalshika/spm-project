const SavedReport = require('../models/csSavedReportModel')

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
        const queryObj = {...this.queryString} //queryString = req.query


        const excludedFields = ['page', 'sort', 'limit']
        excludedFields.forEach(el => delete(queryObj[el]))

        let queryStr = JSON.stringify(queryObj)

        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)
        
        this.query.find(JSON.parse(queryStr))

        return this;
    }
    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }
        return this;
    }
    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}


const savedReportCtrl = {
    getSavedReports : async (req, res) =>{
        try{
            console.log(req.query)
            const features = new APIfeatures(SavedReport.find(), req.query).filtering().sorting().paginating()
            const savedReports = await features.query

            res.json({
                status: 'success',
                result: savedReports.length,
                savedReports: savedReports
            })

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    createReport : async (req, res) =>{
        try{
        
            const {date, start_time, end_time, orders_count,complete_orders_count, 
                canceled_orders_count, revenue, other_payments, total_suppliers_charges  } = req.body;
            
            const savedReport = await SavedReport.findOne({date})
            //if(savedReport)  return res.status(400).json({msg: "In this date already saved or submitted report"})
          

            const newReport = new SavedReport({
                date, start_time, end_time, orders_count,complete_orders_count, 
                canceled_orders_count, revenue, other_payments, total_suppliers_charges
            })
            await newReport.save()
            res.json({msg: "Report saved successfully"})
        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    deleteSavedReport: async (req, res) =>{
        try{
            await SavedReport.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Saved Report"})

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    updateSavedReport: async (req, res) =>{
        try{
            const {date, start_time, end_time, orders_count,complete_orders_count, 
                canceled_orders_count, revenue, other_payments, total_suppliers_charges  } = req.body;

            await SavedReport.findOneAndUpdate({_id: req.params.id}, {date, start_time, end_time, orders_count,
            complete_orders_count, canceled_orders_count, revenue, other_payments, total_suppliers_charges})

            res.json({msg: "Updated a saved Report"})

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = savedReportCtrl