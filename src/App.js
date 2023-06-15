
import './App.css';
import { Card } from './components/Card';
import Tribikram_Pradhan from "./assets/Tribikram_Pradhan.jpg"
const current=[
  
  {
      name:"Dr. Tribikram Pradhan",
      image:Tribikram_Pradhan,
      desg:"Assistant Professor at Tezpur Central University",
      supervisor:"Dr. Sukomal Pal",
      title:"Scholarry Recommendation System ",
      year:"2020",
      google:"https://scholar.google.co.in/citations?user=UBrLgeMAAAAJ&hl=en",
      researchgate:"https://www.researchgate.net/profile/Tribikram-Pradhan",
      dplb:"https://dblp.uni-trier.de/pid/168/3232.html",
      linkedin:"https://www.linkedin.com/in/tribikram-pradhan-39a67290/",
      
  },
  
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
      <div className='title text-center text-[160%] text-[#67b0d1] py-[2%] font-bold'>
       Research Scholars, Dept of CSE, IIT BHU
      </div>
    <div className='member-rex-box bg-[#67b0d1] flex flex-col justify-center items-center w-full px-[5%] '>
      <h1 className= 'sub-title text-[130%] font-bold py-[1%] text-[#676767] rounded-full bg-white my-[1.5%] px-[5%]'>
        Current Members
      </h1>

       <div className='flex flex-col w-full member-res '>
           {current.map(item => {
                  return (<Card name={item.name} desg={item.desg} title={item.title} supervisor={item.supervisor} image={item.image}  email={item.email} year={item.year}  google={item.google} dplb={item.dplb} researchgate={item.researchgate} linkedin={item.linkedin}   />)
                })}
              </div>
            </div>
    <div className='member-rex-box bg-[#67b0d1] flex flex-col justify-center items-center w-full px-[5%] '>
      <h1 className=' sub-title text-[130%] font-bold py-[1%] text-[#676767] rounded-full bg-white my-[1.5%] px-[5%]'>
        Alumni
      </h1>

       <div className='flex flex-col w-full member-res '>
           {alumni.map(item => {
                  return (<Card name={item.name} desg={item.desg} title={item.title} supervisor={item.supervisor} image={item.image}  email={item.email} year={item.year}  google={item.google} dplb={item.dplb} researchgate={item.researchgate} linkedin={item.linkedin}   />)
                })}
              </div>
            </div>
            </div>
  );
}

export default App;
