import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

// Test a sync action

describe('Course Actions', () => {
  describe('CreateCourseSuccess', () => {
    it("should create a SAVE_COURSE_SUCCESS action", () => {
      const course = {id: "clean-code", title: "Clean Code"}
      const expectedAction = {
        type: types.SAVE_COURSE_SUCCESS,
        course: course
      };

      const action = courseActions.saveCourseSuccess(course);

      //assert
      expect(action).toEqual(expectedAction);
    })
  })

})
