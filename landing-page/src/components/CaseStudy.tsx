import axios from "axios"
import { useEffect, useState } from "react"

const CaseStudy=()=>{
    const [caseStudy,setCaseStudy]=useState(null)
    const fetchCaseData=async()=>{
       try {
        const response = await axios.get("https://landing-2vb.pages.dev/api/case-study.json")
        if(response.data.status==="success"){
            setCaseStudy(response.data.data)
        }
       } catch (error) {
        console.error("Error fetching feature data:", error);
       }
    }
    useEffect(()=>{
        fetchCaseData()

    },[]);
    if (!caseStudy){
    return <div>Loading...</div>
  }
return(
     <div className="row mt-5">
        <div className="col-4">
          <img src={caseStudy.imageUrl} alt="Frame.png" className="img-fluid" />
        </div>
        <div className="col-lg-8 col-md-8 text-start pt-5 unlock">
          <h6 className="heading fw-bold">
            {caseStudy.title}
          </h6>
          <p className="contents">
         {caseStudy.description}
          </p>
          <button className="button-design mouse-cursor">
            <span className="button-text">{caseStudy.ctaText}</span>
          </button>
        </div>
      </div>

)
}

export default CaseStudy