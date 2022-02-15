class CourseSerializer {

  static getSummary(course) {
    const allowedAttributes = ['id', 'name', 'par', 'totalHoles']
    let serializedCourse = {}
    for (const attribute of allowedAttributes) {
      serializedCourse[attribute] = course[attribute]
    }
    return serializedCourse
  }

}

export default CourseSerializer