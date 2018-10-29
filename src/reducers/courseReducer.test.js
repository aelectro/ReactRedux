import expect from 'expect';
import CourseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe("CourseReducer", () => {
  it("Check if new immutable object is created correctly", () => {
    const currentState = [
      {title: "a"},
      {title: "b"}
    ];

    const course = {
      title: "C"
    };

    const action = actions.saveCourseSuccess(course);

    const newState = CourseReducer(currentState, action);

    expect(newState.length).toEqual(3);
    expect(newState[2].title).toBe("C");

  });
});
