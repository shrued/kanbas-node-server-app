import model from "./model.js";
export const createCourse = (course) => {
  delete course._id;
  return model.create(course);
};
export const updateCourse = (courseId, course) => {
  return model.updateOne({ _id: courseId }, { $set: course });
};
export const findAllCourses = () => model.find();
export const deleteCourse = (courseId) => {
  return model.deleteOne({ _id: courseId });
};
export const findCourseById = (courseId) => model.findById(courseId);
