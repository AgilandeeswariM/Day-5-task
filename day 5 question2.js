2. Create your own resume data in JSON format:

let myResume={
    "basics": {
      "name": "Agilandeeswari M",
      "email": "theagi1340@gamil.com",
      "phone": 9176322356,
      "degree": "M.Sc",
      "location": {
        "address": "Plot no: 18/3, Nethaji colony, 2nd main road, Velachery",
        "postalCode": 600042,
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India"
      },
      ]
    },
    "work": [
      {
        "company": "Sutherland Global Services",
        "position": "Associate CS Internet",
        "startDate": "31-08-2022",
        "endDate": "31-05-2023",
      },
    ],
    "education": [
      {
        "UG college": "SDNB Vaishnav College for Women",
        "department": "Mathematics",
        "studyType": "fulltime",
        "batch start year": 2017,
        "batch end year": 2020,
        "gpa": 7.5,
      }
      {
        "UG college": "SDNB Vaishnav College for Women",
        "department": "Applicable Mathematics",
        "studyType": "fulltime",
        "batch start year": 2020,
        "batch end year": 2022,
        "gpa": 8.6,
      }
    ],
    "skills": [
      {
        "name": "Javascript",
        "level": "beginner",
      }
    ],
    "languages": [
      {
        "language": "Tamil,English",
      }
    ],
  }
  console.log(myResume);