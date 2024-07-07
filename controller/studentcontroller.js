class StudentController {

    static createDoc = (req, res) => {
        res.redirect("students/")
    }
    static getAllDoc = (req, res) => {
        res.render("index");
    }
    static editDoc = (req, res) => {
        res.render("edit")
    }
    static updateDocById = (req, res) => {
        res.render("/students")
    }
    static deleteDocById = (req, res) => {
        res.render("/students")
    }
}

export default StudentController;
