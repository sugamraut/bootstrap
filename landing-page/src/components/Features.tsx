import axios from 'axios'
import  { useEffect, useState } from 'react'

function Features() {
   type FeatureType = {
    title: string;
    subtitle: string;
    features: {
      iconUrl: string;
      title: string;
      description: string;
    }[];
  };
  const [featureData, setFeatureData] = useState<FeatureType|null>(null)

  const fetchdata = async () => {
    try {
      const response = await axios.get("https://landing-2vb.pages.dev/api/features.json")
      if (response.data.status === "success") {
        setFeatureData(response.data.data)
      }
    } catch (error) {
      console.error("Error fetching feature data:", error)
    }
  }

  useEffect(() => {
    fetchdata()
  }, [])

  if (!featureData) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="mt-5">
        <h6 className="heading fw-semibold">
          {featureData.title}
        </h6>
      </div>
      <p className="heading-text">{featureData.subtitle}</p>

      <div className="row gap-4 mt-5">
        {featureData.features.map((feature, index) => (
          <div className="col" key={index}>
            <div className="cards text-center">
              <div>
                <img
                  src={feature.iconUrl}
                  alt={feature.title}
                  className="img-fluid"
                />
              </div>
              <h6 className="heading fw-bold">{feature.title}</h6>
              <p className="heading-text fw-normal">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Features
