import Project from "../components/Project";

const projectList = [
  {
    id: 1,
    foto: "src/assets/1.png",
    title: "Password Generator",
    deploy: "https://contrerassofia.github.io/passwordGenerator/" ,
    repo: "https://github.com/ContrerasSofia/passwordGenerator"
  },
  {
    id: 2,
    foto: "src/assets/2.png",
    title: "Readme Generator",
    deploy: "https://github.com/ContrerasSofia/ReadMeGenerator" ,
    repo: "https://github.com/ContrerasSofia/ReadMeGenerator",
  },
  {
    id: 3,
    foto: "src/assets/3.png",
    title: "Work Day Scheduler",
    deploy: "https://contrerassofia.github.io/dayScheduler/" ,
    repo: "https://github.com/ContrerasSofia/dayScheduler"
  },
  {
    id: 4,
    foto: "src/assets/4.png",
    title: "JavaScript Quiz",
    deploy: "https://contrerassofia.github.io/virtualQuiz/" ,
    repo: "https://github.com/ContrerasSofia/virtualQuiz"
  },
  {
    id: 5,
    foto: "src/assets/5.png",
    title: "Note taker",
    deploy: "https://notetakerherokuap-b74e0117c833.herokuapp.com/" ,
    repo: "https://github.com/ContrerasSofia/noteTaker"
  },
  {
    id: 6,
    foto: "src/assets/6.png",
    title: "Weather Dashboard",
    deploy: "https://contrerassofia.github.io/weatherDashboard/" ,
    repo: "https://github.com/ContrerasSofia/weatherDashboard"
  }
];

function Home() {
  return (
  
 
  <div className="container text-center mb-3 ">
      <div className="row justify-content-center  mb-3 ">
      <Project projectList={projectList} />
      </div>
      </div>
  );
}

export default Home;
