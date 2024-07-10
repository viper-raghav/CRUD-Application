import StudentModel from '../models/studentmodels.js';

class StudentController {

    static createDoc = async (req, res) => {
        // console.log(req.body.name)
       try {
             const {name, age, fees} = req.body
             const doc = new StudentModel({
            name:name,
            age:age,
            fees:fees
        })

        // saving document
        const result = await doc.save()
        res.redirect("/students")
       } catch (error) {
        console.log(error)
       }
    }
    static getAllDoc =  async (req, res) => {
        try {
            const result = await StudentModel.find()
            res.render("index", {data: result});
        } catch (error) {
          console.log(error)
        }
        
    }
    static editDoc = async (req, res) => {
        // console.log(req.params.id)
        try {
           const result = await StudentModel.findById(req.params.id) 
           res.render("edit", {edit:result})
        } catch (error) {
            console.log(error);
        }   
    }
    static updateDocById = async (req, res) => {
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body);
            // console.log(result);
            res.redirect("/students");
        } catch (error) {
            console.log(error);
        }
    }
    
    static deleteDocById = async (req, res) => {
        // console.log(req.params.id)
        try { const result = await StudentModel.findByIdAndDelete(req.params.id)
            res.redirect("/students")
        } catch (error) {
            console.log(error)
        }

        
    }
}

export default StudentController;
