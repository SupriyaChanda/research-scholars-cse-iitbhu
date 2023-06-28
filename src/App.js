
import './App.css';
import { Card } from './components/Card';
import Tribikram_Pradhan from "./assets/Tribikram_Pradhan.jpg"
import Supriya_Chanda from "./assets/Supriya_Chanda.jpg"
import Ramakant_Kumar from "./assets/Ramakant_Kumar.jpg"

const current=[
  
  {
    name:"Mr. Supriya Chanda",
    image:Supriya_Chanda,
    desg:"Research Scholar",
    supervisor:"Dr. Sukomal Pal",
    title:"Test processing on code-mixed data",
    year:"2020",
    google:"https://scholar.google.com/citations?user=wB9WetAAAAAJ&hl=en",
    researchgate:"https://www.researchgate.net/profile/Supriya-Chanda",
    dplb:"https://dblp.org/pid/280/9309.html",
    linkedin:"https://www.linkedin.com/in/supriyachandacs/",
  },
  {
      name:"Mr. Ramakant Kumar",
      image:Ramakant_Kumar,
      desg:"Research Scholar",
      supervisor:"Dr. Hari Prabhat Gupta",
      title:"IoT and LoRA based application",
      year:"2020",
      google:"https://scholar.google.co.in/",
      researchgate:"https://www.researchgate.net/profile/",
      dplb:"https://dblp.uni-trier.de.html",
      linkedin:"https://www.linkedin.com/in/",
      
  },
  
  
]
const alumni=[
  
  {
      name:"Dr. Tribikram Pradhan",
      image:Tribikram_Pradhan,
      desg:"Assistant Professor at Tezpur Central University",
      supervisor:"Dr. Sukomal Pal",
      title:"Scholarry Recommendation System",
      year:"2020",
      google:"https://scholar.google.co.in/citations?user=UBrLgeMAAAAJ&hl=en",
      researchgate:"https://www.researchgate.net/profile/Tribikram-Pradhan",
      dplb:"https://dblp.uni-trier.de/pid/168/3232.html",
      linkedin:"https://www.linkedin.com/in/tribikram-pradhan-39a67290/",
      
  },
  
  
]


function App() {
  return (
    <div>
      <div className='title text-center z-[999999] sticky top-0 right-0 left-0 text-[160%] bg-white  py-[2%]   font-bold'>
        <div className='text-[#67b0d1]  '>
       Research Scholars, Dept of CSE, IIT BHU
        </div>
      </div>
    <div className='member-rex-box bg-[#67b0d1] flex flex-col justify-center items-center w-full py-[2%] px-[5%] '>
      <h1 className= 'sub-title text-[130%] font-bold py-[1%] text-[#676767] rounded-full bg-white my-[1.5%] px-[5%]'>
        Current Members
      </h1>

       <div className='flex flex-col w-full member-res '>
           {current.map(item => {
                  return (<Card name={item.name} desg={item.desg} title={item.title} supervisor={item.supervisor} image={item.image}  email={item.email} year={item.year}  google={item.google} dplb={item.dplb} researchgate={item.researchgate} linkedin={item.linkedin}   />)
                })}
              </div>
            </div>
    <div className='member-rex-box bg-[#67b0d1] flex flex-col justify-center items-center w-full px-[5%] py-[4%]'>
      <h1 className=' sub-title text-[130%] font-bold py-[1%] text-[#676767] rounded-full bg-white my-[1.5%] px-[5%]'>
        Alumni
      </h1>

       <div className='flex flex-col w-full member-res '>
           {alumni.map(item => {
                  return (<Card name={item.name} desg={item.desg} title={item.title} supervisor={item.supervisor} image={item.image}  email={item.email} year={item.year}  google={item.google} dplb={item.dplb} researchgate={item.researchgate} linkedin={item.linkedin}   />)
                })}
              </div>
            </div>
            <div className='footer bg-white text-center font-serif text-[120%] text-[#67b0d1] ] py-[4%] flex justify-center items-center'>
                <div><span className='namefooter font-bold text-[140%]' > Site managed by Supriya Chanda, </span>
                  <br></br>
                  <span> <span className='text-black' > Email : </span> suplife24@gmail.com </span>  
                  <br/>
                  <span> <span className='text-black' > Phone : </span>(+91) 948 820 5994 </span>  
                </div>
            </div>
            </div>
  );
}

export default App;
