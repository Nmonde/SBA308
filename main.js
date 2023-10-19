 // The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

 // Begining to code SBA308:
const studentScores = {};
for (const testSubmission of LearnerSubmissions) {
    const learnerId = testSubmission.learner_id;
    const score = testSubmission.submission.score;

if (!studentScores[learnerId]) {
    studentScores[learnerId] = {
        totalScores:0, totalPossiblePoints:0
    };
  }
  studentScores[learnerId].totalScores += score;
  const assignment = AssignmentGroup.assignments.find(
      (a) => a.id === testSubmission.assignment_id
  );
  if (assignment) {
      studentScores[learnerId].totalPossiblePoints += assignment.points_possible;
      
  }
}
for (const learnerId in studentScores) {
  const studentData = studentScores[learnerId];
  const weightAverage = (studentData.totalScores/ studentData.totalPossiblePoints) * 100;
  console.log(`Student ID: ${learnerId}`);
  console.log(`Total Score: ${studentData.totalScores}`);
  console.log(`Total Possible Points: ${studentData.totalPossiblePoints}`);
  console.log(`Weighted Average: ${weightAverage.toFixed(2)}%`);
}


// //I belive this was suppose to be the struture of this assisgnment, not sure if this was the layout needed which differ for example
// const LearnerData = function getLearnerData(courseInfo, AssignmentGroup, LearnerSubmissions)
// console.log(LearnerData);
