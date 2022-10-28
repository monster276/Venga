import React from 'react';
import "./Wrapper.css"
const Wrapper = () => {
    const data = [
    {
      cover: <i class="fas fa-truck"></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fas fa-id-card-alt"></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fas fa-shield-alt"></i>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fas fa-headset"></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ]
    return (
        <div  className='wrapper background'>
            <div className="container grid2">
                {data.map((value, index) => {
                    return (
                        <div key={index} className="product">
                            <div className="img icon-circle">
                                <i>{value.cover}</i>
                            </div>
                            <h3>{value.title}</h3>
                            <p>{value.decs}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Wrapper;