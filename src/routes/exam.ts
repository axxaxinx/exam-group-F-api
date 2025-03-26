import {Router} from 'express';

const router = Router();

const exams = [
    { id: 1, name: 'Math Exam', date: '2025-04-01' },
    { id: 2, name: 'Science Exam', date: '2025-04-05' },
    { id: 3, name: 'History Exam', date: '2025-04-10' },
  ];

//Placeholder Route
router.get("/", (req, res) => {
    res.json({message: "GROUP F API"});
});

router.put("/exams/:id", (req,res) => {
    const {id} = req.params;
    const {name, date} = req.body;

    const exam = exams.find(ex => ex.id === Number(id));
    if (exam) {
        exam.name = name;
        exam.date = date;
        res.json(exam);

        res.status(200).json({ message: "Exam updated successfully", exam });
    }
    else {
        return res.status(404).json({message: "Exam not found"});
    }
})
