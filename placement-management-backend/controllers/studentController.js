
import Student from "../models/Student.js";


export async function getStudents(req, res) {
    try {

        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const totalStudents = await Student.countDocuments();
        const totalPages = Math.ceil(totalStudents / limit);
        const sortField = req.query.sort || "studentName";
        const order = req.query.order || "asc";
        const sortOrder = order === "asc" ? 1 : -1;
        const branch = req.query.branch || "";

        const search = req.query.search || "";

        const cgpa = req.query.cgpa;
        const filter = {};
        if (branch) {

        filter.branch = branch;

        }
        if (cgpa) {

        filter.cgpa = Number(cgpa);

        }
        if (search) {

    filter.$or = [

        {

            studentName: {

                $regex: search,

                $options: "i"

            }

        },

        {

            email: {

                $regex: search,

                $options: "i"

            }

        }

    ];

}
        const students = await Student.find(filter)
        .sort({

        [sortField]: sortOrder

    })
        .skip(skip)
        .limit(limit);

        res.status(200).json({

            success: true,

            students,
            currentPage:page,
            totalPages,
            totalStudents

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

}

export async function getStudentById(req, res) {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student Not Found"
      });
    }

    res.status(200).json({
      success: true,
      student
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}
// ======================================================
// ADD NEW STUDENT
// URL : POST /students
// ======================================================

export async function addStudent(req, res) {
  try {
    const { studentName, email, phone, branch, cgpa } = req.body;

    const image = req.file ? req.file.filename : "";

    const student = await Student.create({
      studentName,
      email,
      phone,
      branch,
      cgpa,
      image
    });

    res.status(201).json({
      success: true,
      message: "Student Registered Successfully",
      student
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

export async function updateStudent(req, res) {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student Not Found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Student Updated Successfully",
      student
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}


// ======================================================
// DELETE STUDENT
// URL : DELETE /students/:id
// ======================================================

export async function deleteStudent(req, res) {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student Not Found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Student Deleted Successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}
export const searchStudents = async (req, res) => {

    try {

        const search = req.query.q || "";

        const students = await Student.find({

            studentName: {

                $regex: search,

                $options: "i"

            }

        });

        res.status(200).json({

            success: true,

            students

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};